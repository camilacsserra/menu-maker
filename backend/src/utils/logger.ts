import pino from 'pino';
import { multistream } from 'pino-multi-stream';
import { createStream } from 'rotating-file-stream';

const stream = createStream('app.log', {
  interval: '1d',
  path: './logs',
  maxFiles: 7,
});

export const logger = pino(
  {
    level: 'info',
    /*transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
      },
    },*/
  },
  multistream([{ stream: process.stdout }, { stream }]),
);
