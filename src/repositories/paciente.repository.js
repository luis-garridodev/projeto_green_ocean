const prismaclient = require("../services/prismaclient.service");

async function countPaciente() {
  return await prismaclient.paciente.findMany({ where: { deleted_at: null } });
}
async function getPacienteById({ id }) {
  return await prismaclient.paciente.findFirstOrThrow({
    where: { id },
  });
}
async function insertPaciente({
  nome,
  idade,
  cpf,
  data_de_nascimento,
  numero_de_associacao,
}) {
  return await prismaclient.paciente.create({
    data: {
      nome: nome,
      idade: idade,
      cpf: cpf,
      data_de_nascimento: data_de_nascimento,
      numero_de_associacao: numero_de_associacao,
    },
  });
}
async function updatePaciente({
  id,
  nome,
  idade,
  cpf,
  data_de_nascimento,
  numero_de_associacao,
}) {
  return await prismaclient.paciente.update({
    where: { id },
    data: {
      nome: nome,
      idade: idade,
      cpf: cpf,
      data_de_nascimento: data_de_nascimento,
      numero_de_associacao: numero_de_associacao,
    },
  });
}
async function deletePaciente({ id }) {
  return await prismaclient.paciente.update({
    where: { id },
    data: { deleted_at: new Date().toISOString() },
    select: {
      nome: true,
      idade: true,
      cpf: true,
      data_de_nascimento: true,
      numero_de_associacao: true,
    },
  });
}
module.exports = {
  countPaciente,
  getPacienteById,
  insertPaciente,
  updatePaciente,
  deletePaciente,
};
