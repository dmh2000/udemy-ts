import { Router, Request, Response } from "express";
import { loginGet, loginPost } from "./login";
const router = Router();

// LOGIN
router.get("/login", loginGet);
router.post("/login", loginPost);

export { router };
