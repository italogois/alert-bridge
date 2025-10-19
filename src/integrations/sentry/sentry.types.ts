export interface SentryWebhookPayload {
  action: string;
  installation: {
    uuid: string;
  };
  data: {
    error: SentryError;
  };
  actor: {
    type: string;
    id: string;
    name: string;
  };
}

export interface SentryError {
  event_id: string;
  project: number;
  release: string | null;
  dist: string | null;
  platform: string;
  message: string;
  datetime: string;
  culprit: string;
  environment: string;
  level: string;
  location: string;
  title: string;
  transaction: string;
  type: string;
  url: string;
  web_url: string;
  issue_url: string;
  issue_id: string;
}
