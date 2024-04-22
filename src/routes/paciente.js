import "express-async-errors";
import { Router } from "express";

import{countPacientes,insertPacientes,updatePacientes,deletePacientes}from "../../src/controllers/paciente.controller"
const routes=Router()
routes.get('/',countPacientes);
routes.post('/create',insertPacientes);
routes.put('/update',updatePacientes);
routes.put('/delete',deletePacientes);

export{routes}
