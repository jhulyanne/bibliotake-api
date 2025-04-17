import { users } from "../data/mock.js"

export function getAllUsers(req, res) {
    res.status(200).json(users);
}

export function getUsersByAddress(req, res) {
    const { address } = req.params;

    // verifica se o valor no endereço de cada usuário, há correspondência com o req params
    const usersFound = users.filter((user) => user.address.toLowerCase().includes(address.toLowerCase()));

    if(!usersFound){
        res.status(404).json( {message: "Parece que não temos nenhum usuário que mora nesse lugar"});
    }

    res.status(200).json(usersFound);
}

// const busca = "ana";
// const resultado = loans.filter(loan =>
//   loan.user_name.toLowerCase().includes(busca.toLowerCase())
// );
