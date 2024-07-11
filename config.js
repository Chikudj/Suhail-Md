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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxMUYxMEZoT1NIeTZjUTdJOUZMRE00UkRHWnVSM2pxQ1crT3BZV2J0dmdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0STJVR05weFRYV1g3M3pMcl9PNlJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlYTE5NTI5LTk2ZmItNGNmZi05NjRlLTBkYTRiMzAwZDBhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICAyMTEsXG4gICAgICA5NyxcbiAgICAgIDc0LFxuICAgICAgMTE0LFxuICAgICAgMTM3LFxuICAgICAgMTg1LFxuICAgICAgNjAsXG4gICAgICAzMixcbiAgICAgIDIwNCxcbiAgICAgIDEzMCxcbiAgICAgIDE5OSxcbiAgICAgIDE4NCxcbiAgICAgIDEyLFxuICAgICAgMTk5LFxuICAgICAgMjEzLFxuICAgICAgNTIsXG4gICAgICAxNTIsXG4gICAgICAyMzIsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgNDUsXG4gICAgICAxNjgsXG4gICAgICA5NyxcbiAgICAgIDI1MyxcbiAgICAgIDEwMixcbiAgICAgIDExMSxcbiAgICAgIDgwLFxuICAgICAgMzYsXG4gICAgICAyMzUsXG4gICAgICAxMDQsXG4gICAgICAxMDAsXG4gICAgICAyNCxcbiAgICAgIDIxMixcbiAgICAgIDc4LFxuICAgICAgNzIsXG4gICAgICAxMzMsXG4gICAgICAyMDQsXG4gICAgICAxMTQsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZQjlNS0hMR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI1NDM0NDQyOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bam4bWD4bWQ4a2ETc2czaFyIFdpbGx5LlwiLFxuICAgIFwibGlkXCI6IFwiOTk5ODcxMjM5MjEwOTE6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdEdllZQkVNS3N2N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzYnpaUU5EV1EvQ2VUK3hRb0laTzZqQkhpMWREUVV6T3hwMEdvWW53cnpBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImMvVloxcm50V21DU2YzY3NOaFozVG80c0pod2ViQkExNVBoQlFDd0J4clpOK0NRR0pZSTBuSVcvaW50V3JNa1N0b2xlVFg0eERkeExobXZSSE9uNkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRxYW1tcGZjVVNGN3ZNMFg3Y2JiK3RUZlJkcE5YdWJLMVFOMlV5NXZuRk1jNnByT05POUdUNEMvcnBYdEpzTEVBL3ZZd1EyZHgwb2lNclJkYXlneUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyNTQzNDQ0MjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MDI1MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPN1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU83US5qc29uIjogIntcImtleURhdGFcIjpcIk5CaUd6blNGMHZ5OFFvRVA5ZG5TRjZxV1ZjMHlQMm80QUc2YVFUV2NQZUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgyMDI2NDYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2ODQ0OTY3ODRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⫷ 𝘾𝙃𝙄𝙆𝙐 𝘿𝙅 ⫸",
  ownername:process.env.OWNER_NAME|| "꧁•⊹٭𝚅𝙴𝙽𝙰𝙽𝙲𝙴٭⊹•꧂",


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
