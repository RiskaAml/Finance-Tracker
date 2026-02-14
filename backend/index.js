import transactionsRoutes from "./routes/transactions.js"
import express from "express" // a framework for building web applications in Node.js
import cors from  "cors" // a middleware that allows cross-origin requests, enabling communication between the frontend and backend when they are hosted on different domains or ports

const app = express() // app is now your backend
const PORT = 4000 // this is whare you r backend will live ==> http://localhost:4000. anyway you can change the port number if you want, but make sure to update it in your frontend as well when making API calls to the backend.

app.use(cors())
app.use(express.json())
app.use("/api/transactions", transactionsRoutes)

app.get("/", (req, res) => {
    res.send("Backend is running")
})

// ini yang ditampilin di terminal kalo backendnya jalan.
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})