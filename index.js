import express from "express";
import booksRoutes from "./src/routes/book.routes.js"

const app = express();
const PORT = 3000;

// Pode ser implementado no futuro quando houverem outros tipos de rota
// app.use(json);

app.use("/books", booksRoutes)
 
app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost/${PORT}`))

// http://localhost:3000/books/