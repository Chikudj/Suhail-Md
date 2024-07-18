const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })
//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chikundemwenyewe@gmail.com"
global.location="Dodoma,Tanzania."

global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
global.github=process.env.GITHUB|| "https://github.com/chikudj/whatsapp-Md";
global.gurl  =process.env.GURL  || "https://wa.me/255675104490";
global.website=process.env.GURL || "https://wa.me/255675104490" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/djusefull.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKU_DJ¹-ᴍᴅ" 

global.devs = "255675104490" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255675104490";



//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  " " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_54_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhEWEVuTDNvUHJHRCs5MmkwNGQ4T0xKUGh2ZVFjcVRpSTFtUDg2Si9BQjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRIanU3cDZmUzV5SDdjTldqQzlPZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzU0YmEwMjgtMDQwZC00ZWE1LTg2ZjUtZjU5MjljMTZmNjhlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTE5LFxuICAgICAgODgsXG4gICAgICA3MyxcbiAgICAgIDIxNyxcbiAgICAgIDIxMCxcbiAgICAgIDI0MCxcbiAgICAgIDM4LFxuICAgICAgMTA5LFxuICAgICAgMTY4LFxuICAgICAgNDQsXG4gICAgICA5NixcbiAgICAgIDY0LFxuICAgICAgNTgsXG4gICAgICAyMjQsXG4gICAgICA4NyxcbiAgICAgIDQ1LFxuICAgICAgMTYzLFxuICAgICAgMjksXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICA2NyxcbiAgICAgIDcsXG4gICAgICA2OCxcbiAgICAgIDIyNixcbiAgICAgIDE2MyxcbiAgICAgIDEwNCxcbiAgICAgIDk0LFxuICAgICAgMTA0LFxuICAgICAgMTE0LFxuICAgICAgODYsXG4gICAgICAxMTQsXG4gICAgICAyMTcsXG4gICAgICA2MixcbiAgICAgIDIwOSxcbiAgICAgIDIwLFxuICAgICAgMjAwLFxuICAgICAgODEsXG4gICAgICAyMTksXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFZOWkVTNzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNTkyNTMzNzc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYwOTU4ODczNTM4NjM1OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liQ3lzc0hFT1hlNExRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwianNTczVkeUlMV29aM3VZeW53cW1aRFlIOWpPRmhDamF0eGNBQUVqMmdIQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzNGNpalVNMDBaY25yc01aQ2xOYVgwV1J2ZkhsQlJwNFRZZ2k3K2tKdXR0c3IxeFpKWmEwdSthYnpxRFhSR3FPcjlUcXRKdi9ndXE0OCs1RW14Qk9DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyTm5Gc1ZUVDkrZkRkRVhIWHdKbk1yY0Z6aVg4YThtSSswSjJWeHZ3NnBSZ1hRc1NtWmpkWE85QzJPdkl6T3o5MUFkL09IeHB0VVhtb25IZWZuZkJndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDU5MjUzMzc3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjQ5NjQwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⚔️ 𝐂𝐈𝐅𝐄𝐑 𝐁𝐎𝐓 ⚔️",
  ownername:process.env.OWNER_NAME|| "꧁•⊹٭CHIKU_DJ٭⊹•꧂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
