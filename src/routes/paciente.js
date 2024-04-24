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
routes.patch("/update/:id", updatePacientes);
routes.delete("/delete/:id", deletePacientes);

module.exports={ routes };
