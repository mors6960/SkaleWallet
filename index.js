const TelegramBot = require('node-telegram-bot-api');
const botToken = '7402148369:AAGCAP0VbA9keqjpOzu3whYL98nDVf3OeFM';

const bot = new TelegramBot(botToken, { polling: true });

const dappUrl = 'https://mors6960.github.io/SkaleWallet/'; // Replace with the URL where your HTML is hosted

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome! Click the link below to connect your wallet:', {
        reply_markup: {
            inline_keyboard: [[{ text: 'Connect Wallet', url: dappUrl }]]
        }
    });
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'connect') {
        bot.sendMessage(chatId, 'Click the link below to connect your wallet:', {
            reply_markup: {
                inline_keyboard: [[{ text: 'Connect Wallet', url: dappUrl }]]
            }
        });
    } else {
        bot.sendMessage(chatId, 'Send /start to begin.');
    }
});
console.log ("Bot is running....")