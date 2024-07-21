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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_15_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyKzEvbStDLzNsUWMvY01VQlZqaUVYeDRpb1RKeGF1dkNWTE5XazA4TVBVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1c05zVzNfY1FNaWtrbHlhU2Vkd2lnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhNGY3ZGVkLTAxNzgtNDk1Ny05YjVhLTk2ZWIzZGE3ZThlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDkzLFxuICAgICAgMTAyLFxuICAgICAgMjAyLFxuICAgICAgNTUsXG4gICAgICAyMzcsXG4gICAgICA5NyxcbiAgICAgIDE5NixcbiAgICAgIDExLFxuICAgICAgMTkxLFxuICAgICAgMTE4LFxuICAgICAgNDMsXG4gICAgICA2OSxcbiAgICAgIDI1NCxcbiAgICAgIDE0MCxcbiAgICAgIDMwLFxuICAgICAgMjMwLFxuICAgICAgNDksXG4gICAgICAxMjUsXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICA4NCxcbiAgICAgIDExNCxcbiAgICAgIDIzNyxcbiAgICAgIDExOCxcbiAgICAgIDE5NSxcbiAgICAgIDI4LFxuICAgICAgMTU5LFxuICAgICAgMjAwLFxuICAgICAgMjUwLFxuICAgICAgMTk3LFxuICAgICAgMjEsXG4gICAgICAyMjksXG4gICAgICAxNTQsXG4gICAgICAyNDIsXG4gICAgICAyMDUsXG4gICAgICAyNixcbiAgICAgIDI0LFxuICAgICAgMjIyLFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjcxNzgxRTFXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY2NDM4NzYxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1Mzc5NDIzMTMwNDIzOTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQRDZlRUJFTE9IODdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwianRIWVpqK25yRXQ2OUNWeXg4YjZja1lvSG9yeWdxSW1hak1GalFPSGhUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiWkhGYkpkRHpjOHd3Q1c0U244MSt1dnliNm1uUXhCRTZIcUk2S29MWHZoV041SFkydTlMcmUxem1LcTY1U096WGJkZ01uV2hlekIvQ1FzRHpxNk1BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqVG9uTE9FbGl3SC9uOVk1RmpaTE1PZmFmNDU4QVU5ZHMzTytxMWpYOFJiRC9CZHFhV3c0TFRsTFByVHYzeXh1VTlVaVpXdlFIRkFYWXNHOHRKNUZndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY2NDM4NzYxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU0OTc1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhMTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSExNLmpzb24iOiAie1wia2V5RGF0YVwiOlwielQ0RE5pSGdMNW9JRUhqZFNTTVpWZTM1M3dIczBEczdBK09MbkRzZ0RnST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NzM1ODgxMTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NDk2OTkxNjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⭑┗━━┫⦀⦙ PAUL GOLD ⦙⦀┣━━┛⭑",
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
  LANG: ( process.env.THEME ||  "NEZUKO"  ).toUpperCase(),



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
