const {
  countconsulta,
  getConsultaById,
  insertConsulta,
  updateConsulta,
  deleteConsulta,
} = require("../repositories/consulta.repository");

async function countConsultas(Request, response) {
  try {
    const consultas = await countconsulta();
    return response.status(200).send({ consultas });
  } catch {
    console.log(error);
  }
}
async function insertConsultas(Request, response) {
  const {
    paciente,
    paciente_id,
    profissional_de_saude,
    profissional_id,
    data_hora_consulta,
    data_finalizacao,
    local_consulta,
    url_consulta,
  } = Request.body;

  try {
    const consultas = await insertConsulta({
      paciente,
      paciente_id,
      profissional_de_saude,
      profissional_id,
      data_hora_consulta,
      data_finalizacao,
      local_consulta,
      url_consulta,
    });
    return response.status(200).send(consultas);
  } catch (error) {
    console.log(error);
  }
}
async function updateConsultas(request, response) {
  const { id } = request.params;
  const {
    paciente,
    paciente_id,
    profissional_de_saude,
    profissional_id,
    data_hora_consulta,
    data_finalizacao,
    local_consulta,
    url_consulta,
  } = request.body;

  try {
    const getconsulta = await getConsultaById({ id: parseInt(id) });
    const consultas = await updateConsulta({
      id: getconsulta.id,
      paciente,
      paciente_id,
      profissional_de_saude,
      profissional_id,
      data_hora_consulta,
      data_finalizacao,
      local_consulta,
      url_consulta,
    });
    return response.status(200).send(consultas);
  } catch (error) {
    console.log(error);
  }
}

async function deleteConsultas(request, response) {
  const { id } = request.params;

  try {
    const getconsulta = await getConsultaById({ id: parseInt(id) });
    const consultas = await deleteConsulta({
      id: getconsulta.id,
      paciente,
      paciente_id,
      profissional_de_saude,
      profissional_id,
      data_hora_consulta,
      data_finalizacao,
      local_consulta,
      url_consulta,
    });
    return response.status(200).send(consultas);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  countConsultas,
  insertConsultas,
  updateConsultas,
  deleteConsultas,
};
