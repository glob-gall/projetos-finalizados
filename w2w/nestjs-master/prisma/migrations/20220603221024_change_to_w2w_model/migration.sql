/*
  Warnings:

  - You are about to drop the `bookmarks` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "from" TEXT,
ADD COLUMN     "username" TEXT;

-- DropTable
DROP TABLE "bookmarks";

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "strapiId" INTEGER NOT NULL,
    "rate" INTEGER,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToUser_AB_unique" ON "_MovieToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToUser_B_index" ON "_MovieToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "_MovieToUser" ADD CONSTRAINT "_MovieToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToUser" ADD CONSTRAINT "_MovieToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
