import userService from '../services/user.service.js';

const create = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).send({ message: "Submit all fields for registration" })

        }

        const user = await userService.createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Error creating user." })
        }

        res.status(201).send({
            message: "User created successfully",
            id: user._id,
            username
        })
    } catch (err) {
        res.status(500).send(console.log(err))
    }
}
const findAll = async (req, res) => {
    try {
        const users = await (userService.findAllService());

        if (users.length === 0) {
            return res.status(400).send({ message: "There are no registered users." })
        }

        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export default { create, findAll }