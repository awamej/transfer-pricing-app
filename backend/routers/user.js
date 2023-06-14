const {Router} = require('express');
const { User } = require('../records/user.record');

const userRouter = Router();

userRouter
.post('/register', async (req, res) => {
    const newUser = new User(req.body.user);
    [code, message] = await newUser.insert();
    res.status(code).send(message);
})
.post('/login', async (req, res) => {
    [code, message] = await User.login(req.body.user.email, req.body.user.password);
    res.status(code).send(message);
})

module.exports = {
    userRouter,
};