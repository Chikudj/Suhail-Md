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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_32_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT3ZGUzVYOG9wOWxsUUQrTDRBTXBhVU9oUDU0czI5dDFuY0Zja1lmMUxYZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2ODQ1Nzg2NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM3RUQ5RDI5MTAyQkVDM0U5MTRERDczNDRENUFCRUVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQ5MDMzOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY4NDU3ODY2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkVBQzA4NzcxOEIyQjQyRkFFN0MyRDdDNTEzRkQyNUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDkwMzM5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFtZzRSVFlnU211RUNTMUxEVlJ2Z3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWFlY2I2NmYtY2M0NS00NGE2LTk1NDMtMjU0NzRkM2YyMzliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDEyMyxcbiAgICAgIDEsXG4gICAgICAxNzIsXG4gICAgICAxMyxcbiAgICAgIDExMSxcbiAgICAgIDQzLFxuICAgICAgMTEwLFxuICAgICAgMjEwLFxuICAgICAgMTUzLFxuICAgICAgMTA2LFxuICAgICAgMTU0LFxuICAgICAgMjExLFxuICAgICAgNDIsXG4gICAgICA0MSxcbiAgICAgIDkyLFxuICAgICAgOTgsXG4gICAgICA1MyxcbiAgICAgIDEyMyxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDc1LFxuICAgICAgNTYsXG4gICAgICAyMTIsXG4gICAgICAxNTcsXG4gICAgICAyMDcsXG4gICAgICAyMTUsXG4gICAgICAyMjcsXG4gICAgICA4LFxuICAgICAgOTYsXG4gICAgICAyMDAsXG4gICAgICAxNTMsXG4gICAgICAxMjgsXG4gICAgICAxMjAsXG4gICAgICAxMDYsXG4gICAgICAxNjksXG4gICAgICAxMixcbiAgICAgIDEyNCxcbiAgICAgIDgxLFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc1NkdXNUpYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODQ1Nzg2NjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTYzOTI0NzExNTA4MDE6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJnb29kIGZhcnRoZXJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYThzOHdHRU5xN3JMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkkvSnE2WXp0TUZhaUZrMVlpdUFlNzBrMGpUSHhUUU5XQXJIV1hYS3F4aEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWFwWmF0NmpjVTBHYTl1d2o5TUhjbVpSQjExNERzZGU2VlZLZjVONXcwRjk3SWtXNmZTeVlCV2NPWFhBTE5JN1RTM0U0MW5xSVFkbUswT1MyUHNHQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWlNFQk9GQzNrdTlIUjRsVTJ2UlJPSDBmVDdmZWZ1cG9TZEluRVI5dm5kSmxVWHFWSDd6eUp1MW5yOEU1MEFhdGdpcHZPaFYwcUQvZ0tqSzBRS3Ntamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njg0NTc4NjYzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0OTAzMzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVTOS5qc29uIjogIntcImtleURhdGFcIjpcInFvU0g4ZDErOWRndjFQeHRPRDE1dzdHOEJzb2c3S2RKSThXcUR2RDlsMjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MDgzOTU1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDkwMzM1NTc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "╚»★ MNYIKA ★«╝",
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
