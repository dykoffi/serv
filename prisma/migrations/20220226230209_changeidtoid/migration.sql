/*
  Warnings:

  - The primary key for the `Ordi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Ordi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ordi" DROP CONSTRAINT "Ordi_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_" SERIAL NOT NULL,
ADD CONSTRAINT "Ordi_pkey" PRIMARY KEY ("id_");
