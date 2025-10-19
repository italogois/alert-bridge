export function telegramFormatter(text: string) {
  return { text, parse_mode: 'Markdown' };
}
