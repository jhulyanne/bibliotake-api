import express from "express";
import booksRoutes from "./src/routes/book.routes.js"
import loanRoutes from "./src/routes/loan.routes.js"

const app = express();
const PORT = 3000;

// ↓ Pode ser implementado no futuro quando houverem outros tipos de rota
// app.use(json);


// Usando as rotas

// TESTADAS - estão OK e funcionando
// books/ - retorna todos os livros do bd
// books/<id> - retorna livro de id espeífico
app.use("/books", booksRoutes);

// NULL - ainda não testadas
// books/ - retorna todos os empréstimos do bd
// books/<nome> - retorna empréstimo feito por usuário espeífico
app.use("/loans", loanRoutes);

 
app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost/${PORT}`))