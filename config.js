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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_00_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiNlFZWFBWSnZ4QmVZSmY4MHc3MFBrWEpZdWNjWWkzVytjV3ZaZnA1T2N3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY4NDU3ODY2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDI2REVGNUM5RTA4QTY2RDk5OEMzN0Y4QTZFODg4QTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzMzNjExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Njg0NTc4NjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRUZBOEE4NkE2OUIzMjBEQkM5QzkyNzIzQTNFQzhERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIzMzM2MTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibktjNEdlSFdRdi1HUkg2Q0lkYWJLZ1wiLFxuICBcInBob25lSWRcIjogXCJiNjdlOTljZi05M2Q3LTQ5N2EtOTI4NC1jNGI3ZjZhMjg4ZmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMjE4LFxuICAgICAgMTE4LFxuICAgICAgMTA2LFxuICAgICAgMjUwLFxuICAgICAgMTk1LFxuICAgICAgMjUxLFxuICAgICAgMTA5LFxuICAgICAgMTA1LFxuICAgICAgMTAyLFxuICAgICAgMjMsXG4gICAgICAyMyxcbiAgICAgIDk4LFxuICAgICAgOTksXG4gICAgICAxNDksXG4gICAgICA4LFxuICAgICAgMjEsXG4gICAgICAyMjgsXG4gICAgICA4NCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDE2NSxcbiAgICAgIDI1MyxcbiAgICAgIDE1NCxcbiAgICAgIDI0OSxcbiAgICAgIDEyMSxcbiAgICAgIDI3LFxuICAgICAgMTU1LFxuICAgICAgMTI2LFxuICAgICAgMjI1LFxuICAgICAgMTkyLFxuICAgICAgNzIsXG4gICAgICAxMDgsXG4gICAgICA1OSxcbiAgICAgIDExOSxcbiAgICAgIDE0OSxcbiAgICAgIDE4NCxcbiAgICAgIDEwNixcbiAgICAgIDE1LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjcyQzhXSlRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODQ1Nzg2NjM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTYzOTI0NzExNTA4MDE6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJnb29kIGZhcnRoZXJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMnlvZDhHRUtMem9yVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFKdzluTVlLa3JYU2RUL0JkaXByRi9jYWhDZU5oWnB3bFZXRlI1RmZMbVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1NibHhsbjB6Q2Y3bm03N2RIUy9iMFBCcHpmbmE2WjhvRHFOT1ZReXJ5WEY5NFVSdlNYbC9zT1hFN25aaCtmL1FwT0RXSkJhZVR1M0tTbmhyTUxLQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0tBSlFpSjdDcG11a2JLVnpqMy9QUGRvQjhhMzVINlBseCsrZjZOSlRrTEJGdEN5OFNkWU9ycEdoRVpJUkpxODhLMlFHa0kySVFQN2ViRzJMN0RBaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njg0NTc4NjYzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMzMzYwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU00bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTRsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSmJ0RTd6UGR0ZHhuYjdPdklHSjJPTWs0WXBZOUEyNkZmSXhQN1hrVEJzND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODEwMzg5MzU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIzMzM2MDY5NjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ıllıllı⭐🌟 M͙N͙Y͙I͙K͙A͙ 🌟⭐ıllıllı",
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
  LANG: ( process.env.THEME ||  "GIDEON"  ).toUpperCase(),



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
