const{
    countCalendarioPaciente,
    countCalendarioByIdPaciente,
    insertCalendarioPaciente,
    updateCalendarioPaciente,
    deleteCalendarioPaciente
  }=require("../repositories/calendario_paciente.repository");
  async function countCalendariosPaciente(request,response){
    try{
        const calendario=await countCalendarioPaciente();
        return response.status(200).send({ calendario });

    }catch(error){
        console.log(error)
    }
}
async function countCalendariosByIdPaciente(request,response){
    try{
        const calendario=await countCalendarioByIdPaciente({id:parseInt(id)});
        return response.status(200).send({ calendario });

    }catch(error){
        console.log(error)
    }
}
async function insertCalendariosPaciente(request,response){
const{
    paciente_id,
    emocao,
}=request.body
try{
    const calendario=await insertCalendarioPaciente({
        paciente_id:parseInt(paciente_id),
    emocao,
    })
    return response.status(200).send({ calendario });
}catch(error){
    console.log(error)
}
}
async function updateCalendariosPaciente(request,response){
    const{
        paciente_id,
        emocao,
    }=request.body
    try{
        const calendario=await updateCalendarioPaciente({
            paciente_id:parseInt(paciente_id),
        emocao,
        })
        return response.status(200).send({ calendario });
    }catch(error){
        console.log(error)
    }
    }
    async function deleteCalendariosPaciente(request,response){
        const{
            paciente_id,
            emocao,
        }=request.body
        try{
            const calendario=await deleteCalendarioPaciente({
                paciente_id:parseInt(paciente_id),
            emocao,
            })
            return response.status(200).send({ calendario });
        }catch(error){
            console.log(error)
        }
        }
        module.exports={
            countCalendariosPaciente,
            countCalendariosByIdPaciente,
            insertCalendariosPaciente,
            updateCalendariosPaciente,
            deleteCalendariosPaciente

        }