try {
  require('dotenv').load();
} catch(e) { }

const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_BOT_TOKEN } = process.env;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const inlineGif = id => ({
  type: 'gif',
  id: '1',
  gif_file_id: id,
});

const images = {
  gif: 'BQADBAADAgADUJumEhgovbLa_EFEAg',
};

bot.onText(/\/sanw/, function (msg, match) {
  var chatId = msg.chat.id;
  console.log('log: answered message command');
  bot.sendDocument(chatId, images.gif);
});

bot.on('inline_query', function(msg) {
  const queryId = msg.id;
  inlineAnswer = [inlineGif(images.gif)];
  console.log('log: answered inline query');
  bot.answerInlineQuery(queryId, inlineAnswer);
});
