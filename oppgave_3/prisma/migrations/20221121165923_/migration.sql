/*
  Warnings:

  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Day" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "weekId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    CONSTRAINT "Day_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Day_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Day" ("employeeId", "id", "name", "weekId") SELECT "employeeId", "id", "name", "weekId" FROM "Day";
DROP TABLE "Day";
ALTER TABLE "new_Day" RENAME TO "Day";
CREATE TABLE "new_Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "rules" TEXT NOT NULL
);
INSERT INTO "new_Employee" ("id", "name", "rules") SELECT "id", "name", "rules" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
