const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
const { UserModel, userSchema } = require('./model/schema&model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('html'));

// console.log('model', UserModel);
// console.log('schema', userSchema);


mongoose.connect(process.env.mongoConnect)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error(err));



app.post('/users', async (req, res) => {
    const newUser = new UserModel(req.body);
    console.log('postUser', newUser);
    await newUser.save()

})

app.put('/users', async (req, res) => {
    const userUpd = await UserModel.findOneAndUpdate({ name: req.body.name },
        { $set: req.body },
        { new: true, runValidators: true });
    if (!userUpd) {
        return res.status(404).json({ message: 'Користувача не знайдено' });
    }
    console.log('put', userUpd);

    res.json(userUpd);


})

app.delete('/users', async (req, res) => {
    const userDel = await UserModel.findOneAndDelete({ name: req.body.name });
    if (!userDel) {
        return res.status(404).json({ message: 'Користувача не знайдено' });
    }
    console.log('delete', userDel);

    res.json(userDel);


})

app.get('/users', async (req, res) => {
    const usersList = await UserModel.find();

    res.json(usersList)
})
app.get('/users/:id', async (req, res) => {
    const userById = await UserModel.findById(req.params.id);
    if (!userById) {
        res.end('user not found')
    }
    res.json(userById);
})

app.listen(process.env.PORT, () => {
    console.log(`server runing on ${process.env.PORT}`);

})



