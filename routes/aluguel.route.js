import { Router } from 'express';
import aluguelController from '../controllers/aluguel.controller.js';

const route = Router();

route.post("/", aluguelController.create);
route.get("/", aluguelController.findAll);


export default route;