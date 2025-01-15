import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  console.log('countries hit');
  try {
    const sql = `
    select "countries"."countryId", "countries"."name", count(*) as "cities"
    from "countries"
    join "cities" using ("countryId")
    group by "countries"."countryId", "countries"."name";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  console.log('cityId hit');
  try {
    const { cityId } = req.params;
    if (!Number.isInteger(+cityId)) {
      throw new ClientError(400, `Non-integer cityId: ${cityId}`);
    }
    const sql = `
    select "cities"."cityId", "cities"."name", "countries"."name" as "country"
    from "cities"
    join "countries" using ("countryId")
    where "cityId" = $1;
    `;
    const params = [cityId];
    const result = await db.query(sql, params);
    const city = result.rows[0];
    if (!city) throw new ClientError(404, `city ${cityId} not found`);
    res.json(city);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
