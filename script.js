const LINKS = {
  apply: "https://forms.office.com/r/ZnpXiVBAFJ",
  pack: "./ujimc.zip",
  map: "http://192.238.143.158:19149/",
  discord: "https://discord.gg/ZZjwePyKER",
  qq: "https://qm.qq.com/q/E4zoeNUOCQ",
};

const messages = {
  ja: {
    "nav.connect": "接続",
    "nav.guest": "見学",
    "nav.worlds": "ワールド",
    "nav.features": "特徴",
    "nav.contact": "連絡先",
    "nav.join": "ホワイトリスト申請",
    "hero.eyebrow": "Java 版・Bedrock 版クロスプレイ対応",
    "hero.subtitle": "宇治キャンパス発、学内外のプレイヤーが集まる自由なサバイバルサーバー。",
    "hero.apply": "ホワイトリスト申請",
    "hero.download": "推奨パックをダウンロード (JAVA)",
    "hero.connect": "接続情報を見る",
    "hero.map": "Web map",
    "hero.community": "コミュニティ参加",
    "hero.discord": "Discord に参加",
    "hero.qq": "QQ に参加",
    "connect.kicker": "Connection",
    "connect.title": "接続情報",
    "connect.description": "Java 版と Bedrock 版のどちらでも参加できます。バージョンは自由、推奨は Java 26.1.2 です。",
    "connect.main.label": "通常接続",
    "connect.main.title": "Java / Bedrock",
    "quick.kicker": "Quick Links",
    "quick.title": "すぐ使うリンク",
    "quick.apply.title": "ホワイトリスト申請",
    "quick.apply.detail": "大学メールアドレスがあれば登録できます。",
    "quick.map.title": "Web map",
    "quick.map.detail": "三つの世界をブラウザから確認できます。",
    "quick.mail.title": "お問い合わせ",
    "quick.guest.title": "見学アカウント",
    "quick.guest.detail": "まず雰囲気だけ見たい人向け。",
    "gallery.label": "ポスターギャラリー",
    "gallery.poster1": "UJIMC 紹介ポスター 1",
    "gallery.poster2": "UJIMC 紹介ポスター 2",
    "gallery.poster3": "UJIMC 紹介ポスター 3",
    "gallery.prev": "前の画像",
    "gallery.next": "次の画像",
    "gallery.dots": "ポスター切り替え",
    "gallery.go1": "1枚目のポスターを表示",
    "gallery.go2": "2枚目のポスターを表示",
    "gallery.go3": "3枚目のポスターを表示",
    "gallery.lightbox": "拡大表示したポスター",
    "gallery.lightboxHint": "クリック、下へスワイプ、または戻る操作で閉じます。",
    "guest.kicker": "Guest",
    "guest.title": "見学用アカウント",
    "guest.description": "サーバーの雰囲気を確認したい場合は、見学用アカウントでログインできます。通常の参加はホワイトリスト申請後にお願いします。",
    "guest.account": "アカウント",
    "guest.password": "パスワード",
    "worlds.kicker": "Worlds",
    "worlds.title": "三つの世界",
    "worlds.description": "主世界、ネザー、エンドのすべてに専用のワールド生成を導入。いつものサバイバルに、探索する楽しさをもう一度加えています。",
    "worlds.overworld.plugin": "Terra",
    "worlds.overworld.title": "主世界",
    "worlds.overworld.detail": "自然な地形と大きな景観を持つ、拠点づくりと長期開拓の中心。",
    "worlds.nether.plugin": "Incendium",
    "worlds.nether.title": "ネザー",
    "worlds.nether.detail": "危険なバイオームと構造物が広がる、緊張感のあるネザー。",
    "worlds.end.plugin": "Nullscape",
    "worlds.end.title": "エンド",
    "worlds.end.detail": "虚空に浮かぶ異質な地形を旅する、静かで壮大なエンド。",
    "features.kicker": "Features",
    "features.title": "UJIMC の特徴",
    "features.description": "純粋なサバイバルの手触りを残しつつ、キャンパス発のコミュニティとして遊びやすさと自由度を整えています。",
    "features.cross.title": "Java / Bedrock クロスプレイ",
    "features.cross.detail": "好きなエディションから参加可能。バージョン自由、推奨は Java 26.1.2。",
    "features.vanilla.title": "純サバイバル中心",
    "features.vanilla.detail": "経済や重い独自システムで縛らず、建築・探索・生活を自分のペースで楽しめます。",
    "features.worldgen.title": "三つの生成世界",
    "features.worldgen.detail": "Terra、Incendium、Nullscape が、見慣れた三次元をもう一度新鮮にします。",
    "features.tools.title": "便利な機能",
    "features.tools.detail": "warp、飛行許可、地震速報など、生活を支える実用的で少し楽しいプラグインがあります。",
    "features.campus.title": "宇治キャンパス発",
    "features.campus.detail": "サーバー所在地は宇治キャンパス。大学メールアドレスがあればホワイトリスト登録できます。",
    "features.community.title": "多言語コミュニティ",
    "features.community.detail": "学内外のプレイヤーが、日本語・中文・English を交えて遊んでいます。",
    "contact.kicker": "Contact",
    "contact.title": "連絡先",
    "contact.description": "ホワイトリスト申請、接続、見学アカウントについての質問はこちらへ。",
    "footer.assets": "World images are project media from Terra, Incendium and Nullscape.",
  },
  zh: {
    "nav.connect": "连接",
    "nav.guest": "参观",
    "nav.worlds": "世界",
    "nav.features": "特色",
    "nav.contact": "联系方式",
    "nav.join": "申请白名单",
    "hero.eyebrow": "Java 版 / 基岩版跨平台互通",
    "hero.subtitle": "从宇治校区出发，面向校内外玩家的自由生存服务器。",
    "hero.apply": "申请白名单",
    "hero.download": "下载服务器推荐整合包 (JAVA)",
    "hero.connect": "查看连接信息",
    "hero.map": "Web 地图",
    "hero.community": "加入社区",
    "hero.discord": "加入 Discord",
    "hero.qq": "QQ 群",
    "connect.kicker": "Connection",
    "connect.title": "连接信息",
    "connect.description": "Java 版和基岩版均可加入。版本不限，推荐 Java 26.1.2。",
    "connect.main.label": "常规线路",
    "connect.main.title": "Java / 基岩",
    "connect.china.notice": "中国大陆地区有专用线路，请加QQ群了解或者是询问管理人员。",
    "quick.kicker": "Quick Links",
    "quick.title": "常用入口",
    "quick.apply.title": "申请白名单",
    "quick.apply.detail": "拥有大学邮箱即可申请注册。",
    "quick.map.title": "Web 地图",
    "quick.map.detail": "在浏览器中查看三个世界。",
    "quick.mail.title": "联系方式",
    "quick.guest.title": "参观账号",
    "quick.guest.detail": "适合先看看服务器氛围。",
    "gallery.label": "海报轮播",
    "gallery.poster1": "UJIMC 介绍海报 1",
    "gallery.poster2": "UJIMC 介绍海报 2",
    "gallery.poster3": "UJIMC 介绍海报 3",
    "gallery.prev": "上一张图片",
    "gallery.next": "下一张图片",
    "gallery.dots": "切换海报",
    "gallery.go1": "显示第 1 张海报",
    "gallery.go2": "显示第 2 张海报",
    "gallery.go3": "显示第 3 张海报",
    "gallery.lightbox": "放大的海报",
    "gallery.lightboxHint": "点击、向下滑动，或使用返回键关闭。",
    "guest.kicker": "Guest",
    "guest.title": "参观用账号",
    "guest.description": "如果只是想先看看服务器氛围，可以使用参观账号登录。正式游玩请先申请白名单。",
    "guest.account": "账号",
    "guest.password": "密码",
    "worlds.kicker": "Worlds",
    "worlds.title": "三个世界",
    "worlds.description": "主世界、地狱、末地都使用专门的世界生成方案，让纯生存也保留持续探索的新鲜感。",
    "worlds.overworld.plugin": "Terra",
    "worlds.overworld.title": "主世界",
    "worlds.overworld.detail": "自然、开阔、适合长期定居与大型建设的主世界。",
    "worlds.nether.plugin": "Incendium",
    "worlds.nether.title": "地狱",
    "worlds.nether.detail": "危险地貌与结构交错，探索时更有压迫感的下界。",
    "worlds.end.plugin": "Nullscape",
    "worlds.end.title": "末地",
    "worlds.end.detail": "漂浮在虚空中的异质地形，安静、辽阔，也更值得远行。",
    "features.kicker": "Features",
    "features.title": "UJIMC 的特色",
    "features.description": "保留纯生存的核心体验，同时用适度的权限和插件提升长期游玩的舒适度。",
    "features.cross.title": "Java / 基岩跨平台",
    "features.cross.detail": "两种版本都可以加入。版本不限，推荐 Java 26.1.2。",
    "features.vanilla.title": "以纯生存为核心",
    "features.vanilla.detail": "不使用繁重经济或复杂玩法系统限制玩家，建筑、探索和生活都按自己的节奏来。",
    "features.worldgen.title": "三套世界生成",
    "features.worldgen.detail": "Terra、Incendium、Nullscape 让主世界、地狱和末地都更值得探索。",
    "features.tools.title": "便利功能",
    "features.tools.detail": "支持 warp、允许飞行，并带有地震预警等实用又有趣的插件。",
    "features.campus.title": "宇治校区服务器",
    "features.campus.detail": "服务器所在地为宇治校区。拥有大学邮箱即可申请白名单。",
    "features.community.title": "多语言社区",
    "features.community.detail": "校内外玩家共同游玩，日语、中文和英语都可以使用。",
    "contact.kicker": "Contact",
    "contact.title": "联系方式",
    "contact.description": "关于白名单、连接问题或参观账号，可以通过邮箱联系。",
    "footer.assets": "世界展示图来自 Terra、Incendium 与 Nullscape 项目媒体。",
  },
  en: {
    "nav.connect": "Connect",
    "nav.guest": "Guest",
    "nav.worlds": "Worlds",
    "nav.features": "Features",
    "nav.contact": "Contact",
    "nav.join": "Apply for whitelist",
    "hero.eyebrow": "Java and Bedrock cross-play",
    "hero.subtitle": "A free survival server from Uji Campus for players inside and outside the university.",
    "hero.apply": "Apply for whitelist",
    "hero.download": "Download recommended pack (JAVA)",
    "hero.connect": "Connection info",
    "hero.map": "Web map",
    "hero.community": "Join the community",
    "hero.discord": "Join Discord",
    "hero.qq": "QQ group",
    "connect.kicker": "Connection",
    "connect.title": "Connection info",
    "connect.description": "Both Java Edition and Bedrock Edition are supported. Any version may join; Java 26.1.2 is recommended.",
    "connect.main.label": "Main address",
    "connect.main.title": "Java / Bedrock",
    "quick.kicker": "Quick Links",
    "quick.title": "Useful links",
    "quick.apply.title": "Whitelist application",
    "quick.apply.detail": "Players with a university email address can apply.",
    "quick.map.title": "Web map",
    "quick.map.detail": "View the three worlds from your browser.",
    "quick.mail.title": "Contact",
    "quick.guest.title": "Guest account",
    "quick.guest.detail": "For taking a quick look before joining.",
    "gallery.label": "Poster gallery",
    "gallery.poster1": "UJIMC poster 1",
    "gallery.poster2": "UJIMC poster 2",
    "gallery.poster3": "UJIMC poster 3",
    "gallery.prev": "Previous image",
    "gallery.next": "Next image",
    "gallery.dots": "Poster navigation",
    "gallery.go1": "Show poster 1",
    "gallery.go2": "Show poster 2",
    "gallery.go3": "Show poster 3",
    "gallery.lightbox": "Enlarged poster",
    "gallery.lightboxHint": "Click, swipe down, or go back to close.",
    "guest.kicker": "Guest",
    "guest.title": "Guest account",
    "guest.description": "Use the guest account if you only want to look around first. Regular play requires whitelist approval.",
    "guest.account": "Account",
    "guest.password": "Password",
    "worlds.kicker": "Worlds",
    "worlds.title": "Three worlds",
    "worlds.description": "The Overworld, Nether and End each use dedicated world generation, keeping exploration fresh while preserving survival gameplay.",
    "worlds.overworld.plugin": "Terra",
    "worlds.overworld.title": "Overworld",
    "worlds.overworld.detail": "Natural, broad terrain for long-term bases, travel and large builds.",
    "worlds.nether.plugin": "Incendium",
    "worlds.nether.title": "Nether",
    "worlds.nether.detail": "A more dangerous Nether filled with distinct biomes and structures.",
    "worlds.end.plugin": "Nullscape",
    "worlds.end.title": "End",
    "worlds.end.detail": "Quiet, alien terrain suspended over the void, made for long journeys.",
    "features.kicker": "Features",
    "features.title": "Why UJIMC",
    "features.description": "UJIMC keeps the feel of clean survival while adding enough freedom and convenience for long-term play.",
    "features.cross.title": "Java / Bedrock cross-play",
    "features.cross.detail": "Join from either edition. Any version is accepted; Java 26.1.2 is recommended.",
    "features.vanilla.title": "Clean survival first",
    "features.vanilla.detail": "No heavy economy or complicated custom progression. Build, explore and live at your own pace.",
    "features.worldgen.title": "Three generated dimensions",
    "features.worldgen.detail": "Terra, Incendium and Nullscape make the Overworld, Nether and End worth exploring again.",
    "features.tools.title": "Convenient tools",
    "features.tools.detail": "Warp, flight permission, earthquake alerts and other practical, playful plugins are available.",
    "features.campus.title": "Hosted at Uji Campus",
    "features.campus.detail": "The server is located at Uji Campus. Players with a university email address can apply for the whitelist.",
    "features.community.title": "International community",
    "features.community.detail": "Players from inside and outside the university play together in Japanese, Chinese and English.",
    "contact.kicker": "Contact",
    "contact.title": "Contact",
    "contact.description": "For whitelist, connection or guest account questions, contact us by email.",
    "footer.assets": "World images are project media from Terra, Incendium and Nullscape.",
  },
  "zh-tw": {
    "nav.connect": "連線",
    "nav.guest": "參觀",
    "nav.worlds": "世界",
    "nav.features": "特色",
    "nav.contact": "聯絡",
    "nav.join": "申請白名單",
    "hero.eyebrow": "Java 版・Bedrock 版跨平台互通",
    "hero.subtitle": "從宇治校區出發，面向校內外玩家的自由生存伺服器。",
    "hero.apply": "申請白名單",
    "hero.download": "下載推薦整合包 (JAVA)",
    "hero.connect": "查看連線資訊",
    "hero.map": "Web 地圖",
    "hero.community": "加入社群",
    "hero.discord": "加入 Discord",
    "hero.qq": "QQ 群",
    "connect.kicker": "Connection",
    "connect.title": "連線資訊",
    "connect.description": "Java 版與基岩版都可以加入。版本不限，建議 Java 26.1.2。",
    "connect.main.label": "主要連線",
    "connect.main.title": "Java / Bedrock",
    "quick.kicker": "Quick Links",
    "quick.title": "常用連結",
    "quick.apply.title": "申請白名單",
    "quick.apply.detail": "只要有大學電子郵件即可申請。",
    "quick.map.title": "Web 地圖",
    "quick.map.detail": "可在瀏覽器中查看三個世界。",
    "quick.mail.title": "聯絡方式",
    "quick.guest.title": "參觀帳號",
    "quick.guest.detail": "適合先看看伺服器氛圍。",
    "gallery.label": "海報輪播",
    "gallery.poster1": "UJIMC 介紹海報 1",
    "gallery.poster2": "UJIMC 介紹海報 2",
    "gallery.poster3": "UJIMC 介紹海報 3",
    "gallery.prev": "上一張圖片",
    "gallery.next": "下一張圖片",
    "gallery.dots": "切換海報",
    "gallery.go1": "顯示第 1 張海報",
    "gallery.go2": "顯示第 2 張海報",
    "gallery.go3": "顯示第 3 張海報",
    "gallery.lightbox": "放大的海報",
    "gallery.lightboxHint": "點擊、向下滑動，或使用返回鍵關閉。",
    "guest.kicker": "Guest",
    "guest.title": "參觀用帳號",
    "guest.description": "如果只是想先看看伺服器氛圍，可以使用參觀帳號登入。正式遊玩請先申請白名單。",
    "guest.account": "帳號",
    "guest.password": "密碼",
    "worlds.kicker": "Worlds",
    "worlds.title": "三個世界",
    "worlds.description": "主世界、地獄、終界都使用專門的世界生成方案，讓純生存也保有持續探索的新鮮感。",
    "worlds.overworld.plugin": "Terra",
    "worlds.overworld.title": "主世界",
    "worlds.overworld.detail": "自然、開闊，適合長期定居與大型建設的主世界。",
    "worlds.nether.plugin": "Incendium",
    "worlds.nether.title": "地獄",
    "worlds.nether.detail": "危險地貌與結構交錯，探索時更有壓迫感的下界。",
    "worlds.end.plugin": "Nullscape",
    "worlds.end.title": "終界",
    "worlds.end.detail": "漂浮在虛空中的異質地形，安靜、遼闊，也更值得遠行。",
    "features.kicker": "Features",
    "features.title": "UJIMC 的特色",
    "features.description": "保留純生存的核心體驗，同時用適度的權限和插件提升長期遊玩的舒適度。",
    "features.cross.title": "Java / 基岩跨平台",
    "features.cross.detail": "兩種版本都可以加入。版本不限，建議 Java 26.1.2。",
    "features.vanilla.title": "以純生存為核心",
    "features.vanilla.detail": "不使用繁重經濟或複雜玩法系統限制玩家，建築、探索和生活都按自己的節奏來。",
    "features.worldgen.title": "三套世界生成",
    "features.worldgen.detail": "Terra、Incendium、Nullscape 讓主世界、地獄和終界都更值得探索。",
    "features.tools.title": "便利功能",
    "features.tools.detail": "支援 warp、允許飛行，並帶有地震預警等實用又有趣的插件。",
    "features.campus.title": "宇治校區伺服器",
    "features.campus.detail": "伺服器所在地為宇治校區。擁有大學電子郵件即可申請白名單。",
    "features.community.title": "多語言社群",
    "features.community.detail": "校內外玩家共同遊玩，日語、中文和英語都可以使用。",
    "contact.kicker": "Contact",
    "contact.title": "聯絡方式",
    "contact.description": "關於白名單、連線問題或參觀帳號，可以透過電子郵件聯絡。",
    "footer.assets": "世界展示圖來自 Terra、Incendium 與 Nullscape 專案媒體。",
  },
};

const languageSelect = document.querySelector("#language-select");
const themeToggle = document.querySelector("#theme-toggle");

function applyLinks() {
  Object.entries(LINKS).forEach(([key, value]) => {
    document.querySelectorAll(`[data-link="${key}"]`).forEach((item) => {
      item.href = value;
    });
  });
}

function applyLanguage(language) {
  const dict = messages[language] || messages.ja;
  document.documentElement.lang =
    language === "zh" ? "zh-CN" : language === "zh-tw" ? "zh-TW" : language;
  document.querySelectorAll("[data-i18n]").forEach((item) => {
    const value = dict[item.dataset.i18n];
    if (value) item.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((item) => {
    const value = dict[item.dataset.i18nAria];
    if (value) item.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-show]").forEach((item) => {
    const allowed = item.dataset.i18nShow.split(",").map((value) => value.trim());
    item.hidden = !allowed.includes(language);
  });
  languageSelect.value = language;
  localStorage.setItem("ujimc-language", language);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("ujimc-theme", theme);
}

const savedTheme = localStorage.getItem("ujimc-theme");
const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
const initialLanguage = localStorage.getItem("ujimc-language") || "ja";

applyLinks();
applyTheme(initialTheme);
applyLanguage(initialLanguage);

const lightbox = document.querySelector("[data-poster-lightbox]");
const lightboxImage = lightbox?.querySelector(".poster-lightbox-image");
let lightboxHistoryActive = false;
let lightboxPointerStartY = 0;
let lightboxPointerMoveY = 0;
let lightboxDragging = false;
let ignoreNextLightboxClick = false;

function closePosterLightbox(fromHistory = false) {
  if (!lightbox || lightbox.hidden) return;
  if (!fromHistory && lightboxHistoryActive) {
    history.back();
    return;
  }
  lightbox.hidden = true;
  lightboxHistoryActive = false;
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.style.transform = "";
}

function openPosterLightbox(image) {
  if (!lightbox || !lightboxImage) return;
  const caption = image.closest(".carousel-slide")?.querySelector("figcaption")?.textContent.trim() || "";
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = caption;
  lightbox.hidden = false;
  ignoreNextLightboxClick = true;
  document.body.classList.add("lightbox-open");
  lightboxImage.style.transform = "";
  window.setTimeout(() => {
    ignoreNextLightboxClick = false;
  }, 120);
  if (!lightboxHistoryActive) {
    history.pushState({ ...history.state, posterLightbox: true }, "", location.href);
    lightboxHistoryActive = true;
  }
}

if (lightbox) {
  lightbox.addEventListener("click", () => {
    if (ignoreNextLightboxClick) return;
    if (lightboxPointerMoveY > 6) return;
    closePosterLightbox();
  });
  lightbox.addEventListener("pointerdown", (event) => {
    lightboxDragging = true;
    lightboxPointerStartY = event.clientY;
    lightboxPointerMoveY = 0;
    lightbox.setPointerCapture?.(event.pointerId);
  });
  lightbox.addEventListener("pointermove", (event) => {
    if (!lightboxDragging) return;
    lightboxPointerMoveY = Math.max(0, event.clientY - lightboxPointerStartY);
    lightboxImage.style.transform = `translateY(${Math.min(lightboxPointerMoveY, 120)}px)`;
  });
  lightbox.addEventListener("pointerup", () => {
    lightboxDragging = false;
    if (lightboxPointerMoveY > 92) closePosterLightbox();
    else lightboxImage.style.transform = "";
    window.setTimeout(() => {
      lightboxPointerMoveY = 0;
    }, 0);
  });
  lightbox.addEventListener("pointercancel", () => {
    lightboxDragging = false;
    lightboxImage.style.transform = "";
    lightboxPointerMoveY = 0;
  });
  window.addEventListener("popstate", () => {
    if (!lightbox.hidden) closePosterLightbox(true);
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePosterLightbox();
  });
}

function initCarousel(carousel) {
  const gallery = carousel.closest(".gallery-section");
  const viewport = carousel.querySelector(".carousel-viewport");
  const track = carousel.querySelector(".carousel-track");
  const slides = [...carousel.querySelectorAll(".carousel-slide")];
  const dots = [...gallery.querySelectorAll("[data-carousel-dot]")];
  const currentLabel = gallery.querySelector(".carousel-current");
  const totalLabel = gallery.querySelector(".carousel-total");
  const previousButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  let current = 0;
  let startX = 0;
  let dragX = 0;
  let isDragging = false;
  let dragged = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchMoved = false;

  function render(offset = 0) {
    track.style.transform = `translateX(calc(${-current * 100}% + ${offset}px))`;
    dots.forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === current));
    });
    currentLabel.textContent = String(current + 1);
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    render();
  }

  function openImageAtPoint(clientX, clientY) {
    const target = document.elementFromPoint(clientX, clientY);
    const image = target?.closest?.(".carousel-slide img");
    if (image && viewport.contains(image)) openPosterLightbox(image);
  }

  totalLabel.textContent = String(slides.length);
  viewport.tabIndex = 0;
  previousButton.addEventListener("click", () => goTo(current - 1));
  nextButton.addEventListener("click", () => goTo(current + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => goTo(Number(dot.dataset.carouselDot)));
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goTo(current - 1);
    if (event.key === "ArrowRight") goTo(current + 1);
  });

  viewport.addEventListener("pointerdown", (event) => {
    isDragging = true;
    dragged = false;
    startX = event.clientX;
    dragX = 0;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture?.(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    dragX = event.clientX - startX;
    if (Math.abs(dragX) > 8) dragged = true;
    render(dragX);
  });

  function stopDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove("is-dragging");
    const threshold = Math.min(110, viewport.clientWidth * 0.22);
    if (dragX > threshold) goTo(current - 1);
    else if (dragX < -threshold) goTo(current + 1);
    else {
      render();
      const hasPoint = typeof event?.clientX === "number" && typeof event?.clientY === "number";
      if (!dragged && hasPoint) openImageAtPoint(event.clientX, event.clientY);
    }
    window.setTimeout(() => {
      dragged = false;
    }, 0);
  }

  viewport.addEventListener("pointerup", stopDrag);
  viewport.addEventListener("pointercancel", stopDrag);
  viewport.addEventListener("lostpointercapture", stopDrag);
  viewport.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchMoved = false;
    },
    { passive: true },
  );
  viewport.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];
      if (Math.abs(touch.clientX - touchStartX) > 8 || Math.abs(touch.clientY - touchStartY) > 8) {
        touchMoved = true;
      }
    },
    { passive: true },
  );
  viewport.addEventListener(
    "touchend",
    (event) => {
      if (touchMoved || !lightbox?.hidden) return;
      const touch = event.changedTouches[0];
      if (touch) openImageAtPoint(touch.clientX, touch.clientY);
    },
    { passive: true },
  );
  render();
}

document.querySelectorAll("[data-carousel]").forEach(initCarousel);

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});
