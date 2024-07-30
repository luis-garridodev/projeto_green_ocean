-- CreateTable
CREATE TABLE "acompanhamento" (
    "id" SERIAL NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "receitas" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "numero_contato" TEXT NOT NULL,
    "numero_parente" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "acompanhamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agenda_de_medicamentos" (
    "id" SERIAL NOT NULL,
    "acompanhamento_id" INTEGER NOT NULL,
    "medicamento_do_dia" TEXT NOT NULL,
    "hora_marcada" TEXT NOT NULL,
    "alarme" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agenda_de_medicamentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "acompanhamento" ADD CONSTRAINT "acompanhamento_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acompanhamento" ADD CONSTRAINT "acompanhamento_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "profissionais_de_saude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda_de_medicamentos" ADD CONSTRAINT "agenda_de_medicamentos_acompanhamento_id_fkey" FOREIGN KEY ("acompanhamento_id") REFERENCES "acompanhamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
