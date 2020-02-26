const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => res.json({DataFromConfigMap:process.env.CM, DatafromSecret: process.env.SCR}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
