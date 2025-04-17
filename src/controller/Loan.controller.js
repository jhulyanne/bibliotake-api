import { loans } from "../data/mock.js"

// listar todos os empréstimos 
export function getAllLoans (req, res) {
    res.status(200).json(loans)
}

// listar empréstimos por nome
export function getLoanByName (req, res) {

    // extraindo o parâmetro da rota
    const { name } = req.params;

    const loanFound = loans.find((loan) => loan.user_name = name)

    if(!loanFound) {
        res.status(404).json( {message: "Hmm... parece que esse usuário não existe ou nunca fez um empréstimo"})
    }

    res.status(200).json(loanFound);
}