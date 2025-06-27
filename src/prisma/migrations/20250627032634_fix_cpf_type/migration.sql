-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_user_cpf_fkey";

-- AlterTable
ALTER TABLE "Loan" ALTER COLUMN "user_cpf" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "cpf" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_user_cpf_fkey" FOREIGN KEY ("user_cpf") REFERENCES "User"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
