import { useState } from "react"

export default function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("income")

  function handleSubmit(e) {
    e.preventDefault()

    if (!title || !amount) return

    onAdd({
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
    })

    setTitle("")
    setAmount("")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="font-semibold mb-3">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full border p-2 rounded mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded mb-3"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className="w-full bg-black text-white py-2 rounded">
        Add
      </button>
    </form>
  )
}
