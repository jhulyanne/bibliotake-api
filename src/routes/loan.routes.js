// importado apenas o objeto router do express, e não ele inteiro
import { Router } from "express";
import { getAllLoans, getLoansByName } from "../controller/Loan.controller.js";

const loans = Router();

loans.get("/", getAllLoans);
loans.get("/:name", getLoansByName);

export default loans;