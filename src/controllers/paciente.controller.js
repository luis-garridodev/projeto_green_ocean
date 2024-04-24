const {
  countPaciente,
  getPacienteById,
  insertPaciente,
} = require("../../src/repositories/paciente.repository");
 async function countPacientes(request, response) {
  try {
    const pacientes = await countPaciente();
    return response.status(200).send({ pacientes });
  } catch (error) {
    console.log(error);
  }
}
 async function insertPacientes(request, response) {
  const { nome, idade, cpf, data_de_nascimento, numero_de_associacao } =
    request.body;
  try {
    const pacientescreated = await insertPaciente({
      nome,
      idade,
      cpf,
      data_de_nascimento,
      numero_de_associacao,
    });

    return response.status(200).send(pacientescreated);
  } catch (error) {
    console.log(error);
  }
}

 async function updatePacientes(request, response) {
  const { nome, idade, cpf, data_de_nascimento, numero_de_associacao } =
    request.body;
  const { id } = request.params;
  try {
    const getpaciente = await getPacienteById({ id: parseInt(id) });
    const pacientescupdated = await updatePaciente({
      id: getpaciente.id,
      nome,
      idade,
      cpf,
      data_de_nascimento,
      numero_de_associacao,
    });

    return response.status(200).send(pacientescupdated);
  } catch (error) {
    console.log(error);
  }
}
 async function deletePacientes(request, response) {
  const { id } = request.params;
  try {
    const getpaciente = await getPacienteById({ id: parseInt(id) });
    const pacientedeleted = await deletePaciente({
      id: getpaciente.id,
      nome,
      idade,
      cpf,
      data_de_nascimento,
      numero_de_associacao,
    });

    return response.status(200).send(pacientedeleted);
  } catch (error) {
    console.log(error);
  }
}

module.exports={countPacientes,insertPacientes,updatePacientes,deletePacientes}