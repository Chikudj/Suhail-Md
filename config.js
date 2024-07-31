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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_33_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL2ROOTBDa0xycWZCWWpaNjdxK3lkQUVTR3lUSjdXY0w3dFFYek5LSXVnbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjIxNTAxNTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY5RDlBOTVGNkJGRTgyOTkzQUEwRUQ4NDY1QTgzOEZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQ1NDQwM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6QldNdFhyV1M3V1Jwdk1LT2FNLXBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkYmU5NTQ1LTkyMGItNDhhMi05NTUzLTE2ZDJjMWU0MjIyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAyMTcsXG4gICAgICAyMzIsXG4gICAgICAxNTcsXG4gICAgICAxNzEsXG4gICAgICAxNzQsXG4gICAgICAxNjAsXG4gICAgICAxNDcsXG4gICAgICAxMzQsXG4gICAgICAxODAsXG4gICAgICA4MSxcbiAgICAgIDc0LFxuICAgICAgNzMsXG4gICAgICAyMDQsXG4gICAgICA4NyxcbiAgICAgIDE1LFxuICAgICAgNTksXG4gICAgICA3NCxcbiAgICAgIDE1MixcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDEyNyxcbiAgICAgIDIzMCxcbiAgICAgIDI1MSxcbiAgICAgIDE1OSxcbiAgICAgIDE2NyxcbiAgICAgIDIwLFxuICAgICAgMTkxLFxuICAgICAgMTE4LFxuICAgICAgNjcsXG4gICAgICAyMixcbiAgICAgIDg1LFxuICAgICAgMjA4LFxuICAgICAgNTAsXG4gICAgICAxOTAsXG4gICAgICAxMjQsXG4gICAgICAxNTAsXG4gICAgICAxMDAsXG4gICAgICAyMTQsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXRktQOVkzU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjIyMTUwMTU0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qg/CdkKsuIPCdkITwnZCa8J2QrPCdkK1cIixcbiAgICBcImxpZFwiOiBcIjE5NjY1NDA4NzA2MTUzMToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNzltNmNIRVBtaXFyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjduTDNqMCtWQ081Q1RBUlFGamJFUjlvS3M1WFFKR3F4K29nUTR3UWkxMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRGJDK0FpREU0T0VYMVFHeG5aZXBFb0VUREc2NFNDTGwxMGk4TmcxbTkyeUtyUVNEUXB1V0ViZmJ2Rk5zWjVOdXpReE5xV3R4c1BRMXZwQWUxTmlOQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRitoK25scWJuQUtuMmZxaTFVNkt4UVRkVUlZN2tIbXUxWHp3YUdFUWJ6TC9HMFVWbm8yQnJldUhMQUd0eFdjRW9ock85eGoxZitVTVM2a0t4eERXanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjIyMTUwMTU0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ1NDM5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1QQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVBBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ2VCLzlqTUJscU52c0Y5TjNPcjVSZXdTcG5vL0VJWDIxSkIyei9kc0F0WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTYxMjk1NjEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNDUzNjI1NDMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "╚»★«╝ 𝐃𝐨𝐥𝐥𝐚𝐫_𝐊𝐢𝐝 ╚»★«╝",
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
  LANG: ( process.env.THEME ||  "GOKU"  ).toUpperCase(),



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
