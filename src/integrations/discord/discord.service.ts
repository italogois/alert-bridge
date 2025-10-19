import axios from 'axios';
const url = process.env.DISCORD_WEBHOOK_URL;
export async function sendDiscordMessage(text: string) {
  if (!url) return;
  const body = { content: text };
  await axios.post(url, body);
}
