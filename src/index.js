import express from "express";
import booksRoutes from "./routes/book.routes.js"
import loanRoutes from "./routes/loan.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/books", booksRoutes);
app.use("/loans", loanRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`))