-- CreateTable
CREATE TABLE "profissionais_de_saude" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_de_nascimento" TEXT NOT NULL,
    "identificador" TEXT NOT NULL,
    "tipo_de_identificador" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profissionais_de_saude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_de_nascimento" TEXT NOT NULL,
    "numero_de_associacao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta" (
    "id" SERIAL NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "data_hora_consulta" TIMESTAMP(3),
    "data_finalizacao" TIMESTAMP(3),
    "local_consulta" TEXT NOT NULL,
    "url_consulta" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "consulta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "profissionais_de_saude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
