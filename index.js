const express = require('express')

const app = express()
const router = require('./router.js')

app.use(express.static('public'))
app.use(router)

app.get('/dump', (req, res) => {
  require('./lib/cache.js').clear()
  res.status(200).send('Success!')
})

app.listen(8080, () => console.log('Listening on port 8080'))
