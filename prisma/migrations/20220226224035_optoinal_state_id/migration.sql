-- DropForeignKey
ALTER TABLE "Maison" DROP CONSTRAINT "Maison_stateId__fkey";

-- AlterTable
ALTER TABLE "Maison" ALTER COLUMN "stateId_" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Maison" ADD CONSTRAINT "Maison_stateId__fkey" FOREIGN KEY ("stateId_") REFERENCES "State"("id_") ON DELETE SET NULL ON UPDATE CASCADE;
