const express = require('express');
const corsMiddleware = require('cors');

const app = express();

app.use(express.json());
app.use(corsMiddleware());

// GET localhost:8080/notes
// POST localhost:8080/notes {id, title, text}
const notes = [
  { id: 1, title: 'title 1', text: 'text 1' },
  { id: 2, title: 'title 2', text: 'text 2' },
];

app.get('/notes', (req, res, next) => {
  res.status(200).json(notes);
});

app.post('/notes', (req, res, next) => {
  console.log(req.body);

  const note = {
    id: Date.now(),
    ...req.body,
  };

  res.status(201).json(note);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
