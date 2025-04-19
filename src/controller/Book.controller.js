// importando os dados mockados
import { books } from "../data/mock.js"

// listar todos os livros 
export function getAllBooks(req, res) {
    res.status(200).json(books)
}

// listar o primeiro livro que corresponder com o valor do parâmetro da rota
export function getBookById(req, res){
    // extraindo o parâmetro da rota
    const { id } = req.params

    // o find pega o primeiro objeto do array (books.find()), "entra" nele, pega o id (books.id) e compara com o valor no req.params (id), e vai fazendo isso com os outros objetos até os dois ids serem iguais, e então para e guarda esse objeto em searchedBook
    // usando (book) entre parênteses é opcional quando só há um parâmetro
    const bookFound = books.find((book) => book.id === id)

    if(!bookFound){
        return res.status(404).json({ message: "Livro não encontrado" });
    }
    
    res.status(200).json(bookFound);
}

// NÃO PRONTA - Retorna todos os livros disponíveis para empréstimo
// function getAvailableBooks() {
//     return books.filter(book => book.available);
//   }

