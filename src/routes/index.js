require('express-async-errors')
const pacientRoutes=require("./paciente")
const profissionaisRoutes=require('./profissionais')
const {Router}=require('express')

const routes=Router()
routes.use("/paciente",pacientRoutes);
routes.use("/profissionais",profissionaisRoutes)
module.exports= routes;