import express from "express"
import { router } from "./routes"
const app = express()

app.use(router)
app.use(express.json())

app.listen(3030, () => console.log('server started'))
