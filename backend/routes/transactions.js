import express from "express";

const router = express.Router();

//fake database (temporary)
let transactions = []

//GET all transactions
router.get("/", (req, res) => {
    res.json(transactions)
})

// POST a new trasaction
router.post("/", (req, res) => {
    const transaction = {
        id: Date.now(),
        title: req.body.title,
        amount: req.body.amount,
        type: req.body.type,
        category: req.body.category,
    }

    transactions.unshift(transaction)
    res.status(201).json(transaction)
})

//UPDATE a transaction by ID
router.put("/:id", (req, res) => {
    const id = Number(req.params.id)

    transactions = transactions.map((t) =>
        t.id == id ? { ...t, ...req.body } : t // ternary operator.
    )

    res.json({ message: "Transaction updated successfully" })
})

//DELETE a transaction
router.delete("/:id", (req, res) => {
    const id  = Number(req.params.id)
    transactions = transactions.filter((t) => t.id !== id)

    res.json({ message: "Transaction deleted" })
})

export default router