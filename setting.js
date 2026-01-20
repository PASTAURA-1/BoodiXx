const fs = require("fs");
const chalk = require("chalk");

// بيانات المالك والبوت
global.creAtor = "+249112727808@s.whatsapp.net";
global.owner = ["+249112727808"];
global.ownerNumber = ["+249112727808@s.whatsapp.net"];
global.nomerOwner = "+249112727808";
global.namabotnya = "BoodiXx";
global.namaownernya = "BoodiXx";

// Web API
global.APIs = {
  betabotz: "https://tools.betabotz.eu.org/",
  ryzendesu: "https://api.ryzendesu.vip/",
};

global.APIKeys = {
  "https://tools.betabotz.eu.org/": "", // ضع مفتاح API هنا إذا لديك
  "https://api.ryzendesu.vip/": "", // ضع مفتاح API هنا إذا لديك
};

// Sticker Creator
global.packname = "© Created By";
global.author = "BoodiXx";

// جلسة البوت وروابط أخرى
global.sessionName = "session";
global.group = "";
global.youtube = "";
global.website = "";
global.github = "";
global.keyopenai = "2d2703d1"; // API مفتاح OpenAI
global.nomorowner = "https://wa.me/249112727808";

// Scrap Lib
global.scrap = new (require("../function/lib/lib.scrap.js"))();

// إعدادات أخرى
global.region = "I`m From Indonesia";
global.prefa = ["", "!", ".", "#", "-", "•"];
global.thumb = fs.readFileSync("./function/image/thumb.jpg");

global.krmd = {
  success: "```Success✅```",
  admin: "```Fitur Khusus Admin Group!!!```",
  botAdmin: "```Bot Harus Menjadi Admin Terlebih Dahulu!!!```",
  owner: "```Fitur Khusus Owner Bot!!!```",
  group: "```Fitur Digunakan Hanya Untuk Group!!!```",
  private: "```Fitur Digunakan Hanya Untuk Private Chat!!!```",
  bot: "```Fitur Khusus Pengguna Nomor Bot!!!```",
  error: "```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```",
  wait: "```Waittt...```",
};

// مراقبة الملف لأي تعديل
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
