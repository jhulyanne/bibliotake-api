import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// 🔹 Listar todos os empréstimos
export async function getAllLoans(req, res) {
  try {
    const loans = await prisma.loan.findMany()
    res.status(200).json(loans)
  } catch (error) {
    console.error('Erro ao buscar empréstimos:', error)
    res.status(500).json({ message: 'Erro interno do servidor' })
  }
}

// 🔹 Listar empréstimos por nome do usuário
export async function getLoansByName(req, res) {
  const { name } = req.params

  try {
    const loans = await prisma.loan.findMany({
      where: {
        user: {
          full_name: name,
        },
      },
      include: {
        user: true,
        book: true,
      },
    })

    if (loans.length === 0) {
      return res.status(404).json({
        message: "Hmm... parece que esse usuário não existe ou nunca fez um empréstimo",
      })
    }

    res.status(200).json(loans)
  } catch (error) {
    console.error('Erro ao buscar empréstimos por nome:', error)
    res.status(500).json({ message: 'Erro interno do servidor' })
  }
}

// 🔹 Listar empréstimos com devolução pendente (return_date === null)
export async function getNullReturnDate(req, res) {
  try {
    const pendingLoans = await prisma.loan.findMany({
      where: {
        return_date: null,
      },
      include: {
        user: true,
        book: true,
      },
    })

    if (pendingLoans.length === 0) {
      return res.status(404).json({
        message:
          'Todos os livros foram devolvidos. Nenhum empréstimo pendente no momento.',
        data: [],
      })
    }

    res.status(200).json({
      message: 'Empréstimos de livros que ainda não foram devolvidos:',
      data: pendingLoans,
    })
  } catch (error) {
    console.error('Erro ao buscar empréstimos pendentes:', error)
    res.status(500).json({ message: 'Erro interno do servidor' })
  }
}