const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })
//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chikundemwenyewe@gmail.com"
global.location="Asia"

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

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  " available " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_29_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRHRjbEZidzFUV3gvZFk3WEJmLzJWUTE3TEtHZzUyMGpiRGdqYWdNUi9Yaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0FJc3hzdktSN1NNTlVxdElRelBvQVwiLFxuICBcInBob25lSWRcIjogXCJhYjM2MWRlZS0wYjgxLTRlNGMtOTMyYy1iN2RjYjFmNGFhMTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxMDksXG4gICAgICAzLFxuICAgICAgOTMsXG4gICAgICAxNzksXG4gICAgICA1NSxcbiAgICAgIDE3NyxcbiAgICAgIDEyNyxcbiAgICAgIDE3MixcbiAgICAgIDIwMCxcbiAgICAgIDIzNyxcbiAgICAgIDgxLFxuICAgICAgOCxcbiAgICAgIDE3NCxcbiAgICAgIDE2NSxcbiAgICAgIDgxLFxuICAgICAgOTMsXG4gICAgICA0OSxcbiAgICAgIDQ5LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDIzLFxuICAgICAgMTYxLFxuICAgICAgMTQwLFxuICAgICAgODksXG4gICAgICAxNjcsXG4gICAgICAxNCxcbiAgICAgIDY2LFxuICAgICAgMTYxLFxuICAgICAgMzcsXG4gICAgICAxNTUsXG4gICAgICA5MyxcbiAgICAgIDEsXG4gICAgICAzMyxcbiAgICAgIDIxNSxcbiAgICAgIDExLFxuICAgICAgNDMsXG4gICAgICA5MCxcbiAgICAgIDIyLFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUJENUhZNFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNTkzNzE2NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDIyNjMzMzkwOTQwMjQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeXk5M2NRbDRTK3RRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhsR2RMVTlON1RtMjhjQTY3Rk85QkF2cHJZd2oxYTJtQmJVSW1nbTNabDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRzJjN044TUl6TU1MNmkybVphRTlVWFYwQnA1aUY4TmRkdXZCSnhsdTdQZVBOT0hkcUR2MExNWXEyU0lmNElvOUpDWFYvL1dYVnp5SEdTaFp6V3FsQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYlFLT0twMjR6elNhVC9JMjlqWGxSSFNzMTc0Q2lKSS9ET3NYcHJ4UmRFRGozQjJZZnJVUXlGMFpUdG5hL2ZCRERRUnAxbWt3U2RkR2lxbHE1QUQ1Z0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI1OTM3MTY2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc3ODE0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBSU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFJTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRDZFSXFFc3JvNFFuZEhyak11MDJPM1V0SzJSdlEvN2dhSEFFamtCY3owcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE1MTcyNTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3NzEyNTcxMDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " 𝚃𝙷𝙴 𝙿𝙸𝙾𝙽𝙴𝙴𝚁 ",
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
