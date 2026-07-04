const LINKS = {
  apply: "https://forms.office.com/r/ZnpXiVBAFJ",
  map: "http://107.172.83.38:28065/",
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
    "connect.china.label": "中国大陆向け",
    "connect.china.title": "Java / Bedrock",
    "connect.temp.label": "臨時サブ回線",
    "connect.temp.title": "Java のみ",
    "quick.kicker": "Quick Links",
    "quick.title": "すぐ使うリンク",
    "quick.apply.title": "ホワイトリスト申請",
    "quick.apply.detail": "大学メールアドレスがあれば登録できます。",
    "quick.map.title": "Web map",
    "quick.map.detail": "三つの世界をブラウザから確認できます。",
    "quick.mail.title": "お問い合わせ",
    "quick.guest.title": "見学アカウント",
    "quick.guest.detail": "まず雰囲気だけ見たい人向け。",
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
    "connect.china.label": "仅中国大陆",
    "connect.china.title": "Java / 基岩",
    "connect.temp.label": "临时副线",
    "connect.temp.title": "仅 Java",
    "quick.kicker": "Quick Links",
    "quick.title": "常用入口",
    "quick.apply.title": "申请白名单",
    "quick.apply.detail": "拥有大学邮箱即可申请注册。",
    "quick.map.title": "Web 地图",
    "quick.map.detail": "在浏览器中查看三个世界。",
    "quick.mail.title": "联系方式",
    "quick.guest.title": "参观账号",
    "quick.guest.detail": "适合先看看服务器氛围。",
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
    "connect.china.label": "Mainland China only",
    "connect.china.title": "Java / Bedrock",
    "connect.temp.label": "Temporary backup",
    "connect.temp.title": "Java only",
    "quick.kicker": "Quick Links",
    "quick.title": "Useful links",
    "quick.apply.title": "Whitelist application",
    "quick.apply.detail": "Players with a university email address can apply.",
    "quick.map.title": "Web map",
    "quick.map.detail": "View the three worlds from your browser.",
    "quick.mail.title": "Contact",
    "quick.guest.title": "Guest account",
    "quick.guest.detail": "For taking a quick look before joining.",
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
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.querySelectorAll("[data-i18n]").forEach((item) => {
    const value = dict[item.dataset.i18n];
    if (value) item.textContent = value;
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

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});
