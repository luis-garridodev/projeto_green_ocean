const { Router } = require("express");

const {
  countConsultas,
  insertConsultas,
  updateConsultas,
  deleteConsultas,
} =require( "../../src/controllers/consulta.controller");
const routes = Router();
routes.get("/", countConsultas);
routes.post("/create", insertConsultas);
routes.put("/update", updateConsultas);
routes.put("/delete", deleteConsultas);

module.exports={ routes };
