const express = require('express');
const app = express();
const port = 3000;

app.length('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Express learning server listening on port ${port}`);
});