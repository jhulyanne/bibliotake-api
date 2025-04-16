// importando os dados mockados
import { books } from "../data/mock.js"

// listar todos os livros 
export function getAllBooks(req, res) {
    res.status(200).json(books)
}

export function getBookById(req, res){
    // extraindo o parâmetro da rota
    const { id } = req.params

    // o find pega o primeiro objeto do array (books.find()), "entra" nele, pega o id (books.id) e compara com o valor no req.params (id), e vai fazendo isso com os outros objetos até os dois ids serem iguais, e então para e guarda esse objeto em searchedBook
    const bookFound = books.find((book) => book.id === id)

    if(!bookFound){
        return res.status(404).json({ message: "Livro não encontrado" });

        // Validação que talvez faria sentido se o id fosse um número
        // if(id = isNaN) {
        //     // erro 400 : O servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente 
        //     res.status(400).json({ message: "O ID do livro deve ser um número" })
        // } else {
        //     // erro 404 : O servidor não pode encontrar o recurso solicitado
        //     res.status(404).json({ message: "Livro não encontrado" })
        // }
    }
    res.status(200).json(bookFound);
}