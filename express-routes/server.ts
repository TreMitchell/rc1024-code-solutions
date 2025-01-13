import express from 'express';

const app = express();

app.use((req, res, next) => {
  // console.log('Hello, World!');
  console.log(new Date(), ':', req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  console.log('Getting /');
  res.send('Getting /');
});

app.get('/notes', (req, res) => {
  console.log('Getting /notes');
  res.send('Getting /notes');
});

app.post('/notes/:noteId', (req, res) => {
  console.log('req.params', req.params);
  // const id = req.params.noteId; // One way to do this
  // const { noteId } = req.params; // Another way to destructure this
  res.send(req.params.noteId);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
