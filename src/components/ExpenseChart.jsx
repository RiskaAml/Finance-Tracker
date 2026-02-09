import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

export default function ExpenseChart({ transactions }) {
  const expenseData = transactions
    .filter((t) => t.type === "expense")
    .map((t) => ({
      name: t.title,
      value: t.amount,
    }))

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
            <Cell key={index} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}
