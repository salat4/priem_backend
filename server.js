const express = require('express');
const app = express();
const snapshot = require('./snapshot.json')
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/snapshot', (req, res) => {
  res.json(snapshot);
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});
