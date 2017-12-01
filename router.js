const { Router } = require('express')

const router = new Router()

/**
 * Main layout
 */
const App = require('./components/App.js')

/**
 * Pages
 */
const Home = require('./pages/Home.js')

/**
 * Router
 */
router.get('/', (req, res) => {
  Home('/').then(({ markup, css }) => {
    res.send(App(markup, css))
  })
})

module.exports = router
