const express = require('express');
const corsMiddleware = require('cors');
const notesRoutes = require('./notes/routes');

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use('/notes', notesRoutes);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
