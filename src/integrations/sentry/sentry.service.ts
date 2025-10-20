import { formatMessage } from '../shared';
import { SlackService } from '../slack/slack.service';
import { SentryWebhookPayload } from './sentry.types';

export async function handleSentryAlert(payload: SentryWebhookPayload) {
  const message = formatMessage(payload);

  const slackService = new SlackService();

  await Promise.allSettled([
    slackService.sendMessage(message),
    // sendDiscordMessage(message),
    // sendTelegramMessage(message)
  ]);
}
