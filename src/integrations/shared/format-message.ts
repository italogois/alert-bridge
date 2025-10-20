import { SentryWebhookPayload, SentryError } from '../sentry/sentry.types';

interface SlackBlock {
  type: 'section';
  text?: {
    type: 'mrkdwn';
    text: string;
  };
  fields?: {
    type: 'mrkdwn';
    text: string;
  }[];
}

interface SlackMessage {
  blocks: SlackBlock[];
}

export function formatMessage(p: SentryWebhookPayload): SlackMessage {
  const error: SentryError = 'data' in p ? p.data.error : p;

  const projectName = error.url?.split('/projects/')?.[1]?.split('/')?.[1] || 'Unknown Project';

  const eventDate = new Date(error.datetime).toLocaleString();

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '🚨 *New Sentry Alert*\n*<' + error.web_url + '|View on Sentry>*',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: '*Project:*\n' + `\`${projectName}\``,
          },
          {
            type: 'mrkdwn',
            text: '*Environment:*\n' + `\`${error.environment || 'not specified'}\``,
          },
          {
            type: 'mrkdwn',
            text: '*Platform:*\n' + `\`${error.platform || 'not specified'}\``,
          },
          {
            type: 'mrkdwn',
            text: '*Level:*\n' + `\`${error.level || 'not specified'}\``,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: '*Error Type:*\n' + `\`${error.type || 'not specified'}\``,
          },
          {
            type: 'mrkdwn',
            text: '*Message:*\n' + `\`${error.title || error.message || 'No message provided'}\``,
          },
          {
            type: 'mrkdwn',
            text: '*Transaction:*\n' + `\`${error.transaction || 'not specified'}\``,
          },
          {
            type: 'mrkdwn',
            text: '*Culprit:*\n' + `\`${error.culprit || 'unknown'}\``,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: '*Event ID:*\n' + `\`${error.event_id || 'not specified'}\``,
          },
          {
            type: 'mrkdwn',
            text: '*Timestamp:*\n' + `\`${eventDate}\``,
          },
          {
            type: 'mrkdwn',
            text: error.location ? '*Location:*\n' + `\`${error.location}\`` : '',
          },
        ],
      },
    ],
  };
}
