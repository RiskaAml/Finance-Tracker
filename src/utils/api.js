const BASE_URL = "http://localhost:4000/api/transactions"

export async function getTransactions() {
    const res = await fetch(BASE_URL)
    return res.json()
}

export async function createTransaction(data) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    return res.json()
}

export async function deleteTransactionApi(id) {
    await fetch(`${BASE_URL}`, {method: "DELETE"})
}

export async function updateTransactionApi(id) {
    await getch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
}

