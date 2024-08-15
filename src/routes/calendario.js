const { Router } = require("express");

const{
    countCalendarios,
    countCalendariosById,
    insertCalendarios,
    updateCalendarios,
    deleteCalendarios

}=require("../../src/controllers/calendario.controller");

const routes = Router();
routes.get("/",  countCalendarios);
routes.post("/create", insertCalendarios);
routes.put("/update",  updateCalendarios);
routes.put("/delete",  deleteCalendarios);

module.exports={ routes };



