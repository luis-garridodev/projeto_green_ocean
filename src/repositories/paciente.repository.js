import { prismaclient } from "../services/prismaclient.service";

export async function countPaciente() {
  return await prismaclient.paciente.findMany({ where: { deleted_at: null } });
}
export async function getPacienteById({ id }) {
  return await prismaclient.paciente.findFirstOrThrow({
    where: { id },
  });
}
export async function insertPaciente({
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
export async function updatePaciente({
  id,
  nome,
  idade,
  cpf,
  data_de_nascimento,
  numero_de_associacao,
}) {
  return await prismaclient.paciente.update({
    id: id,
    nome: nome,
    idade: idade,
    cpf: cpf,
    data_de_nascimento: data_de_nascimento,
    numero_de_associacao: numero_de_associacao,
  });
}
export async function deletePaciente({ id }) {
  return await prismaclient.paciente.update({
    where: { id },
    data: { deleted_at: new Date().toISOString() },
    nome: true,
    idade: true,
    cpf: true,
    data_de_nascimento: true,
    numero_de_associacao: true,
  });
}
