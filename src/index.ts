import { App, LogLevel, Assistant } from '@slack/bolt';
import { config } from 'dotenv';

config();

/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: LogLevel.DEBUG,
});

console.log('⚡️ Bolt app is running!');
console.log('📝 Environment variables', process.env);
