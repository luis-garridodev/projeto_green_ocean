const prismaclient = require("../services/prismaclient.service");

async function countCalendario() {
  return await prismaclient.calendario.findMany({
    where: { deleted_at: null },
  });
}

async function countCalendarioById({ id }) {
  return await prismaclient.calendario.findFirstOrThrow({
    where: { id },
  });
}
async function insertCalendario({ profissional_id, emocao }) {
  return await prismaclient.calendario.create({
    data: {
      profissional_id,
      emocao,
    },
  });
}
async function updateCalendario({ profissional_id, emocao }) {
    return await prismaclient.calendario.update({
      data: {
        profissional_id,
        emocao,
      },
    });
  }
  async function deleteCalendario({ profissional_id, emocao }) {
    return await prismaclient.calendario.update({
      data: {
        profissional_id,
        emocao,
      },
    });
  }
  module.exports={
    countCalendario,
    countCalendarioById,
    insertCalendario,
    updateCalendario,
    deleteCalendario
  }

  



