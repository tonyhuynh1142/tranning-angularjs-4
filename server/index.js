const express = require('express');

const jsonParser = require('body-parser').json();

const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.post('/signin', (req, res) => {
  // res.send({message: 'OK'});
  res.send(req.body);
})

app.listen(3000, () => console.log('Server is running !'));
