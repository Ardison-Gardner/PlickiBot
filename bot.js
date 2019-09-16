//Imports
const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

// Global variables
let debCount = 0;

// Logger Settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = 'debug';

// Initialize Bot
const bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});

bot.on('ready', function(event) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, event) {
  if (message.substring(0, 1) === '!') {
    let args = message.substring(1).split(' ');
    let cmd = args[0];
    args = args.splice(1);
    switch (cmd) {
      case 'init':
        bot.sendMessage({
          to: channelID,
          message:
            '**BEEP BEEP BEEP** Plickibot has been re-!initialized. This is the alpha build of Plickibot.',
        });
        break;
      // !hello
      case 'hello':
        bot.sendMessage({
          to: channelID,
          message: `**BEEP BOOP** I am Plickibot, created with PlickAI. Hello, ${user}!`,
        });
        break;
      default:
        bot.sendMessage({
          to: channelID,
          message: `**BEEP** Plickibot is running.`,
        });
        break;
    }
  }
});
