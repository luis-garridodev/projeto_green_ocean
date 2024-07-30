const prismaclient = require("../services/prismaclient.service");

async function countAcompanhamento() {
  return await prismaclient.acompanhamento.findMany({
    where: { deleted_at: null },
  });
}
async function countAcompanhamentoById({ id }) {
  return await prismaclient.acompanhamento.findFirstOrThrow({
    where: { id },
  });
}
async function insertAcompanhamento({
  paciente_id,
  profissional_id,
  estado,
  receitas,
  status,
  observacoes,
  contato,
  numero_contato,
  numero_parente,
}) {
  return await prismaclient.acompanhamento.create({
    data: {
      paciente_id: paciente_id,
      profissional_id: profissional_id,
      estado: estado,
      receitas: receitas,
      status: status,
      observacoes: observacoes,
      contato: contato,
      numero_contato: numero_contato,
      numero_parente: numero_parente,
    },
  });
}
async function updateAcompanhamento({
    paciente_id,
    profissional_id,
    estado,
    receitas,
    status,
    observacoes,
    contato,
    numero_contato,
    numero_parente,
  }) {
    return await prismaclient.acompanhamento.update({
      data: {
        where: { id },
        paciente_id: paciente_id,
        profissional_id: profissional_id,
        estado: estado,
        receitas: receitas,
        status: status,
        observacoes: observacoes,
        contato: contato,
        numero_contato: numero_contato,
        numero_parente: numero_parente,
      },
    });
  }

async function deleteAcompanhamento({
    paciente_id,
    profissional_id,
    estado,
    receitas,
    status,
    observacoes,
    contato,
    numero_contato,
    numero_parente,
  }) {
    return await prismaclient.acompanhamento.update({
      data: {
        where: { id },
        data: { deleted_at: new Date().toISOString() },
        paciente_id: paciente_id,
        profissional_id: profissional_id,
        estado: estado,
        receitas: receitas,
        status: status,
        observacoes: observacoes,
        contato: contato,
        numero_contato: numero_contato,
        numero_parente: numero_parente,
      },
    });
  }
  
module.exports={
    countAcompanhamento,
    countAcompanhamentoById,
    insertAcompanhamento,
    updateAcompanhamento,
    deleteAcompanhamento


}