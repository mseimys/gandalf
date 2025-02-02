import bolt from '@slack/bolt';
import { config } from 'dotenv';

config();

const port = Number(process.env.SLACK_APP_PORT) || 3000;

const app = new bolt.App({
  port,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: bolt.LogLevel.DEBUG,
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }: any) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});

app.message(/\s+time/, async ({ message, say }: any) => {
  await say(`Now it's ${new Date().toISOString()}`);
});

(async () => {
  // Start your app
  await app.start();
  console.log(`⚡️ Bolt app is running on port ${port}`);
})();