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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_56_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGhMczBHdVd0TGU1OHFwZHdjUVY5aVhZT1ZDeGJTZHdUTmxpR2NhdHNFOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNU84U3hJTEtRWU9XRmQwVjFibVBFZ1wiLFxuICBcInBob25lSWRcIjogXCJjNDhlYWE4ZS02NWUwLTRlYWItYWU4OC1jYWJlYmNjZjJmZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMjM5LFxuICAgICAgOTEsXG4gICAgICAyMjgsXG4gICAgICAyMCxcbiAgICAgIDUyLFxuICAgICAgMSxcbiAgICAgIDIzMCxcbiAgICAgIDIwMyxcbiAgICAgIDE1MyxcbiAgICAgIDIwMCxcbiAgICAgIDE4LFxuICAgICAgMTEyLFxuICAgICAgMTI1LFxuICAgICAgMTYxLFxuICAgICAgMTQzLFxuICAgICAgMTQsXG4gICAgICAxOCxcbiAgICAgIDE1OSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDIzLFxuICAgICAgMTg0LFxuICAgICAgNzQsXG4gICAgICAxNzgsXG4gICAgICAxOCxcbiAgICAgIDIyMixcbiAgICAgIDIwMCxcbiAgICAgIDc0LFxuICAgICAgOTQsXG4gICAgICAxMTUsXG4gICAgICAxNDAsXG4gICAgICAxNTUsXG4gICAgICA5MSxcbiAgICAgIDIxMCxcbiAgICAgIDE5NSxcbiAgICAgIDE0MSxcbiAgICAgIDI1NCxcbiAgICAgIDEyMCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5N0VTR0VKOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Njc1MTA0NDkwOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MjQ5MjUwNjY0NDYyMDo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPald3WXdDRUl5SnNMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJDVU50MHBBeTQwaUpkd3ZyT1p5NmEzQk0zTUs0bDZ0WktqUi9WQWVJRDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTnlLd2oydmpBd3ozVzRxUEIzMk04SVNVczR4cjcwdloxeS9zK2RISkpPOWJCQzdqRHd5amFBaE1JWHdKMDFnQ2V5ck5FbHpjWTFPMFF5UDI3TzNkQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ3ZPanZ1QTlsaC8vMFJXQkFBSWJOMEtJeklYcTUxN1Z4Q2RxOGZreGRGZ0JVTXArNFV5bmNnOTRBSGQwVDExZzRNb3pvdktGOXN0QllhNlJzOTI5akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc1MTA0NDkwOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU0OTM5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE0bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTRtLmpzb24iOiAie1wia2V5RGF0YVwiOlwidml0TDlFSmRJVWJIcjVQNUY0SnZPOU5WMjVYRi9GT01ZWVFEaWFSREJMTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjMxMTI4MDcsXCJjdXJyZW50SW5kZXhcIjoxNyxcImRldmljZUluZGV4ZXNcIjpbMCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⫷ CHIKU DJ ⫸",
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
