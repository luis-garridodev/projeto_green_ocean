import "express-async-errors";
import { Router } from "express";

import{countProfissionals,insertProfissionals,updateProfissionals,
    deleteProfissionals}from "../../src/controllers/ profissionais_de_saude.controller"

    const routes=Router()
    routes.get('/',countProfissionals);
    routes.post('/create',insertProfissionals);
    routes.put('/update',updateProfissionals);
    routes.put('/delete',deleteProfissionals);
    
    export{routes}