// importado apenas o objeto router do express, e não ele inteiro
import { Router } from "express";
import { getAllLoans, getLoanByName } from "../controller/Loan.controller.js";

const loans = Router();

loans.get("/", getAllLoans);
loans.get("/:name");

export default loans;