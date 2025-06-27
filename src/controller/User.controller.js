import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// 🔹 Listar todos os usuários
export async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    res.status(500).json({ message: 'Erro interno do servidor' })
  }
}

// 🔹 Buscar usuários por endereço (filtro parcial e sem case sensitive)
export async function getUsersByAddress(req, res) {
  const { address } = req.params

  try {
    const usersFound = await prisma.user.findMany({
      where: {
        address: {
          contains: address,
          mode: 'insensitive', // busca sem diferenciar maiúsculas/minúsculas
        },
      },
    })

    if (usersFound.length === 0) {
      return res.status(404).json({
        message: 'Parece que não temos nenhum usuário que mora nesse lugar',
      })
    }

    res.status(200).json(usersFound)
  } catch (error) {
    console.error('Erro ao buscar por endereço:', error)
    res.status(500).json({ message: 'Erro interno do servidor' })
  }
}