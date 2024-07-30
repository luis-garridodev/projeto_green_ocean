require("express-async-errors");
const { routes: pacientRoutes } = require("./paciente");
const { routes: profissionaisRoutes } = require("./profissionais");
const { routes: consultasRoutes } = require("./consultas");
const{routes:acompanhamentoRoutes}=require("./acompanhamento");
const{routes:agendaRoutes}=require("./agenda");
const { Router } = require("express");

const routes = Router();
routes.use("/paciente", pacientRoutes);
routes.use("/profissionais", profissionaisRoutes);
routes.use("/consultas", consultasRoutes);
routes.use("/acompanhamentos",acompanhamentoRoutes);
routes.use("/agenda",agendaRoutes);
module.exports = routes;
