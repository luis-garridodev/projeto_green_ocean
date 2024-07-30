const { Router } = require("express");

const{
    countAcompanhamentos,
    countAcompanhamentoByIds,
    insertAcompanhamentos,
    updateAcompanhamentos,
    deleteAcompanhamentos
}=require("../controllers/acompanhamento.controller");
const routes = Router();
routes.get("/", countAcompanhamentos);
routes.get("//:id",  countAcompanhamentoByIds);
routes.post("/create",insertAcompanhamentos);
routes.put("/update",  updateAcompanhamentos);
routes.put("/delete",  deleteAcompanhamentos);
module.exports={routes}