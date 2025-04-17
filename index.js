import express from "express";
import booksRoutes from "./src/routes/book.routes.js"
import loanRoutes from "./src/routes/loan.routes.js"
import userRoutes from "./src/routes/user.routes.js"

const app = express();
const PORT = 3000;

// ↓ Pode ser implementado no futuro quando houverem outros tipos de rota
// app.use(json);

// TESTADAS - estão OK e funcionando
// books/ - retorna todos os livros do bd
// books/<id> - retorna livro de id espeífico
app.use("/books", booksRoutes);

// TESTADAS - estão OK e funcionando
// loans/ - retorna todos os empréstimos do bd
// loans/<nome> - retorna todos os empréstimos feito por usuário (parâmetro: nome exato - depende de maiúsculas e espaços)
app.use("/loans", loanRoutes);

// TESTADAS - estão OK e funcionando
// users/ - retorna todos os usuários do bd
// users/<elemento> - retorna todos os empréstimos feito por usuário (parâmetro: elemento do endereço, seja cidade, estado - independe de maiúsculas, depende de espaços)
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`))