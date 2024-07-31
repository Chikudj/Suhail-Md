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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_34_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVBXYTNIRjhPOFZKZVNBeHRXWTJhc0NOa3gvR3prTVpsYzFJMWdhWUZCaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSEMxVVhoMmZUYXVrVTQ0V3V0ZGVBZ1wiLFxuICBcInBob25lSWRcIjogXCI4NDBhYWZmZS02YTU5LTRhNWEtYTNiYy1mM2M4OWM0ZjEyMmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgNzksXG4gICAgICAxNzUsXG4gICAgICAxODQsXG4gICAgICAyNTIsXG4gICAgICAyMzMsXG4gICAgICAxMDEsXG4gICAgICA5MSxcbiAgICAgIDExNCxcbiAgICAgIDg0LFxuICAgICAgMTQ4LFxuICAgICAgOTksXG4gICAgICAxNTksXG4gICAgICA5MyxcbiAgICAgIDIyOCxcbiAgICAgIDI1NSxcbiAgICAgIDk5LFxuICAgICAgOTUsXG4gICAgICAxOTIsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxNDQsXG4gICAgICAyMzAsXG4gICAgICAyMDUsXG4gICAgICAxODcsXG4gICAgICA0NSxcbiAgICAgIDM0LFxuICAgICAgMjI2LFxuICAgICAgMTI1LFxuICAgICAgMjI3LFxuICAgICAgODIsXG4gICAgICAxNDIsXG4gICAgICAxMjcsXG4gICAgICAyNDYsXG4gICAgICAxOTAsXG4gICAgICAxNSxcbiAgICAgIDEzNyxcbiAgICAgIDI2LFxuICAgICAgMTAwLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhaQjYyMjg0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2Nzk5NTA1NjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG2puG1g+G1kOGthE3NnM2hciBXaWxseS5cIixcbiAgICBcImxpZFwiOiBcIjYyMzg5MTY0NzU3MjIyOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9EdllZQkVLS0txTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzYnpaUU5EV1EvQ2VUK3hRb0laTzZqQkhpMWREUVV6T3hwMEdvWW53cnpBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJIMUtucnBBekNjQ3ZEblpicnFyRkFqRVo1MlFqVXZWQjJLZWU3NWU5b2lwZEdSNDU5TzVaUkxDc2dGR01VSXFXbThaUXplZ1g4NFhPajlvMmMxWERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk04YmNKNzJNZTZ6d3lWdXRVT3ZsTXRlK2E1eFlVRTBkZ1liWmF6eTcxYTE5L2JaZEk5M2h4clFBdE1VNzdnMXUyT1pSMExFU0JnYTV0OGNFM013b0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY3OTk1MDU2MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQxODQ3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp3YVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSndhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiczhUVktzZVZnYlJQeGUwdXQwV2tISHFXcThJbUNjWkdnZ1hOZGp5cnpiVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODIwMjY0NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQxODQ3NDc3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᶦᵃᵐ᭄M͜͡r Willy.",
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
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
