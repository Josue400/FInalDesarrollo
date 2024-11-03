/*
  Warnings:

  - You are about to drop the column `Fechanacimiento` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Genero` on the `User` table. All the data in the column will be lost.
  - Added the required column `fecha_actualizacion` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechanacimiento` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Fechanacimiento",
DROP COLUMN "Genero",
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fecha_actualizacion" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechanacimiento" TEXT NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "usuario" TEXT NOT NULL;
