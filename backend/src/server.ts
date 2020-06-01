import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

app.listen(8080);