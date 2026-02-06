export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">💰 Personal Finance Tracker</h1>
      <p className="text-gray-600 mt-2">
        Manage your cashflow wisely
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Income</p>
          <p className="text-xl font-semibold text-green-600">Rp 0</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Expense</p>
          <p className="text-xl font-semibold text-red-600">Rp 0</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Balance</p>
          <p className="text-xl font-semibold">Rp 0</p>
        </div>
      </div>
    </div>
  )
}
