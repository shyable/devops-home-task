const express = require('express');
const process = require('process');

const app = express();

app.get('/test', (req, res) => {
  return res.json({ status: 'ok' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
