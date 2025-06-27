import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
// Limpar dados existentes (opcional)
// Descomente as linhas abaixo se quiser limpar os dados antes de popular

// await prisma.loan.deleteMany()
// await prisma.book.deleteMany()
// await prisma.user.deleteMany()

  // Livros
  const books = await prisma.book.createMany({
    data: [
      {
        title: "Cemitério Maldito",
        author: "Stephen King",
        publisher: "Suma das Letras",
        genre: "Terror",
        available: false, // emprestado
      },
      {
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        publisher: "Companhia das Letras",
        genre: "Fábula política",
        available: true,
      },
      {
        title: "Capitães da Areia",
        author: "Jorge Amado",
        publisher: "Record",
        genre: "Ficção social",
        available: true,
      },
      {
        title: "O Alienista",
        author: "Machado de Assis",
        publisher: "Martin Claret",
        genre: "Clássico brasileiro",
        available: false, // emprestado
      },
      {
        title: "Kindred",
        author: "Octavia E. Butler",
        publisher: "Morro Branco",
        genre: "Ficção científica",
        available: true,
      },
    ],
  })

  // Usuários
  const users = await Promise.all([
    prisma.user.create({
      data: {
        cpf: "12345678900",
        full_name: "Aline Marques",
        phone_number: "11988887777",
        address: "Rua das Flores, 123",
      },
    }),
    prisma.user.create({
      data: {
        cpf: "23456789001",
        full_name: "Carlos Pereira",
        phone_number: "11999996666",
        address: "Avenida Central, 456",
      },
    }),
    prisma.user.create({
      data: {
        cpf: "34567890012",
        full_name: "Bruna Oliveira",
        phone_number: "21988884444",
        address: "Rua das Acácias, 789",
      },
    }),
  ])

  // Obter livros para empréstimos
  const cemiterioMaldito = await prisma.book.findFirst({ where: { title: "Cemitério Maldito" } })
  const alienista = await prisma.book.findFirst({ where: { title: "O Alienista" } })

  // Empréstimos
  await prisma.loan.createMany({
    data: [
      {
        user_cpf: "12345678900",
        book_id: cemiterioMaldito.id,
        loan_date: new Date("2024-06-01"),
        return_date: null, // ainda em aberto
      },
      {
        user_cpf: "23456789001",
        book_id: alienista.id,
        loan_date: new Date("2024-05-15"),
        return_date: new Date("2024-06-01"), // devolvido
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })