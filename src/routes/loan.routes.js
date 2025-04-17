import { Router } from "express";
import { getAllLoans, getLoansByName } from "../controller/Loan.controller.js";

const loans = Router();

loans.get("/", getAllLoans);
loans.get("/:name", getLoansByName);

export default loans;