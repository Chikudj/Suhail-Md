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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKU_DJ¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255675104490";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_04_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDMxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMTlqZHdPQjZxeE4zYTRoNjlvK1J6ZGV1MmZXNEtDZ09LWUUvYXE5c1VDdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGdQc1htWlVRMUNQTm1fZWQwLXQzQVwiLFxuICBcInBob25lSWRcIjogXCIzM2E1NmU3Zi1lN2ZhLTQzMjMtYWU1Ni0xMmU0YmQ1ZWFiNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgODUsXG4gICAgICAxMzMsXG4gICAgICAyOCxcbiAgICAgIDE1MyxcbiAgICAgIDIyLFxuICAgICAgOTgsXG4gICAgICA1MyxcbiAgICAgIDE1OSxcbiAgICAgIDExNixcbiAgICAgIDgsXG4gICAgICAxOTgsXG4gICAgICA1LFxuICAgICAgOTEsXG4gICAgICAxOTcsXG4gICAgICAxMTIsXG4gICAgICAxMixcbiAgICAgIDIwMSxcbiAgICAgIDEyNSxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxNTEsXG4gICAgICA3MixcbiAgICAgIDg0LFxuICAgICAgMjU0LFxuICAgICAgNjIsXG4gICAgICAyMzksXG4gICAgICAyMjUsXG4gICAgICA4OSxcbiAgICAgIDkwLFxuICAgICAgMTQ4LFxuICAgICAgMTQzLFxuICAgICAgMTIsXG4gICAgICAxMDMsXG4gICAgICAyNyxcbiAgICAgIDUwLFxuICAgICAgMTU3LFxuICAgICAgMzgsXG4gICAgICAyMzEsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZld3WXdDRU5xTnVyUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJDVU50MHBBeTQwaUpkd3ZyT1p5NmEzQk0zTUs0bDZ0WktqUi9WQWVJRDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQVlmSVRYM2JydjNFdDZpYkNkeXN4bmoyYU1sbGtPRzJqc09rVFNYREFmSXZQMGFJYnV0bW9aMkpxUlc4Qk5mRndvK1dtTHQvMjV0cEJORWMwQlZrQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibHNJMGt4RVdISDRrd0tDZXhMdUFJQnN1YkJWTWh4MkJTYTRyZjV5V1Fod2YwSG1NSUgxNkIxZDZ6VUdqdWt0M0h5OFlEdmozakVnMFozdXJCUFpXakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NzUxMDQ0OTA6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkyNDkyNTA2NjQ0NjIwOjUxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc1MTA0NDkwOjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYxNjY2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE0YVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTRaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkhCdGJFUlBRMEtNcTR4ZmI2M0NEY2twUVFBTGcwbXNuWXhjOStIZlN5Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjMxMTI4MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE5ODYwNDc3MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE0YS5qc29uIjogIntcImtleURhdGFcIjpcImhheU5MNDVSdE5sc1BnSGxoWUdHdzdvcDNwRTh2Y0tPZkJkTGljallUR0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTYzMTEyODA3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyMDU5ODQ3MjlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBNGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzU1ZKeWJIWUlXRW1RTStmWlNMNGJtVUtRTzQ2YXhIcFNWL2g5UDNqR0tZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2MzExMjgwNyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBNGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5YjlkaEtBU21DZTVFV3JKMDhMaElhTFNYQUliTDZVL3FMNDMyVDZ6M0c0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2MzExMjgwNyxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MTY1NzQ3NDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CHIKU-MD",
  ownername:process.env.OWNER_NAME|| "DJ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "PARKER"  ).toUpperCase(),



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
