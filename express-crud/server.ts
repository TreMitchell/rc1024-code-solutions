import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// write our routes

// exercise Part #1:
app.get('/api/grades', async (req, res, next) => {
  console.log('grade endpoint hit');

  try {
    const sql = `
      select *
      from grades;
      `;
    const result = await db.query(sql);
    console.log(result);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// exercise Part #2:
app.get('/api/grades/:gradeId', async (req, res, next) => {
  console.log('gradeId endpoint hit!');
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(404, `Non-integer grade Id: ${gradeId}`);
    }

    const sql = `
    select * from "grades"
    where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const grade = result.rows[0];
    res.json(grade);
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found!`);
    }
  } catch (err) {
    next(err);
  }
});

// exercise Part #3:
app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) throw new ClientError(400, `No name provided`);
    if (!course) throw new ClientError(400, `No course provided`);
    if (typeof score !== 'number')
      throw new ClientError(400, `Score ${score} is not a number`);
    if (score < 0 || score > 100)
      throw new ClientError(400, `Score ${score} is not between 0 and 100`);
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    res.status(201).json(newGrade);
  } catch (err) {
    next(err);
  }
});

// exercise Part #4:
app.put('/api/grades/:gradeId', async (req, res, next) => {
  console.log('grade update endpoint hit!');
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer grade Id: ${gradeId}`);
    }

    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, `Name, Course, and Score are required!`);
    }
    const sql = `
      update "grades"
      set "name" = $1 , "course" = $2 , "score" = $3
      where "gradeId" = $4
      returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) throw new Error(`404, grade ${gradeId} doesn't exist!`);
    res.status(200).send(updatedGrade);
  } catch (err) {
    next(err);
  }
});

// exercise Part #5:
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  console.log('delete endpoint hit!');

  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer grade Id: ${gradeId}`);
    }
    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `gradeId ${gradeId} not found!`);
    res.status(204);
  } catch (err) {
    next(err);
  }
});

// middleware for error handling
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
