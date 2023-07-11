import express from "express"
const app = express()

app.use(express.json())

app.listen(3030, () => console.log('server started'))

app.get('/', (req, res) => {
  return res.json({hello: "world"})
})
