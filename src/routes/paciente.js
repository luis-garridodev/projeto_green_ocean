const { Router } = require("express");

const {
  countPacientes,
  insertPacientes,
  updatePacientes,
  deletePacientes,
} =require("../../src/controllers/paciente.controller");
const routes = Router();
routes.get("/", countPacientes);
routes.post("/create", insertPacientes);
routes.put("/update", updatePacientes);
routes.put("/delete", deletePacientes);

module.exports={ routes };
