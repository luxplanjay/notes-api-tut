const express = require('express');
const corsMiddleware = require('cors');

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
