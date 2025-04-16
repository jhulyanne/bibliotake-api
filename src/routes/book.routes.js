// importado apenas o objeto router do express, e não ele inteiro
import { Router } from "express";
import { getAllBooks, getBookById } from "../controller/Book.controller.js";

const books = Router();

// não precisaos dos () das funções quando estamos passando elas como referência em rotas
books.get("/", getAllBooks)
books.get("/:id", getBookById)

// exportando por padrão, podemos importar com qualquer nome no index.js

export default books;