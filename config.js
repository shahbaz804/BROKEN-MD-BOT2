/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['923076072728','923203734432'], // Add your number without + or spaces (e.g., 256789966218)
    ownerName: ['BROKEN MD', 'BROKEN MD'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'BROKEN MD',
    version: '3.1.3',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5VU25KiSBT8l3rVGBHk0kZ0xHITaUBFBdve2IcSCijkZlGgMOG/b2BPz/TD7mzvW1EV5MmTmed8B0WJa2ShDsy/g4rgFlI0HGlXITAHShNFiIAxCCGFYA6OptnNArq0lY3c7W+sJG84zSPsXmJC/+J32bmd5rvD2Vw6z+A+BlVzynDwG8BS1HRENCWFukGi07k0+ng/1Z03eKlmJpNMR0t15xsbM5aewX1AhJjgItarBOWIwMxC3QZi8jX6klKPmG5mvGh+wbgn5kpXKuW2GsOPmDfXtX2n0Q/raON50tfoq2m9aqltKqFmeGptBfpNnDouLyaGsm2FN7u2YmgK6yCX3+nXOC5QaIaooJh2X9Zd2HTR6oicyLVWZ507ubYKg8NR9JLDQk/5rnePW+0IV4X/Rd0n60ZZdE/bnr9mFeN7yN9wN7rb21UL1X4Xa9HF3PNKHXXnz8Q35CMr5/+jO3Zui2VfYy3MDnvOWush687sTDseWtFtswtrX8+LckXW0y/SR0ngd7s+lV9nC/HQnrzDwntlWZLrcZ62pscl/YtlJ3rif6IPaUN+x3InkFHeRhurtJan2KKulZ50nO4UPZDlwws/G3VWrGzTpzySNl6wT1inEu3WW1V896JkZZpLG4xypLQFKnKHZc23SLs+Pzo6o84MwXx6HwOCYlxTAikui8edxI0BDNsdCgiiD3mBjqb+03XmKMbESPgi8dSL23ftbaLxVZ9ehLWwJax8KvVCfwZjUJEyQHWNwiWuaUk6B9U1jFEN5n/+NQYFutF344Zy3HQMIkxq6hVNlZUw/HD14xEGQdkUdNcVgTocEAFz5tc1ohQXcT3o2BSQBAlukZpAWoN5BLMa/ewQERSCOSUN+jm1ahkOwvP2UlkprADGIH8YgkMwB08sx4gCI7IiK81Z9o/623WAhVX1rUB0EPEHheGPEFGIs3oYQVMcXdfeQrcvr3V4NAzZjGU1lsEvyh/ev2u7FQhaVG/dOdiWJbdQdO3lcKTckXtrglPleMdErMKteDaN8vkfQMAc1KmtLISotGZ0dUEeE93isz81LJxb3Mnnk+2ta3Sxejqa/EszaTrLq9jekmIWO0qWZh47TTYbSRGinb82UjbVfc+R4+ehWohaHKDPxZztdNQ0y8lrlPLwyplsL43CwLZ6xqT4WC5JnzPKpXJ8KzmU8CzF0cLIetxPfBzl7ck6skY1WbwEvHOpO1uTXhtD1dz3VD6mIvuxjfAjL4MZw2eE0WO4CzhY9F/mfBAfMsTcx58wfqyLfxk5xUMXLoGHoFrq0Frd3K3c+bkdsiv2VBjCfmGYSHj1EK8qF3C//zUGVQZpVJIczAEsQlLiEIwBKZshlGYRlb9b1rJjam6sDp1nsKbyr6DvcY5qCvMKzKfi01QUOYFj7n8DNNxv7R4HAAA=',
    newsletterJid: '120363413821588578@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/Tomilucky218/Lucky-M2-Bot/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Broken MD',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: true,
    autoRecording: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'all', // set bot or all via cmd
    autoDownload: false,
    
    // Auto Reply
    AUTO_REPLY: false,
    AUTO_STATUS_SEEN: true,
    AUTO_STATUS_REACT: false,
   
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ BROKEN MD*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Africa/Kampala',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/shahbaz804?tab=repositories',
      instagram: 'https://instagram.com/shahbazbroken7',
      youtube: 'http://youtube.com/@shahbazeditx786'
    }
};
  