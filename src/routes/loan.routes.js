import { Router } from "express";
import { getAllLoans, getLoansByName, getNullReturnDate } from "../controller/Loan.controller.js";

const loans = Router();


loans.get("/", getAllLoans);
loans.get("/pending", getNullReturnDate);
// rotas que capturam req params devem estar por último, já que elas capturam valores "infinitamente"
loans.get("/:name", getLoansByName);

export default loans;