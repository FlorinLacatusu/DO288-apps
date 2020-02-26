const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => res.send('Data from ConfigMap:'+ process.env.CM + ', '+'Data from Secret:'+ process.env.SCR ))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
