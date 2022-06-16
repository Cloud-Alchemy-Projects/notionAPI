import express from "express";
import {createData, getDatabase} from "../controllers/submit.js"

const router = express.Router()

router.post("/info", createData)
router.get("/info", getDatabase)

export default router;