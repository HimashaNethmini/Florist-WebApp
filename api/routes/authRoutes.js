import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

//post requests (create ) for register, login and logout under user 
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;