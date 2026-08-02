package cc.ujimc.serverlistsync;

import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.loader.api.FabricLoader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.AtomicMoveNotSupportedException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.Duration;

public final class UjimcServerListSyncClient implements ClientModInitializer {
    public static final String MOD_ID = "ujimc_server_list_sync";
    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);
    private static final URI SERVER_LIST_URI = URI.create("https://wangsychn.github.io/servers.dat");
    private static final HttpClient HTTP = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5))
            .followRedirects(HttpClient.Redirect.NORMAL)
            .build();

    @Override
    public void onInitializeClient() {
        replaceServerList();
    }

    private static void replaceServerList() {
        Path gameDirectory = FabricLoader.getInstance().getGameDir();
        Path serverList = gameDirectory.resolve("servers.dat");
        Path temporaryFile = gameDirectory.resolve("servers.dat.ujimc-download");

        try {
            HttpRequest request = HttpRequest.newBuilder(SERVER_LIST_URI)
                    .GET()
                    .timeout(Duration.ofSeconds(12))
                    .header("User-Agent", "UJIMC-Server-List-Sync/1.0")
                    .build();
            HttpResponse<InputStream> response = HTTP.send(request, HttpResponse.BodyHandlers.ofInputStream());
            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                throw new IllegalStateException("HTTP " + response.statusCode());
            }

            try (InputStream body = response.body()) {
                Files.copy(body, temporaryFile, StandardCopyOption.REPLACE_EXISTING);
            }
            if (Files.size(temporaryFile) == 0) {
                throw new IllegalStateException("Downloaded file is empty");
            }

            try {
                Files.move(temporaryFile, serverList, StandardCopyOption.ATOMIC_MOVE, StandardCopyOption.REPLACE_EXISTING);
            } catch (AtomicMoveNotSupportedException exception) {
                Files.move(temporaryFile, serverList, StandardCopyOption.REPLACE_EXISTING);
            }
            LOGGER.info("Updated multiplayer server list from {}.", SERVER_LIST_URI);
        } catch (Exception exception) {
            try {
                Files.deleteIfExists(temporaryFile);
            } catch (Exception ignored) {
                // The next startup will replace this temporary file.
            }
            LOGGER.warn("Could not update servers.dat; keeping the existing local file.", exception);
        }
    }
}
