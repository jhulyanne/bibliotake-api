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

// TESTADAS - estão OK e funcionando
// books/ - retorna todos os empréstimos do bd
// books/<nome> - retorna todos os empréstimos feito por usuário (parâmetro: nome. então se houver dois usuários com o mesmo primeiro nome, é preciso especificar com o 2°, 3°, ... nome (ex.: Ana Paula e Ana Júlia, vão se diferenciar pelo segundo nome))
app.use("/loans", loanRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`))