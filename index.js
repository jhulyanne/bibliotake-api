import express from "express";

const APP = express();
const PORT = 3000;


// 1 - REQUISIÇÕES DO TIPO POST (create)
// Adicionar novo empéstimo
APP.post("/emprestimos", (req, res) => {

})

// Adicionar novo livro
APP.post("/livros", (req, res) => {

})

// Adicionar novo leitor
APP.post("leitores", (req, res) => {

})

// --------------------------------------------

// 2 - REQUISIÇÕES DO TIPO GET (read)
// Retornar os empréstimos cadastrados
APP.get("/emprestimos", (req, res) => {
    res.status(200).json({
        emprestimoId: 1,
        livroId: 3,
        leitorId: 7
    })
})

// Retornar todos os livros do banco de dados da ong/livraria
APP.get("/livros", (req, res) => {

})

// Retornar todos os leitores cadastrados
APP.get("/leitores", (req, res) => {

})

// Retornar dados específios através de parâmetros de rota
APP.get("/emprestimos/:id", (req, res) => {

})

APP.get("/livros/:id", (req, res) => {

})

APP.get("/leitores/:id", (req, res) => {

})


// OBS: não tem poblema se os endoints forem iguais nesse caso porque o express diferencia pelo método http
// --------------------------------------------

// 3 - REQUISIÇÕES DO TIPO PUT (update)
// Editar informações de empréstimos 
APP.put("/emprestimo/:id", (req, res) => {

})

// Editar informações de livros
APP.put("/livros/:id", (req, res) => {

})

// Editar informações de leitores
APP.put("leitor/:id", (req, re) => {

})

// --------------------------------------------

// 4 - REQUISIÇÕES DO TIPO DELETE (delete)
// Excluir informações de empréstimos 
APP.delete("/excluir/empréstimo", (req, res) => {

})

// Excluir informações de livros
APP.delete("/excluir/livros", (req, res) => {

})

// Excluir informações de leitores
APP.delete("/excluir/leitor", (req, re) => {

})

APP.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost/${PORT}`))