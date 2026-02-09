import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

export default function ExpenseChart({ transactions }) {
  const expenseData = Object.values(
  transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      if (!acc[t.category]) {
        acc[t.category] = { name: t.category, value: 0 }
      }
      acc[t.category].value += t.amount
      return acc
    }, {})
    
)
const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b"]



  if (expenseData.length === 0) return null

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="font-semibold mb-4">Expense Chart</h2>

      <PieChart width={300} height={300}>
        <Pie
          data={expenseData}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
        >
          {expenseData.map((_, index) => (
  <Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}
