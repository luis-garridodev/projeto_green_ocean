const prismaclient = require("../services/prismaclient.service");

async function countProfissional() {
  return await prismaclient.profissionais_de_saude.findMany({
    where: { deleted_at: null },
  });
}
async function countProfissionalById({ id }) {
  return await prismaclient.profissionais_de_saude.findFirstOrThrow({
    where: { id },
  });
}

async function insertProfissional({
  nome,
  idade,
  cpf,
  data_de_nascimento,
  tipo_de_identificador,
  especialidade,
}) {
  return await prismaclient.profissionais_de_saude.create({
    nome: nome,
    idade: idade,
    cpf: cpf,
    data_de_nascimento: data_de_nascimento,
    identificador: identificador,
    tipo_de_identificador: tipo_de_identificador,
    especialidade: especialidade,
  });
}
async function updateProfissional({
  id,
  nome,
  idade,
  cpf,
  data_de_nascimento,
  tipo_de_identificador,
  especialidade,
}) {
  return await prismaclient.profissionais_de_saude.update({
    where: { id },
    nome: nome,
    idade: idade,
    cpf: cpf,
    data_de_nascimento: data_de_nascimento,
    identificador: identificador,
    tipo_de_identificador: tipo_de_identificador,
    especialidade: especialidade,
  });
}
async function deleteProfissional({
  id,
  nome,
  idade,
  cpf,
  data_de_nascimento,
  tipo_de_identificador,
  especialidade,
}) {
  return await prismaclient.profissionais_de_saude.update({
    where: { id },
    nome: nome,
    idade: idade,
    cpf: cpf,
    data_de_nascimento: data_de_nascimento,
    identificador: identificador,
    tipo_de_identificador: tipo_de_identificador,
    especialidade: especialidade,
  });
}
module.exports = {
  countProfissional,
  countProfissionalById,
  insertProfissional,
  updateProfissional,
  deleteProfissional,
};
