import { useState, useEffect } from "react"
import TransactionForm from "../components/TransactionForm"
import TransactionList from "../components/TransactionList"
import { formatRupiah } from "../utils/format"
import ExpenseChart from "../components/ExpenseChart"
import {
  getTransactions,
  createTransaction,
  deleteTransactionApi,
  updateTransactionApi,
} from "../utils/api"

export default function Dashboard() {
  const [transactions, setTransactions] = useState([])
  const [editingId, setEditingId] = useState(null)


  //Ganti useEffect load data (pakai api)
  useEffect(() => {
    async function load() {
      const data = await getTransactions()
      setTransactions(data)
    }
    load()
  }, [])


  async function addTransaction(transaction) {
    const created = await createTransaction(transaction)
    setTransactions((prev) => [created, ...prev])
  }

  // Menghapus transaksi
  async function deleteTransaction(id) {
    await deleteTransactionApi(id)
    setTransactions((prev) => 
      prev.filter((t) => t.id != id)
    )
  }

  async function updateTransaction(updated) {
  await updateTransactionApi(updated.id, updated)
  setTransactions((prev) =>
    prev.map((t) => (t.id === updated.id ? updated : t))
  )
  setEditingId(null)
}

const editingTransaction =
  transactions.find((t) => t.id === editingId) || null


  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = income - expense

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">💰 Personal Finance Tracker</h1>
      <p className="text-gray-600 mt-2">
        Manage your cashflow wisely
      </p>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Income</p>
          <p className="text-xl font-semibold text-green-600">
            {formatRupiah(income)}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Expense</p>
          <p className="text-xl font-semibold text-red-600">
            {formatRupiah(expense)}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Balance</p>
          <p className="text-xl font-semibold">
            {formatRupiah(balance)}
          </p>
        </div>
      </div>

      {/* Form dan list*/}
      <TransactionForm
  onAdd={addTransaction}
  onUpdate={updateTransaction}
  editing={editingTransaction}
/>

      <TransactionList
  transactions={transactions}
  onDelete={deleteTransaction}
  onEdit={setEditingId}
/>

      <ExpenseChart transactions={transactions} />

    </div>
  )
}
