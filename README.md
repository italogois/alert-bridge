# Alert Bridge

Forward Sentry alerts to Slack, Discord and Telegram.

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
