const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "fiICTCya#9zf9ZQMe68q9slvf3jMsOyhchk8ylVrM-m4XLh8q5sM",
    CAPTION: process.env.CAPTION || "кєєρ υѕιηg ʝσєℓ χм∂ вσт",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || " false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/yvf7h8.png",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yvf7h8.png",
    ALIVE_MSG: process.env.ALIVE_MSG || "*ɪ'ᴍ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ ᴍᴏᴛʜᴇʀғᴜᴄᴋᴇʀ*",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ᴊᴏᴇʟ ᴍᴅ ʙᴏᴛ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "αм ʝσєℓ м∂ вσт",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
