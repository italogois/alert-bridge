import axios from "axios";

interface SlackBlock {
  type: "section";
  text?: {
    type: "mrkdwn";
    text: string;
  };
  fields?: {
    type: "mrkdwn";
    text: string;
  }[];
}

interface SlackMessage {
  text?: string;
  blocks?: SlackBlock[];
  channel?: string;
}

export class SlackService {
  private webhookUrl: string;
  private defaultChannel?: string;

  constructor() {
    this.webhookUrl = process.env.SLACK_WEBHOOK_URL!;
    this.defaultChannel = process.env.SLACK_CHANNEL;
  }

  async sendMessage(message: SlackMessage) {
    if (!this.webhookUrl) {
      console.warn("⚠️ Slack webhook URL not configured.");
      return;
    }

    try {
      await axios.post(this.webhookUrl, {
        blocks: message.blocks,
        channel: message.channel || this.defaultChannel,
        text: message.text || "New Sentry Alert", // fallback text para notificações
      });
      console.log(
        `✅ Slack alert enviado para ${message.channel || this.defaultChannel}`
      );
    } catch (error) {
      console.error("❌ Erro ao enviar alerta para o Slack:", error);
    }
  }
}

// Singleton pattern para garantir que a instância só é criada após carregar as env vars
// let instance: SlackService | null = null;

// export const slackService = {
//   getInstance: () => {
//     if (!instance) {
//       instance = new SlackService();
//     }
//     return instance;
//   },
// };
