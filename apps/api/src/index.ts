import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const createServer = () => {
  const app = express();
  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get('/', (req, res) => {
      return res.send('heloo world');
    })
    .get('/hello/:name', (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get('/healthz', (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};

const port = process.env.PORT || 8080;
const server = createServer();

server.listen(port, () => {
  console.log(`api running on ${port}`);
});
