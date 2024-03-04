-- CreateTable
CREATE TABLE "recommendations" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "spice_level" INTEGER NOT NULL,
    "uniqueness_level" INTEGER NOT NULL,
    "curiosity_level" INTEGER NOT NULL,

    CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id")
);
