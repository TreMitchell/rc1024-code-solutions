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
app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

// exercise Part #1: create
app.post('/api/actors', async (req, res, next) => {
  console.log('endpoint hit');

  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    throw new ClientError(400, `firstName and lastName are required`);
  }

  try {
    const sql = `
    insert into "actors" ("firstName", "lastName")
      values ($1, $2)
      returning *;
    `;
    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    const newActor = result.rows[0];
    if (!newActor) throw new ClientError(404, `newActor doesn't exist!`);
    res.status(201).send(newActor);
  } catch (err) {
    next(err);
  }
});

// exercise Part #2: update
app.put('/api/actors/:actorId', async (req, res, next) => {
  console.log('updated actor endpoint hit!');

  const { actorId } = req.params;
  if (!Number.isInteger(+actorId)) {
    throw new ClientError(400, `Non-integer actorId: ${actorId}`);
  }
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    throw new ClientError(400, `firstName and lastName are required`);
  }

  try {
    const sql = `
      update "actors"
      set "firstName" = $1 , "lastName" = $2
      where "actorId" = $3
      returning *;
    `;
    const params = [firstName, lastName, actorId];
    const result = await db.query(sql, params);
    const newActorName = result.rows[0];
    if (!newActorName) {
      throw new ClientError(404, `actor ${actorId} doesn't exist!`);
    }
    res.status(200).send(newActorName);
  } catch (err) {
    next(err);
  }
});

// exercise Part #3: delete
app.delete('/api/actors/:actorId', async (req, res, next) => {
  console.log('delete endpoint hit!');

  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
    delete
    from "actors"
    where "actorId" = $1
    returning *;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
