const{
    countCalendario,
    countCalendarioById,
    insertCalendario,
    updateCalendario,
    deleteCalendario
}=require("../repositories/calendario.repository");

async function countCalendarios(request,response){
    try{
        const calendario=await countCalendario();
        return response.status(200).send({ calendario });

    }catch(error){
        console.log(error)
    }
}
async function countCalendariosById(request,response){
    try{
        const calendario=await countCalendarioById({id:parseInt(id)});
        return response.status(200).send({ calendario });

    }catch(error){
        console.log(error)
    }
}
async function insertCalendarios(request,response){
const{
    profissional_id,
    emocao,
}=request.body
console.log(request.body)
try{
    const calendario=await insertCalendario({
        profissional_id:parseInt(profissional_id),
        emocao:parseInt(emocao)
    
    })

    return response.status(200).send({ calendario });
}catch(error){
    console.log(error)
}
}
async function updateCalendarios(request,response){
    const{
        profissional_id,
        emocao,
    }=request.body
    try{
        const calendario=await updateCalendario({
            profissional_id:parseInt(profissional_id),
        emocao,
        })
        return response.status(200).send({ calendario });
    }catch(error){
        console.log(error)
    }
    }
    async function deleteCalendarios(request,response){
        const{
            profissional_id,
            emocao,
        }=request.body
        try{
            const calendario=await deleteCalendario({
                profissional_id:parseInt(profissional_id),
            emocao,
            })
            return response.status(200).send({ calendario });
        }catch(error){
            console.log(error)
        }
        }

        module.exports={
            countCalendarios,
            countCalendariosById,
            insertCalendarios,
            updateCalendarios,
            deleteCalendarios

        }