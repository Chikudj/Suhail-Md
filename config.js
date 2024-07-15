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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_41_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMCxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg2LFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGRUxsWTg2Y2pRUkt4elhPVEd1RkRnQkJyRkg2bTU0SFZiV3hWMTR1Q3VRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJY2k2Y3E2bFFyZTFSYUFGaXFvamRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzYzM1N2JkLTM0MTctNDEwMy1iY2MxLTIwZjIxNWM4MjE0MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICA5MCxcbiAgICAgIDE4MixcbiAgICAgIDE5MyxcbiAgICAgIDUzLFxuICAgICAgMTQxLFxuICAgICAgMTg5LFxuICAgICAgMTE5LFxuICAgICAgODYsXG4gICAgICAxMDIsXG4gICAgICAyMjksXG4gICAgICA4NixcbiAgICAgIDM4LFxuICAgICAgMTkzLFxuICAgICAgOTksXG4gICAgICAyMDAsXG4gICAgICAxNjgsXG4gICAgICAxNDEsXG4gICAgICAxNTEsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTUsXG4gICAgICAyMixcbiAgICAgIDIyNyxcbiAgICAgIDYwLFxuICAgICAgMTY5LFxuICAgICAgOTMsXG4gICAgICAxNDQsXG4gICAgICAxNDgsXG4gICAgICAxMDYsXG4gICAgICAxNDIsXG4gICAgICAxOTcsXG4gICAgICAxNzQsXG4gICAgICAxODYsXG4gICAgICAyMTYsXG4gICAgICAxNDYsXG4gICAgICAxMCxcbiAgICAgIDIyNyxcbiAgICAgIDIwOCxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg5WkxQNVpCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjIxNTAxNTQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIPwnZCrLiDwnZCE8J2QmvCdkKzwnZCtXCIsXG4gICAgXCJsaWRcIjogXCIxOTY2NTQwODcwNjE1MzE6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQWDltNmNIRVBtdTFyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjduTDNqMCtWQ081Q1RBUlFGamJFUjlvS3M1WFFKR3F4K29nUTR3UWkxMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTERrQXI2ZHY2OFdWSXZXVjVDQXRqS0NCcWt0N211eEo0ci9yMjVodUtOY0hWMEtqOEh4NVFqRmZIRHZNOFhMYndGNUFoZDY1dmwvTlhnRyt2MXVuQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1d3dHErSDFWL21zWFkrZUZDRTByVFFmbFlaSkNrUUgrVlhQVnRHYXJYeVY3QXpUUjVnc1RVWVAraUk2bGt6UGozQ1dobHJ2Z1ByUUp6ZGRXNzhnREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjIyMTUwMTU0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDc5Njc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0xtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLTG0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJic0l1M3U2WFdMK0l4S3RINlc1OEpaT3BFQTZRUlhWaVFBVVlCM1NWVDIwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NjEyOTU2MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA3OTY4MzczOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "❚█══EAST BOT══█❚",
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
  LANG: ( process.env.THEME ||  "EDITH"  ).toUpperCase(),



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
