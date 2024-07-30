const{
    countAcompanhamento,
    countAcompanhamentoById,
    insertAcompanhamento,
    updateAcompanhamento,
    deleteAcompanhamento

}=require("../repositories/acompanhamento.repository");

async function  countAcompanhamentos(request,response){
    try{
        const acompanhamento=await  countAcompanhamento();
        return response.status(200).send({ acompanhamento });
    }catch {
        console.log(error);
      }

}
async function countAcompanhamentoByIds(request,response){
    try{
        const acompanhamento=await  countAcompanhamentoById({id: parseInt(id)})
        return response.status(200).send({ acompanhamento });
    }catch {
        console.log(error);
      }
}
async function  insertAcompanhamentos(request,response){
    const{ paciente_id,
        profissional_id,
        estado,
        receitas,
        status,
        observacoes,
        contato,
        numero_contato,
        numero_parente,}=request.body
        try{
            const acompanhamento=await insertAcompanhamento({
                paciente_id:parseInt(paciente_id),
                profissional_id:parseInt(profissional_id),
                estado,
                receitas,
                status,
                observacoes,contato,
                numero_contato,
                numero_parente

            });
            return response.status(200).send(acompanhamento)
        }catch (error) {
            console.log(error);
          }
}
async function updateAcompanhamentos(request,response){
    const{ paciente_id,
        profissional_id,
        estado,
        receitas,
        status,
        observacoes,
        contato,
        numero_contato,
        numero_parente,}=request.body
        try{
            const getAcompanhamento = await countAcompanhamentoById({ id: parseInt(id) })
            const acompanhamento=await updateAcompanhamento({
               id:getAcompanhamento.id,
                paciente_id:parseInt(paciente_id),
                profissional_id:parseInt(profissional_id),
                estado,
                receitas,
                status,
                observacoes,contato,
                numero_contato,
                numero_parente

            });
            return response.status(200).send(acompanhamento)
        }catch (error) {
            console.log(error);
          }
}
 async function deleteAcompanhamentos(request,response){
    const{ paciente_id,
        profissional_id,
        estado,
        receitas,
        status,
        observacoes,
        contato,
        numero_contato,
        numero_parente,}=request.body
        try{
            const getAcompanhamento = await countAcompanhamentoById({ id: parseInt(id) })
            const acompanhamento=await deleteAcompanhamento({
                id:getAcompanhamento.id,
                paciente_id:parseInt(paciente_id),
                profissional_id:parseInt(profissional_id),
                estado,
                receitas,
                status,
                observacoes,contato,
                numero_contato,
                numero_parente

            });
            return response.status(200).send(acompanhamento)
        }catch (error) {
            console.log(error);
          }
}
module.exports={
    countAcompanhamentos,
    countAcompanhamentoByIds,
    insertAcompanhamentos,
    updateAcompanhamentos,
    deleteAcompanhamentos

}

