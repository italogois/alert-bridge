import axios from 'axios';
const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
export async function sendTelegramMessage(text: string) {
  if (!token || !chatId) return;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await axios.post(url, { chat_id: chatId, text, parse_mode: 'Markdown' });
}
