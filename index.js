const express = require('express')

const app = express()
const router = require('./router.js')

app.use(express.static('public'))
app.use(router)

app.listen(8080, () => console.log('Listening on port 8080'))
