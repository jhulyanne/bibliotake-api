import express from "express";
import cors from "cors"; 
import booksRoutes from "./routes/book.routes.js"
import loanRoutes from "./routes/loan.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://bibliotake.vercel.app', // URL exata do frontend, que é só quem vai poder acessar a API por enquanto
  methods: ['GET'] // Só permite consultas (único método por enquanto) * NO FUTURO: mudar isso para ['GET', 'POST', 'PUT', 'DELETE'] se for necessário
}));

app.use("/books", booksRoutes);
app.use("/loans", loanRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`))