const {Router} = require('express');
const { User } = require('../records/user.record');
const { ValidationError } = require('../utils/errors');

const userRouter = Router();

userRouter
.post('/', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.insert();
    res.redirect('/child');
})

module.exports = {
    userRouter,
};