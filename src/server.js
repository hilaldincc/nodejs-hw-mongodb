import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

export function setupServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(pino());

  app.get('/', (req, res) => {
    res.json({ message: 'API is working!' });
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
}
