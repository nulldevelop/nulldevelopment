/*
  Warnings:

  - You are about to drop the column `companyId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `companies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_companyId_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "companyId";

-- DropTable
DROP TABLE "companies";

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "city" TEXT,
    "industry" TEXT,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
