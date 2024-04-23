require('express-async-errors')
const pacientRoutes=require("./paciente")
const profissionaisRoutes=require('./profissionais')
const consultasRoutes=require("./consultas")
const {Router}=require('express')

const routes=Router()
routes.use("/paciente",pacientRoutes);
routes.use("/profissionais",profissionaisRoutes)
routes.use("/consultas",consultasRoutes)
module.exports= routes;