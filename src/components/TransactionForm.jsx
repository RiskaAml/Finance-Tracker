import { useState, useEffect } from "react"

export default function TransactionForm({ onAdd, onUpdate, editing }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("income")
  const [category, setCategory] = useState("general")
  useEffect(() => {
  if (editing) {
    setTitle(editing.title)
    setAmount(editing.amount)
    setType(editing.type)
    setCategory(editing.category || "general")
  }
}, [editing])


  function handleSubmit(e) {
  e.preventDefault()

  if (!title.trim()) return
  if (!amount || Number(amount) <= 0) return

  const payload = {
    id: editing ? editing.id : Date.now(),
    title,
    amount: Number(amount),
    type,
    category,
  }

  if (editing) {
    onUpdate(payload)
  } else {
    onAdd(payload)
  }

  setTitle("")
  setAmount("")
  setCategory("general")
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

      <select
  className="w-full border p-2 rounded mb-3"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="general">General</option>
  <option value="food">Food</option>
  <option value="transport">Transport</option>
  <option value="shopping">Shopping</option>
</select>


      <button className="w-full bg-black text-white py-2 rounded">
  {editing ? "Update" : "Add"}
</button>

    </form>
  )
}
