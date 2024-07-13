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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_30_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICA5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImk1b3RNcmVnZE9yWkxVSkk1WncvQ2FQM0Z3eURYaFp3M05CYlhpWXdFZUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImd1RnVvSmRoVC1LY25nNW5HTjRPU3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGM4YjcwYzUtOTFlYS00NjhmLTk5YjMtZTUzMzVjMTVhZTEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTM4LFxuICAgICAgMTE2LFxuICAgICAgMTAsXG4gICAgICA5NCxcbiAgICAgIDIzLFxuICAgICAgMTQwLFxuICAgICAgMTkzLFxuICAgICAgMjMxLFxuICAgICAgMTc2LFxuICAgICAgODQsXG4gICAgICAyMjgsXG4gICAgICAwLFxuICAgICAgMzYsXG4gICAgICA3MCxcbiAgICAgIDIwMCxcbiAgICAgIDE0MyxcbiAgICAgIDg2LFxuICAgICAgMjExLFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDc4LFxuICAgICAgMjM3LFxuICAgICAgMTA3LFxuICAgICAgNzYsXG4gICAgICAzLFxuICAgICAgMTI0LFxuICAgICAgMTUxLFxuICAgICAgMTU1LFxuICAgICAgMjEzLFxuICAgICAgOTAsXG4gICAgICAxMDgsXG4gICAgICAxNzcsXG4gICAgICA3MixcbiAgICAgIDI1MyxcbiAgICAgIDE0NyxcbiAgICAgIDE5NixcbiAgICAgIDE0MCxcbiAgICAgIDEwNSxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE5Vk5KVk1RXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2Mjc5OTE1Nzk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzE2NTgyMzc1MjIxNjg6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJRzU3UklRcXRmS3RBWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImcxODVNczVQYVJoRThjY3F3YjQ2Q0lZMmZ1cEFsVjlPUHU4NVJ1b1NEaHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicW9FYVRnc2lrb05ybGpoVEMxODVsRGw1UTNqWnVSSXFrNUZWOHdTZ2tKV2g1bTllbVRZdDJlWUd3TVhuMTBnSXluK2pmS3JlSzNjSTRlQW5IQ0ZFQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXdPaEVoOFExb3RjY1h1REhXRVczNmJ2ZUdHSUNxbXlxYkhzME9OUmIxRUZRQU5xejlSc08vS1NCQ0hwbzYrQzFHY2RYdEQ2Mm1rWmVUMDJMbFdLaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI3OTkxNTc5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODg4MjM4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "꧁𓊈𒆜🆂🆄🆁🅴 🅺🅸🅳🆈𒆜𓊉꧂",
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
  LANG: ( process.env.THEME ||  "NARUTO"  ).toUpperCase(),



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
