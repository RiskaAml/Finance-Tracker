import { formatRupiah } from "../utils/format"
export default function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <p className="text-gray-500 mt-6">
        Belum ada transaksi.
      </p>
      
    )
  }

  return (
    <ul className="mt-6 space-y-2">
      {transactions.map((t) => (
        <li
          key={t.id}
          className="bg-white p-3 rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{t.title}</p>
            <p className="text-xs text-gray-400 capitalize">
  {t.category}
</p>
            <p
              className={
                t.type === "income"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {formatRupiah(t.amount)}
            </p>
          </div>

          <button
            onClick={() => onDelete(t.id)}
            className="text-sm text-red-500 hover:underline"
          >
            Hapus
          </button>
        </li>
      ))}
    </ul>
  )
}
