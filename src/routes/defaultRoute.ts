import express from "express";
const router = express.Router();

router.get('/',async (req, res) => {
    res.json({ message: "Hello World" });
})

router.get('/status',async (req, res) => {
    res.json({ status: "on" });
})

export default router;
