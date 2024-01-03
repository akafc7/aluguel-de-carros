import carroService from '../services/carros.service.js';

const create = async (req, res) => {
    try {
        const { modelo, marca, ano, preco } = req.body;

        if (!modelo || !marca || !ano || !preco) {
            res.status(400).send({ message: "Submit all fields for registration." })
        }

        const carro = await carroService.createService(req.body);

        if (!carro) {
            res.status(400).send({ message: "Error creating car." })
        }

        res.status(201).send({
            message: "Car created successfully", car: {
                id: carro._id,
                modelo,
                marca,
                ano,
                preco
            }
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findAll = async (req, res) => {
    try {
        const carros = await (carroService.findAllService());

        if (carros.length === 0) {
            return res.status(400).send({ message: "There are no registered cars." })
        }

        res.send(carros);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export default { create, findAll }