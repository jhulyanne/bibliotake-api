import { loans } from "../data/mock.js"

// listar todos os empréstimos 
export function getAllLoans (req, res) {
    res.status(200).json(loans)
}

// listar empréstimos por nome 
export function getLoansByName (req, res) {

    // extraindo o parâmetro da rota
    const { name } = req.params;

    // o filter cria um novo array com todos os objetos que concordarem com a condição
    const loanFound = loans.filter((loan) => loan.user_name === name)

    if(!loanFound) {
        res.status(404).json( {message: "Hmm... parece que esse usuário não existe ou nunca fez um empréstimo"})
    }

    res.status(200).json(loanFound);
}


// const loanFound = loans.filter((loan) => loan.user_name === name)
