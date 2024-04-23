import { Request, Response } from "express";
import { formatError } from "../services/error.service";
import{countconsulta,getConsultaById, insertConsulta,
    updateConsulta,deletePaciente}from "../repositories/consulta.repository"

export async function countConsultas(Request, Response){
    try{
        const consultas=await countconsulta()
        return Response.status(200).send({consultas})
    }catch{
        return formatError(error).httpResponse(Response);
    }
}
export async function insertConsultas(Request,Response){
 const{  
    paciente,
    paciente_id ,
    profissional_de_saude ,
    profissional_id,
    data_hora_consulta,
    data_finalizacao ,
    local_consulta,
    url_consulta}=Request.body

    try{
        const consultas=await insertConsulta({ 
            paciente,
            paciente_id ,
            profissional_de_saude ,
            profissional_id,
            data_hora_consulta,
            data_finalizacao ,
            local_consulta,
            url_consulta,})
        return Response.status(200).send(consultas);
    }catch(error){
        return formatError(error, "profissional já registrado").httpResponse(Response);
    }
}
export async function updateConsultas(Request,Response){
    const{id}=Request.params
    const{  
       paciente,
       paciente_id ,
       profissional_de_saude ,
       profissional_id,
       data_hora_consulta,
       data_finalizacao ,
       local_consulta,
       url_consulta}=Request.body
   
       try{
        const  getconsulta = await  getConsultaById({ id: parseInt(id) });
           const consultas=await updateConsulta({ 
            id: getconsulta.id,
               paciente,
               paciente_id ,
               profissional_de_saude ,
               profissional_id,
               data_hora_consulta,
               data_finalizacao ,
               local_consulta,
               url_consulta,})
           return Response.status(200).send(consultas);
       }catch(error){
           return formatError(error, "profissional já registrado").httpResponse(Response);
       }
   }

   export async function deleteConsultas(Request,Response){
    const{id}=Request.params
  
   
       try{
        const  getconsulta = await  getConsultaById({ id: parseInt(id) });
           const consultas=await deleteConsulta({ 
            id: getconsulta.id,
               paciente,
               paciente_id ,
               profissional_de_saude ,
               profissional_id,
               data_hora_consulta,
               data_finalizacao ,
               local_consulta,
               url_consulta,})
           return Response.status(200).send(consultas);
       }catch(error){
           return formatError(error, "profissional já registrado").httpResponse(Response);
       }
   }