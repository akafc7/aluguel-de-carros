import userService from '../services/user.service.js'
import mongoose from 'mongoose'

export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" })
    }

    next();
}

export const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "Invalid User." })
    }

    req.id = id;
    req.user = user;

    next();
}