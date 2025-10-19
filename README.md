# Alert Bridge

Forward Sentry alerts to Slack, Discord and Telegram.

## Menu

- [Alert Bridge](#alert-bridge)
  - [Menu](#menu)
  - [Quickstart](#quickstart)
  - [Webhook endpoint](#webhook-endpoint)
  - [Sentry Configuration](#sentry-configuration)
  - [Channels to receive messages](#channels-to-receive-messages)
    - [Slack Configuration](#slack-configuration)

## Quickstart

1. Copy `.env.example` to `.env` and fill your webhook/token values.
2. Install dependencies: `npm install`
3. Run in development: `npm run dev`
4. Build and run: `npm run build && npm start` or use Docker compose:

```bash
cp .env.example .env
docker compose up --build
```

## Webhook endpoint

POST `/webhook/sentry` - receives Sentry payloads

## Sentry Configuration

To forward events from Sentry to this service you need to create an integration and point the webhook to the `/webhook/sentry` endpoint.

Steps (from Sentry UI):

1. Login to Sentry and go to Settings → Integrations.
2. Create a new integration (or select an existing one) and add a Webhook.
3. Use the webhook URL that points to your running instance, for example `https://your-host.com/webhook/sentry`.

If you're testing locally, expose your localhost using a tunnel.

```bash
# install localtunnel globally (only once)
npm install -g localtunnel
# start your app then run:
lt --port 3030
```

## Channels to receive messages

This project can forward Sentry alerts to multiple channels/providers. Currently implemented:

- Slack
- (Discord and Telegram coming soon)

### Slack Configuration

1. Go to <https://api.slack.com/apps> and click "Create New App" → "From scratch".
2. In the app sidebar enable _Incoming Webhooks_ and add a new webhook for the desired channel.
3. Copy the generated Webhook URL and add it to your `.env` as `SLACK_WEBHOOK_URL`.
4. Optionally set `SLACK_CHANNEL` in `.env` to override the default channel configured in the webhook.

If you want to design a custom layout for Slack messages use the Block Kit Builder: <https://app.slack.com/block-kit-builder>

Example `.env` entries:

```env
PORT=3030
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx/yyy/zzz
SLACK_CHANNEL=#sentry
```
