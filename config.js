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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_28_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwOVdZWXVZaDJxVUlBSnprcG5TOEpNR0xZUDk2blJjcVhRVlIyVHdBYXBjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNzE5MTA2ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4QzU0RTMxMTNBN0MzRUQ1RjVENUE3RkUzMDg5Q0YxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY0MDUwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlLXAydGgxQlJZMlhBN3F5UWlKUnF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2YjA2NmRhLTRjYzAtNGFkYy1iYTY3LTQ1MGUwY2FiM2I5NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAzLFxuICAgICAgMjE2LFxuICAgICAgMTE3LFxuICAgICAgMTU1LFxuICAgICAgNTcsXG4gICAgICAxNjIsXG4gICAgICA1NCxcbiAgICAgIDIxMixcbiAgICAgIDksXG4gICAgICAyMjgsXG4gICAgICAyNTIsXG4gICAgICAxMDIsXG4gICAgICAyNDUsXG4gICAgICAyMjcsXG4gICAgICAyNDEsXG4gICAgICA0NixcbiAgICAgIDc0LFxuICAgICAgOTgsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA3NSxcbiAgICAgIDExNyxcbiAgICAgIDE4OSxcbiAgICAgIDEzNCxcbiAgICAgIDg1LFxuICAgICAgMTg2LFxuICAgICAgMTAxLFxuICAgICAgODUsXG4gICAgICA3NCxcbiAgICAgIDY4LFxuICAgICAgMjksXG4gICAgICA1NCxcbiAgICAgIDkyLFxuICAgICAgMTksXG4gICAgICA0MSxcbiAgICAgIDY2LFxuICAgICAgMTQ0LFxuICAgICAgNzAsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTFSSFZMWFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNzE5MTA2ODk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI3MjczMjUyNDUwNDc4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFQ4aGVBQkVMVE0rTFFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFSEpjY1ZXWE9nOG83akhZRW9rdUFhUjdiRE5sSENYZytCTDNscEQ2VVc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlN3Z2JnYXQzKzAxN0YwS3NLU2Z3aDYzeUxrV2orUk54eFhLNXFhV0NUZ3JqLzllSEJqd2xKdWd0YW9GN3pkQ0FTNlZjdnZyTjJsSXErYlExVjQzOEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVXWkN4TmpoL05SdGorU1BvSUlqY1diUyt4VGh3Y293ZjJVRVFRUUlnTy9RVVI1RWo2NEllanJGcFoxNHJhSkNUWlRTT3BBTWtBVzNBK3hvWnV5b0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNzE5MTA2ODk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjQwNTA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWFlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJYWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxemw1bER6aTJXSlBSSHROVFRGSkRzWEtNQXpFZmxSdFlicjRFRFBsVFJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2OTg1OTg5MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjQwMzEwMjQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "꧁•⊹٭𝚅𝙸𝙱𝙴𝚉 𝚃𝚅٭⊹•꧂ ",
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
