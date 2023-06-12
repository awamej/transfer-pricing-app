const {Router} = require('express');
const { User } = require('../records/user.record');

const userRouter = Router();

userRouter
.post('/', async (req, res) => {
    const newUser = new User(req.body.user);
    [code, message] = await newUser.insert();
    console.log(code, message);
    res.status(code).send(message);
})

module.exports = {
    userRouter,
};