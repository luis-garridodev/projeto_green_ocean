const prismaclient = require("../services/prismaclient.service");



async function countAgenda() {
  return await prismaclient.agenda_de_medicamentos.findMany({
    where: { deleted_at: null },
  });
}
async function countAgendaById({ id }) {
  return await prismaclient.agenda_de_medicamentos.findFirstOrThrow({
    where: { id },
  });
}
async function insertMedicamentos({
  acompanhamento_id,
  medicamento_do_dia,
  hora_marcada,
  alarme,
}) {
  //enviando em formato estadunidense
  console.log(new Date(alarme))
  return await prismaclient.agenda_de_medicamentos.create({
    data:{
    acompanhamento_id,
    medicamento_do_dia,
    hora_marcada,
    alarme:new Date(alarme)
    }
    
  });
}
async function updateMedicamentos({
    acompanhamento_id,
    medicamento_do_dia,
    hora_marcada,
    alarme,
  }) {
    return await prismaclient.agenda_de_medicamentos.update({
        data:{
            where: { id },
            acompanhamento_id,
            medicamento_do_dia,
            hora_marcada,
            alarme,
            }
    });
  }
  async function deleteMedicamentos({
    acompanhamento_id,
    medicamento_do_dia,
    hora_marcada,
    alarme,
  }) {
    return await prismaclient.agenda_de_medicamentos.update({
        data:{
            where: { id },
            data: { deleted_at: new Date().toISOString() },
            acompanhamento_id,
            medicamento_do_dia,
            hora_marcada,
            alarme,
            }
    });
  }
  module.exports={
    countAgenda,
    countAgendaById,
    insertMedicamentos,
    updateMedicamentos,
    deleteMedicamentos
  }
