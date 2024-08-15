-- CreateTable
CREATE TABLE "calendario_paciente" (
    "id" SERIAL NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "emocao" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "calendario_paciente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "calendario_paciente" ADD CONSTRAINT "calendario_paciente_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
