import { createServer } from './app/server';
import { loadEnv } from './infra/env';

async function main() {
  loadEnv();
  const server = await createServer();
  const port = Number(process.env.PORT || 3000);
  server.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    server.log.info(`Server listening at ${address}`);
  });
}

main();
