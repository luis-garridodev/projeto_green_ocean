const { prismaclient } =require( "../services/prismaclient.service");

 async function countconsulta(){
    return await prismaclient.consulta.findMany({ where: { deleted_at: null } });
}
 async function getConsultaById({ id }){
    return await prismaclient.paciente.findFirstOrThrow({
        where: { id },})
}
 async function insertConsulta({
    id,
    paciente,
    paciente_id ,
    profissional_de_saude ,
    profissional_id,
    data_hora_consulta,
    data_finalizacao ,
    local_consulta,
    url_consulta,
    
}){
    return await prismaclient.consulta.create({
        data:{
            id:id,
            paciente:paciente,
            paciente_id :paciente_id,
            profissional_de_saude:profissional_de_saude ,
            profissional_id:profissional_id,
            data_hora_consulta:data_hora_consulta,
            data_finalizacao:data_finalizacao ,
            local_consulta:local_consulta,
            url_consulta:url_consulta,
            
        }
    }) 

}
 async function updateConsulta({
    id,
    paciente,
    paciente_id ,
    profissional_de_saude ,
    profissional_id,
    data_hora_consulta,
    data_finalizacao ,
    local_consulta,
    url_consulta,
   
  }) {
    return await deletePacienteprismaclient.consulta.update({
        id:id,
        paciente:paciente,
        paciente_id :paciente_id,
        profissional_de_saude:profissional_de_saude ,
        profissional_id:profissional_id,
        data_hora_consulta:data_hora_consulta,
        data_finalizacao:data_finalizacao ,
        local_consulta:local_consulta,
        url_consulta:url_consulta,
        
    });
  }
   async function deleteConsulta({ id }) {
    return await prismaclient.paciente.update({
      where: { id },
      data: { deleted_at: new Date().toISOString() },
      id:true,
      paciente:true,
      paciente_id :true,
      profissional_de_saude:true ,
      profissional_id:true,
      data_hora_consulta:true,
      data_finalizacao:true,
      local_consulta:true,
      url_consulta:true
    });
  }

module.exports={countconsulta,getConsultaById,insertConsulta,updateConsulta, deleteConsulta}

