import Aluguel from '../models/aluguel.js';

const createService = (body) => Aluguel.create(body);

const findService = async (_id) => Aluguel.findOne({"carro._id": _id});

const findAllService = () => Aluguel.find();


export default { createService, findService, findAllService }