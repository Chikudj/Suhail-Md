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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_50_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1eC9uTGFmeHpOWnVVL3ZUVDBIeXh2WXE3c3lJZEFnQnB0ZFlLSjE1SHRvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4TEN3Z0xDY1JjbVVXZmtYTS1EeFB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNiMDZkODIxLWU0ZjQtNDUxOC1hOWZjLTMzZWQwYTMwOTIxYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAxMjEsXG4gICAgICAyNTEsXG4gICAgICAxNTcsXG4gICAgICAyMTUsXG4gICAgICAxNTcsXG4gICAgICAxODcsXG4gICAgICAxMzEsXG4gICAgICA0OCxcbiAgICAgIDY4LFxuICAgICAgMTU5LFxuICAgICAgMzgsXG4gICAgICAxNzcsXG4gICAgICAxNCxcbiAgICAgIDE2NyxcbiAgICAgIDQxLFxuICAgICAgMTY4LFxuICAgICAgNzIsXG4gICAgICAxNTgsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgMTM0LFxuICAgICAgMzYsXG4gICAgICAxNDMsXG4gICAgICA0NixcbiAgICAgIDEwMCxcbiAgICAgIDY0LFxuICAgICAgMTIyLFxuICAgICAgNjIsXG4gICAgICAzNixcbiAgICAgIDE1MSxcbiAgICAgIDQzLFxuICAgICAgMTQzLFxuICAgICAgMjA0LFxuICAgICAgMTAwLFxuICAgICAgMTMxLFxuICAgICAgMTU3LFxuICAgICAgMjI2LFxuICAgICAgMTI2LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWllKV0JZTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI1NDM0NDQyOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bam4bWD4bWQ4a2ETc2czaFyIFdpbGx5LlwiLFxuICAgIFwibGlkXCI6IFwiOTk5ODcxMjM5MjEwOTE6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdEdllZQkVOUGF6clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzYnpaUU5EV1EvQ2VUK3hRb0laTzZqQkhpMWREUVV6T3hwMEdvWW53cnpBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZIRFkwOUJ4dFJTVmY2Nm52V1RiNktEeUkrYzFZMW9tV1o0Sk9zMTg2VE1vSC82d1lwdklITE94UVJaZW9RQVlJK3Y1REs0QzFkUTdhNHpoUXZUM0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtyZURnaHJSWEhTVDEzdU1wRE16d0FQbkwycEpPVnpHbGd6Y3FUakt0aXlaekczOHIyQmYraXRQenFlRDk0VXRGZ0xhWldkdXk0SDByNkFadTFsZUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyNTQzNDQ0MjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NTQyMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPN1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU83US5qc29uIjogIntcImtleURhdGFcIjpcIk5CaUd6blNGMHZ5OFFvRVA5ZG5TRjZxV1ZjMHlQMm80QUc2YVFUV2NQZUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgyMDI2NDYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2ODQ0OTY3ODRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᶦᵃᵐ᭄M͜͡r Willy",
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
  LANG: ( process.env.THEME ||  "LUFFY"  ).toUpperCase(),



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
