const express = require('express');
const methodOverride = require('method-override');
const {handleError} = require('./utils/errors');
const { userRouter } = require('./routers/user');
require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true, }));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/users', userRouter);

app.use(handleError);

app.listen(3000, 'localhost', (err) => {
    console.log('Listening on port 3000');
});