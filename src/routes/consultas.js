import "express-async-errors";
import { Router } from "express";

import{countConsultas, insertConsultas,updateConsultas,deleteConsultas}from "../../src/controllers/consulta.controller"
const routes=Router()
routes.get('/',countConsultas);
routes.post('/create',insertConsultas);
routes.put('/update',updateConsultas);
routes.put('/delete',deleteConsultas);

export{routes}