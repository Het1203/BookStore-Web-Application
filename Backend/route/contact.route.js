import express from "express";
import { addContact } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/", addContact);

export default router;