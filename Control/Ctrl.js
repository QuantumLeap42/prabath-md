// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6283196856163'] //Own Number
global.developer = "Rapippp" //Dev Name
global.botname = "invloid" //Bot Name
global.version = "0.0.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "RapipTzyy" // Author

//Social Media Settings
global.ytube = "https://youtube.com/@stokrapip"
global.ttok = ""
global.igram = "https://instagram.com/@rapippp_13"
global.chtele = ""
global.tgram = "https://t.me/xyrooy"

//Bug Name Settings
global.bak = {
Ios: " 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️ ",
Andro: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️", 
Crash: " ̶𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️ ̶",
Freeze: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️",
Ui: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})