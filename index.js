const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace with your bot token
const bot = new TelegramBot('7402148369:AAGCAP0VbA9keqjpOzu3whYL98nDVf3OeFM', { polling: true });

// Command to connect wallet
bot.onText(/\/connect/, async (msg) => {
    const chatId = msg.chat.id;
    // Send a link to connect wallet through MetaMask
    const connectLink = 'https://mors6960.github.io/SkaleWallet/'; 
    bot.sendMessage(chatId, `Please connect your wallet using the following link: ${connectLink}`);
});

console.log ("Bot is running....")