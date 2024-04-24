const {
  countProfissional,
  countProfissionalById,
  insertProfissional,
  updateProfissional,
  deleteProfissional,
} = require("../repositories/profissionais_de_saude.repository");

 async function countProfissionals(Request, Response) {
  try {
    const profissionais = await countProfissional();
    return Response.status(200).send({ profissionais });
  } catch {
    console.log(error);
  }
}
 async function insertProfissionals(Request, Response) {
  const {
    nome,
    idade,
    cpf,
    data_de_nascimento,
    tipo_de_identificador,
    especialidade,
  } = request.body;
  try {
    const profissionais = await insertProfissional({
      nome,
      idade,
      cpf,
      data_de_nascimento,
      tipo_de_identificador,
      especialidade,
    });
    return Response.status(200).send(profissionais);
  } catch (error) {
    console.log(error);
  }
}
 async function updateProfissionals(Request, Response) {
  const { id } = Request.params;
  const {
    nome,
    idade,
    cpf,
    data_de_nascimento,
    tipo_de_identificador,
    especialidade,
  } = Request.body;
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
    return Response.status(200).send(profissionais);
  } catch (error) {
    console.log(error);
  }
}
 async function deleteProfissionals(Request, Response) {
  const { id } = Request.params;
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

    return Response.status(200).send(profissionaledeleted);
  } catch (error) {
    console.log(error);
  }
}

module.exports={ countProfissionals,insertProfissionals,updateProfissionals,deleteProfissionals}
