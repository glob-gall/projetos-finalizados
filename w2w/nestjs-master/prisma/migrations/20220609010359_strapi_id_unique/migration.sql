/*
  Warnings:

  - A unique constraint covering the columns `[strapiId]` on the table `movies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "movies_strapiId_key" ON "movies"("strapiId");
