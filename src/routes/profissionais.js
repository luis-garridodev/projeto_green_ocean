const { Router } = require("express");

const {
  countProfissionals,
  insertProfissionals,
  updateProfissionals,
  deleteProfissionals,
} =require( "../controllers/profissionais_de_saude.controller");

const routes = Router();
routes.get("/", countProfissionals);
routes.post("/create", insertProfissionals);
routes.put("/update", updateProfissionals);
routes.put("/delete", deleteProfissionals);

module.exports={ routes };
