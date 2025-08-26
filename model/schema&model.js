const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {
        type: String, minlength: [4, "Пароль має бути мінімум 4 символи"],
        maxlength: [8, "Пароль має бути максимум 8 символів"]
    }
}, { timestamps: true });


const UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel, userSchema };