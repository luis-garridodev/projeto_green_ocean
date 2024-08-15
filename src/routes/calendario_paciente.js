const { Router } = require("express");

const{
    countCalendariosPaciente,
            countCalendariosByIdPaciente,
            insertCalendariosPaciente,
            updateCalendariosPaciente,
            deleteCalendariosPaciente
}=require("../../src/controllers/calendario_paciente.controller");

const routes = Router();
routes.get("/",  countCalendariosPaciente);
routes.post("/create",   insertCalendariosPaciente);
routes.put("/update",  updateCalendariosPaciente);
routes.put("/delete",   deleteCalendariosPaciente);

module.exports={ routes };