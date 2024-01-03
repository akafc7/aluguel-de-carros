import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const user = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

user.pre("save", async function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model("User", user)

export default User