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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_55_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY2LFxuICAgICAgICA1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg0LFxuICAgICAgICA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJZenpvTm9xODNSbStWRVo5RGt4ZW1VWFRoMk9zeGxldFBQaXUyMkdFaTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjE2NzQ0NzE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNTgwMjQ5REQ0OEI4ODM0MjJGOEJCN0Q2OTU2MUY4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1ODA5NTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MTY3NDQ3MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI3M0YzNzQwMzFEQTY5MTE2QjA3MzAyMjU4OTVEQjVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU4MDk1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpN2ttbHRaX1NvbWlXS3FYRjlqRmV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3YzcwMTA3LTAzNWUtNGM0ZC04OWY0LWRmYTVmYTk5OWNiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICA5MyxcbiAgICAgIDk4LFxuICAgICAgMjQ0LFxuICAgICAgMTgzLFxuICAgICAgOTIsXG4gICAgICAwLFxuICAgICAgNDUsXG4gICAgICAyMzQsXG4gICAgICAyMTcsXG4gICAgICAxLFxuICAgICAgMjMxLFxuICAgICAgMjMsXG4gICAgICA3MSxcbiAgICAgIDIzMyxcbiAgICAgIDEyMCxcbiAgICAgIDEyMixcbiAgICAgIDIsXG4gICAgICA3OCxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDE4MCxcbiAgICAgIDY2LFxuICAgICAgMTM0LFxuICAgICAgMTIzLFxuICAgICAgMTU2LFxuICAgICAgMTYsXG4gICAgICA1NyxcbiAgICAgIDU5LFxuICAgICAgMTQyLFxuICAgICAgMTA3LFxuICAgICAgMTgxLFxuICAgICAgMTkwLFxuICAgICAgMjIwLFxuICAgICAgMTEsXG4gICAgICAzNCxcbiAgICAgIDE5MSxcbiAgICAgIDI5LFxuICAgICAgMTEwLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5GMVA1NzZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MTY3NDQ3MTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA2MzY1MzUxNjQxMjI3OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUm9iMTRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYjh3dWtERUkvNzlMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllQUER2T1BkKyszYnRyczZ1TGZnY0dkR1JGdWR0Wnh1Q0ZlUlpRaVNMeXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY1dBengxTXBZUitRT0NWdk9aRmhjZ25zK0VvWWF0Q3h3cUNiQnBXUEhlR3RodkU3MVNHK2IwUDdSWk1HSnJHdjVLbm1Gc2hCeThDMHFWbGFDcUZZQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQzhqV1h0UE4zN0FJemljRERHYlJpRFlGN0lUOGFJdkRpekhCSlFkMnNEQkRXd1hIbnB2VFB0TjRtNGZFOVBBV0g3L21ZaGpSek94VmdwSGEzc1RhQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjE2NzQ0NzE2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1ODA5NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLU0JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtTQi5qc29uIjogIntcImtleURhdGFcIjpcIk9IeW5lMHlzZHcxNVBkTUU5MjJRV2pycXhtTlgxVHZPL2xPbHNsSUc3YkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNjYwNDY2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTgwOTQ3ODk3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "꧁𓊈𒆜🆁🅾🅱🅸🆂 🅱🅾🆃𒆜𓊉꧂",
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
