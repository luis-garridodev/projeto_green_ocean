-- CreateTable
CREATE TABLE "calendario" (
    "id" SERIAL NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "emocao" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "calendario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "profissionais_de_saude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
