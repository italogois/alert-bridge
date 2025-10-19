export function normalizePayload(payload: any) {
  // normalize common fields we'll use across formatters
  return {
    project: payload.project || payload.project_name || 'unknown',
    culprit: payload.culprit || payload.logger || payload.module || 'unknown',
    message: payload.message || (payload.event && payload.event.message) || 'no message',
    url: payload.url || (payload.event && payload.event.url) || '',
    level: payload.level || 'error'
  };
}
