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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_12_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDczLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk1LFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2xWb2hJYzJSUG4vRDArNEpzZk1MYXBRWU1GRzFaSWY0a0UxOEN3R0Rzcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWENPRXU0dEZUQVNxYThGY0NtRC10d1wiLFxuICBcInBob25lSWRcIjogXCJmOWZlNWNhYi03NGYyLTRkZTAtOWFhYi05NGY2NWNhMzY2NTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMzcsXG4gICAgICAxMjMsXG4gICAgICAyMDksXG4gICAgICAyNDYsXG4gICAgICAyMzAsXG4gICAgICAxMzQsXG4gICAgICAxMTQsXG4gICAgICAxNTksXG4gICAgICAxNjcsXG4gICAgICAyMzQsXG4gICAgICAxMzAsXG4gICAgICAyMDUsXG4gICAgICAxNTIsXG4gICAgICA3MixcbiAgICAgIDEwLFxuICAgICAgMTQ0LFxuICAgICAgMTA1LFxuICAgICAgOTEsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTY0LFxuICAgICAgMTc2LFxuICAgICAgMjI4LFxuICAgICAgMTA2LFxuICAgICAgMTM5LFxuICAgICAgMTkwLFxuICAgICAgMzMsXG4gICAgICAxMTIsXG4gICAgICAzMyxcbiAgICAgIDIyNyxcbiAgICAgIDIxOSxcbiAgICAgIDMyLFxuICAgICAgMjUwLFxuICAgICAgNjIsXG4gICAgICAxOTEsXG4gICAgICAyNDEsXG4gICAgICAxNjAsXG4gICAgICAyMDgsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1lQQjZGRTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1NTI3MzY1MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGVhY2hlciBOYWthIEJlYXR6XCIsXG4gICAgXCJsaWRcIjogXCIyNjk2NjQxODU3OTA1NDM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNK2t0UndRb29qVXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkd5bkdxbTM3WG5KTDBHMUZMb3dlWUphb2xYd2hDcGpFNkMvRnNoYXhqenM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOU5QaUhCeXZuYmRzelJhQTNTTit4dEJOaHVlRWl1N29GK3Y3K20waGRsRVpqSDlJYUR5bUxTN3BHOG01N3Jzc2QyRktCYy9Ea01obWpCdEIrQ0NOREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieThFQ1VkVWJPcDFoWFkzcUJNTzNyMG5Lbk9sRXJYNGJrdFhTeFBZTFowMmJxeU1EUzIxR3c2NE5PZUpydmFGRGlTaWFzOVdWY3ptOU9YUzlHdUUxQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzU1MjczNjUyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA0MTk1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJPZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQk9kLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYkJwbUFWcGQ2cHdWUElIOUYzUy9iWk5Nek9XT2M3Umx3SWdnNU9JVjcvaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTU5MzI5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDQxOTYzMTkyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHIKUdj¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • CHIKU DJ』*\n youtube.com/3 as 5"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "꧁𓊈𒆜🅰🆁🅲🅷 🆃🅴🅰🅲🅷🅴🆁𒆜𓊉꧂",
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
  LANG: ( process.env.THEME ||  "GENOS"  ).toUpperCase(),



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
