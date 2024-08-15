const prismaclient = require("../services/prismaclient.service");

async function countCalendarioPaciente() {
  return await prismaclient.calendario_paciente.findMany({
    where: { deleted_at: null },
  });
}

async function countCalendarioByIdPaciente({ id }) {
  return await prismaclient.calendario_paciente.findFirstOrThrow({
    where: { id },
  });
}
async function insertCalendarioPaciente({ paciente_id, emocao }) {
  return await prismaclient.calendario_paciente.create({
    data: {
      profissional_id,
      emocao,
    },
  });
}
async function updateCalendarioPaciente({  paciente_id, emocao }) {
    return await prismaclient.calendario_paciente.update({
      data: {
        profissional_id,
        emocao,
      },
    });
  }
  async function deleteCalendarioPaciente({  paciente_id, emocao }) {
    return await prismaclient.calendario_paciente.update({
      data: {
        profissional_id,
        emocao,
      },
    });
  }
  module.exports={
    countCalendarioPaciente,
    countCalendarioByIdPaciente,
    insertCalendarioPaciente,
    updateCalendarioPaciente,
    deleteCalendarioPaciente
  }