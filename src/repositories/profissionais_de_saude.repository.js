import { prismaclient } from "../services/prismaclient.service";

export async function countProfissional(){
return await prismaclient.profissionais_de_saude.findMany({ where: { deleted_at: null }})
}
export async function countProfissionalById({id}){
    return await prismaclient.profissionais_de_saude.findFirstOrThrow({
        where: { id }
    })
}

export async function insertProfissional({nome,idade,cpf,data_de_nascimento,tipo_de_identificador,especialidade}){
    return await prismaclient.profissionais_de_saude.create({
        nome:nome,                  
        idade:idade,                 
        cpf:cpf,               
        data_de_nascimento:data_de_nascimento,    
        identificador:identificador,         
        tipo_de_identificador:tipo_de_identificador, 
        especialidade:especialidade     
    })
}
export async function updateProfissional({id,nome,idade,cpf,data_de_nascimento,tipo_de_identificador,especialidade}){
    return await prismaclient.profissionais_de_saude.update({
        where:{id},
        nome:nome,                  
        idade:idade,                 
        cpf:cpf,               
        data_de_nascimento:data_de_nascimento,    
        identificador:identificador,         
        tipo_de_identificador:tipo_de_identificador, 
        especialidade:especialidade     
    })
}
export async function deleteProfissional({id,nome,idade,cpf,data_de_nascimento,tipo_de_identificador,especialidade}){
    return await prismaclient.profissionais_de_saude.update({
        where:{id},
        nome:nome,                  
        idade:idade,                 
        cpf:cpf,               
        data_de_nascimento:data_de_nascimento,    
        identificador:identificador,         
        tipo_de_identificador:tipo_de_identificador, 
        especialidade:especialidade     
    })
}