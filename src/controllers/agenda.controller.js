const{
    countAgenda,
    countAgendaById,
    insertMedicamentos,
    updateMedicamentos,
    deleteMedicamentos

}=require("../repositories/agenda.repository");

async function countAgendas(request,response){
    try{
     const agenda=await countAgenda();
     return response.status(200).send({ agenda });
    }catch(error){
          console.log(error)
    }
}
async function countAgendasById(request,response){
    try{
     const agenda=await  countAgendaById({id:parseInt(id)});
     return response.status(200).send({ agenda });
    }catch(error){
          console.log(error)
    }
}
async function insertMedicamento(request,response){
    const{
        acompanhamento_id,
        medicamento_do_dia,
        hora_marcada,
        alarme,
    }=request.body
    try{
        const agenda=await insertMedicamentos({
            acompanhamento_id:parseInt(acompanhamento_id),
            medicamento_do_dia,
            hora_marcada,
            alarme
        }
        )
        return response.status(200).send({ agenda });
    }catch(error){
        console.log(error)
  }
}
async function updateMedicamento(request,response){
    const{
        acompanhamento_id,
        medicamento_do_dia,
        hora_marcada,
        alarme,
    }=request.body
    try{
        const getAgenda=await  countAgendaById({id:parseInt(id)})
        const agenda=await updateMedicamentos({
            id:getAgenda.id,
            acompanhamento_id:parseInt(acompanhamento_id),
            medicamento_do_dia,
            hora_marcada,
            alarme
        }
        )
        return response.status(200).send({ agenda });
    }catch(error){
        console.log(error)
  }
}
async function deleteMedicamento(request,response){
    const{
        acompanhamento_id,
        medicamento_do_dia,
        hora_marcada,
        alarme,
    }=request.body
    try{
        const getAgenda=await  countAgendaById({id:parseInt(id)})
        const agenda=await deleteMedicamentos({
            id:getAgenda.id,
            acompanhamento_id:parseInt(acompanhamento_id),
            medicamento_do_dia,
            hora_marcada,
            alarme
        }
        )
        return response.status(200).send({ agenda });
    }catch(error){
        console.log(error)
  }
}

module.exports={
    countAgendas,
    countAgendasById,
    insertMedicamento,
    updateMedicamento,
    deleteMedicamento
}
