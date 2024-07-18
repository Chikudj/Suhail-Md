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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_36_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5ODVWMzVpMm5ZU3pDRjUyL1g4elpqQlF3Sk1WanJvRmpSL0d3T1h1SmR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYyNTkzNzE2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0QwMzUzQjhENTk3MjdEQ0YyNDNGMzgwOUE4Q0ZERjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzM4NTY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJwZGR3Y29SUkNPclVGcFlzZk1yUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMThhNjEzMTAtMDNmMC00YjVkLTgxOTctM2Y4OTY1Y2FkZTMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDExMSxcbiAgICAgIDk3LFxuICAgICAgMjEyLFxuICAgICAgNDYsXG4gICAgICAxMTksXG4gICAgICAyMjMsXG4gICAgICAzMyxcbiAgICAgIDEyNyxcbiAgICAgIDIxOCxcbiAgICAgIDUsXG4gICAgICA2LFxuICAgICAgNyxcbiAgICAgIDE2NixcbiAgICAgIDI0NixcbiAgICAgIDk1LFxuICAgICAgNDEsXG4gICAgICAxNDAsXG4gICAgICAxNDgsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTQ2LFxuICAgICAgNDAsXG4gICAgICA4MyxcbiAgICAgIDIzMixcbiAgICAgIDk1LFxuICAgICAgMTUzLFxuICAgICAgODIsXG4gICAgICAxNTUsXG4gICAgICAyMDYsXG4gICAgICAxOTgsXG4gICAgICA0MSxcbiAgICAgIDE4OSxcbiAgICAgIDE0OCxcbiAgICAgIDIzLFxuICAgICAgOTIsXG4gICAgICA2OSxcbiAgICAgIDIyOSxcbiAgICAgIDIwNyxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSV0xaOVpGRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI1OTM3MTY2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMjI2MzMzOTA5NDAyNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ011eTkzY1F1NVhtdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSGxHZExVOU43VG0yOGNBNjdGTzlCQXZwcll3ajFhMm1CYlVJbWdtM1psOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUaTU1RzZ5eHBxRmc0WHFITmhKbVRiRElMZExYUVFTbDVsZ3ZkOVVhR3JUdm1CQXBhc0QyMk9JTUZvNXpYSk9UT2JxbVBxY25LdjR6R3FoSVJBNVFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0YjBsS05aTUQ4RkVkbjBFd2dOVTVmS0NXZ3BraTBmYXhLMjZSMXdMNHNnMDQ4Zk5jMi9mNldUTDAwYm1QMkZXajlSS1VueTdubndlSTR1Qk0yeGJCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjU5MzcxNjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzM4NTU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "꧁𓊈𒆜🆃🅷🅴 🅿🅸🅾🅽🅴🅴🆁𒆜𓊉꧂",
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
