import { Router } from "express";
import { getAllUsers, getUsersByAddress } from "../controller/User.controller.js";

const users = Router();

users.get("/", getAllUsers);
users.get("/:address", getUsersByAddress);

export default users;