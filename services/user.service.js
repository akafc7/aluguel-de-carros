import user from '../models/user.js'

const createService = (body) => user.create(body);

const findByIdService = (id) => user.findById(id);

const findAllService = () => user.find();


export default { createService, findByIdService, findAllService }