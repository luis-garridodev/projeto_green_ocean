const {
  countProfissional,
  countProfissionalById,
  insertProfissional,
  updateProfissional,
  deleteProfissional,
} = require("../repositories/profissionais_de_saude.repository");

async function countProfissionals(request, response) {
  try {
    const profissionais = await countProfissional();
    return response.status(200).send({ profissionais });
  } catch {
    return response.status(400).send(error);
  }
}
async function insertProfissionals(request, response) {
  const {
    cpf,
    nome,
    idade,
    data_de_nascimento,
    identificador,
    tipo_de_identificador,
    especialidade,
  } = request.body;
  console.log(request.body)
  try {
    const profissionais = await insertProfissional({
      nome,
      idade,
      cpf,
      data_de_nascimento,
      identificador,
      tipo_de_identificador,
      especialidade,
    });
    console.log(request.body)
    return response.status(200).send(profissionais);
  } catch (error) {
    return response.status(400).send(error);
  }
}
async function updateProfissionals(request, response) {
  const { id } = request.params;
  const {
    nome,
    idade,
    cpf,
    data_de_nascimento,
    tipo_de_identificador,
    especialidade,
  } = request.body;
  try {
    const getpaciente = await countProfissionalById({ id: parseInt(id) });
    const profissionais = await updateProfissional({
      id: getpaciente.id,
      nome,
      idade,
      cpf,
      data_de_nascimento,
      tipo_de_identificador,
      especialidade,
    });
    return response.status(200).send(profissionais);
  } catch (error) {
    return response.status(400).send(error);
  }
}
async function deleteProfissionals(request, response) {
  const { id } = request.params;
  try {
    const getprofissional = await countProfissionalById({ id: parseInt(id) });
    const profissionaledeleted = await deleteProfissional({
      id: getprofissional.id,
      nome,
      idade,
      cpf,
      data_de_nascimento,
      numero_de_associacao,
    });

    return response.status(200).send(profissionaledeleted);
  } catch (error) {
    return response.status(400).send(error);
  }
}

module.exports = {
  countProfissionals,
  insertProfissionals,
  updateProfissionals,
  deleteProfissionals,
};
