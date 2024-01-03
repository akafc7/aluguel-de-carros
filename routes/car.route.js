import { Router } from 'express';
import carroController from '../controllers/carros.controller.js'

const route = Router();

route.post("/", carroController.create);
route.get("/", carroController.findAll);

export default route;