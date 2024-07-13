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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_45_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpCSmpSbHg2VmVKMDBXRmdDejE5N1o2YzF0Rk5oVVAwZFNEcnlZeVV3N2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzEwMTc0NjAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyM0RGRjMyQkY2QUEwOEVCQTRDQ0NERkNFRjYxOTIyNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MzA3MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVXV6bmlsenNUbHFySHYzeWNPX2dYQVwiLFxuICBcInBob25lSWRcIjogXCI4MGFjZjJhYi1kODYyLTQ1NzYtODkwYy01MzNjYjkwMmM5NjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMjMsXG4gICAgICAxNTcsXG4gICAgICAxNzgsXG4gICAgICA4NixcbiAgICAgIDIxMixcbiAgICAgIDIxNyxcbiAgICAgIDk1LFxuICAgICAgMzQsXG4gICAgICAyMyxcbiAgICAgIDIyMSxcbiAgICAgIDE4MSxcbiAgICAgIDc0LFxuICAgICAgMTgyLFxuICAgICAgNTUsXG4gICAgICAyMjcsXG4gICAgICAyMzAsXG4gICAgICA2NSxcbiAgICAgIDIzMyxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMTc1LFxuICAgICAgNzksXG4gICAgICA0OCxcbiAgICAgIDE2NCxcbiAgICAgIDE1MixcbiAgICAgIDQyLFxuICAgICAgMjMxLFxuICAgICAgMixcbiAgICAgIDI0NSxcbiAgICAgIDIwNixcbiAgICAgIDIsXG4gICAgICA0MixcbiAgICAgIDEwNSxcbiAgICAgIDE3NSxcbiAgICAgIDE1NixcbiAgICAgIDEyOSxcbiAgICAgIDIwNSxcbiAgICAgIDIzNSxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdQQkg4NlNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MTAxNzQ2MDM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUxNDkyMTk1ODkzMjYyOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlocExnRkVOK0l3YlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvVHR0MVYrdDg1YTlPOWpGUUtERCs3NGpkeVNWRmEzTTB0ZGVHVS91R3hBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm4yYlFMdnlXM3BmMGNsaDFjbVpBOWhOOGI3TGFoV1hPZHgrOUk5aXlwZmVnSHdMTTA0cXdLOFkxSzZ1em1QTXB5NG11VithSVlONjU5ZTlBOG4vWEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVXT2VpOWFBMms0b0NZaHUzTTRJZ01WamdPM0hCZDUvQ1RreSsvZHBwdEhScGtZVFJXMDVvRENTd1l5NEI3VDRDamVHWmVuWE51bjhrYXBVU2syd0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTcxMDE3NDYwMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzMwNzIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkMxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRUjcxcmpsVUxXVUZJM0JTSlIxVkNTSjAvQnhvYjBsamVhSFBNMTExNytrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjAyMTE5MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY2MDUxNjUwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⫷ ANETH⫸",
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
  LANG: ( process.env.THEME ||  "FRIDAY"  ).toUpperCase(),



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
