# UJIMC Server List Sync

A client-only Fabric mod for Minecraft 26.1.2. At startup, it downloads `https://wangsychn.github.io/servers.dat` and replaces the instance's local `servers.dat` file.

## Installation

1. Install Fabric Loader 0.19.3 and Fabric API `0.155.2+26.1.2` in the HMCL instance.
2. Copy the built JAR from `build/libs` into that instance's `mods` folder.
3. Start the game. The mod downloads the remote file before Minecraft loads the multiplayer server list.

The remote file must be a valid Minecraft NBT `servers.dat` file. If downloading fails, the existing local file remains untouched.
