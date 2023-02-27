import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import errHandlerMiddleware from './middleware/errorHandler';
import indexRoute from './routes/indexRoute';

const app = express();

// Use cors
app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept,Authorization,x-api-key, Tenant-Id,Accept-Language',
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());

app.get('/', (req, res, next) => {
  console.log('routing in app');
  next();
});

app.use('', indexRoute);

app.use(errHandlerMiddleware);
export default app;
