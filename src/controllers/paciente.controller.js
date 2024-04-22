import { Request, Response } from "express";
import { formatError } from "../services/error.service";
import{countPaciente,getPacienteById,insertPaciente}from "../../src/repositories/paciente.repository"
export async function countPacientes(Request,Response){
  try{
    const pacientes=await countPaciente()
    return Response.status(200).send({pacientes})
  } catch(error){
    return formatError(error).httpResponse(Response);
  } 
}
export async function insertPacientes(Request,Response){
    const{nome,idade,cpf, data_de_nascimento,numero_de_associacao}=Request.body
    try{
        const pacientescreated=await insertPaciente({nome,idade,cpf, data_de_nascimento,numero_de_associacao})

    return Response.status(200).send(pacientescreated);
    }catch(error){
        return formatError(error, "paciente já registrado").httpResponse(Response);
    }
}

export async function updatePacientes(Request,Response){
    const{nome,idade,cpf, data_de_nascimento,numero_de_associacao}=Request.body
    const{id}=Request.params
    try{
        const  getpaciente = await getPacienteById({ id: parseInt(id) });
        const pacientescupdated=await updatePaciente({id:getpaciente.id,nome,idade,cpf, data_de_nascimento,numero_de_associacao})

    return Response.status(200).send(pacientescupdated);
    }catch(error){
        return formatError(error, "paciente não encontrado").httpResponse(Response);
    }
}
export async function deletePacientes(Request,Response){
    
    const{id}=Request.params
    try{
        const  getpaciente = await getPacienteById({ id: parseInt(id) });
        const pacientedeleted=await deletePaciente({id:getpaciente.id,nome,idade,cpf, data_de_nascimento,numero_de_associacao})

    return Response.status(200).send(pacientedeleted);
    }catch(error){
        return formatError(error, "paciente não encontrado").httpResponse(Response);
    }
}
