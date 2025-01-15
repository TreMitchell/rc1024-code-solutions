import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

// app.get('/api/countries', async (req, res, next) => {
//   console.log('countries hit');
//   // try {
//   //   const sql = `select
//   //     "", "", ""
//   //     from ""
//   //     group by`
//   // } catch (err) {
//   //   next(err);
//   // }
// });

// app.get('/api/cities/:cityId', async (req, res, next) => {
//   console.log('countries hit');
//   try {
//   } catch (err) {
//     next(err);
//   }
// });

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
