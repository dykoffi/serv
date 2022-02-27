-- CreateTable
CREATE TABLE "Maison" (
    "id_" SERIAL NOT NULL,
    "local" TEXT NOT NULL,
    "stateId_" INTEGER NOT NULL,

    CONSTRAINT "Maison_pkey" PRIMARY KEY ("id_")
);

-- CreateTable
CREATE TABLE "State" (
    "id_" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id_")
);

-- AddForeignKey
ALTER TABLE "Maison" ADD CONSTRAINT "Maison_stateId__fkey" FOREIGN KEY ("stateId_") REFERENCES "State"("id_") ON DELETE RESTRICT ON UPDATE CASCADE;
