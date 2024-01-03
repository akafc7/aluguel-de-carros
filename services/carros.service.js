import Carros from "../models/carros.js";

const createService = (body) => Carros.create(body);

const findAllService = () => Carros.find();

export default { createService, findAllService }