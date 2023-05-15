const express = require('express');
// require('express-async-errors');
const methodOverride = require('method-override');
const {handleError} = require('./utils/errors');
require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true, }));
app.use(express.static('public'));
app.use(express.json());

app.use(handleError);

const users = [];

app.get('/api/users', (req, res) => {
    console.log('api/users called!')
    res.json(users);
  });

app.listen(3000, 'localhost', (err) => {
    console.log('Listening on port 3000');
});