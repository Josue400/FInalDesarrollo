/*
  Warnings:

  - Added the required column `Fechanacimiento` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Genero` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Fechanacimiento" TEXT NOT NULL,
ADD COLUMN     "Genero" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL;
