import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllBooks(req, res) {
  try {
    const books = await prisma.book.findMany()
    res.json(books)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livros.' })
  }
}

// Buscar livro por ID
export async function getBookById(req, res) {
  const { id } = req.params

  try {
    const book = await prisma.book.findUnique({
      where: {
        id: Number(id), // certifique-se que seja um número
      },
    })

    if (!book) {
      return res.status(404).json({ message: 'Livro não encontrado' })
    }

    return res.status(200).json(book)
  } catch (error) {
    console.error('Erro ao buscar livro por ID:', error)
    return res.status(500).json({ message: 'Erro interno do servidor' })
  }
}

// Listar todos os livros disponíveis
export async function getAvailableBooks(req, res) {
  try {
    const availableBooks = await prisma.book.findMany({
      where: {
        available: true,
      },
    })

    if (availableBooks.length === 0) {
      return res.status(404).json({ message: 'Nenhum livro disponível no momento' })
    }

    return res.status(200).json(availableBooks)
  } catch (error) {
    console.error('Erro ao buscar livros disponíveis:', error)
    return res.status(500).json({ message: 'Erro interno do servidor' })
  }
}