import axios from 'axios';
import { SlackMessage } from './slack.types';

export class SlackService {
  private webhookUrl: string;
  private defaultChannel?: string;

  constructor() {
    this.webhookUrl = process.env.SLACK_WEBHOOK_URL!;
    this.defaultChannel = process.env.SLACK_CHANNEL;
  }

  async sendMessage(message: SlackMessage) {
    if (!this.webhookUrl) {
      throw new Error('Failed to send Slack alert: Webhook URL not configured');
    }

    try {
      await axios.post(this.webhookUrl, {
        blocks: message.blocks,
        channel: message.channel || this.defaultChannel,
        text: message.text || 'New Sentry Alert',
      });
    } catch (error) {
      throw new Error('Failed to send Slack alert: ' + error);
    }
  }
}
