const { Router } = require("express");

const{
    countAgendas,
    countAgendasById,
    insertMedicamento,
    updateMedicamento,
    deleteMedicamento
}=require("../controllers/agenda.controller");

const routes = Router();
routes.get("/", countAgendas);
routes.get("/:id",  countAgendasById);
routes.post("/create",insertMedicamento);
routes.put("/update",   updateMedicamento);
routes.put("/delete",    deleteMedicamento);
module.exports={routes}