import dotenv from 'dotenv';
import path from 'path';

export function loadEnv() {
  const result = dotenv.config({
    path: path.resolve(process.cwd(), '.env'),
  });

  if (result.error) {
    console.error('Error loading .env file:', result.error);
    return;
  }

  // Validate required env vars
  const requiredEnvVars = ['SLACK_WEBHOOK_URL'];
  const missing = requiredEnvVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
  }
}
