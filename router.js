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
const Notes = require('./pages/Notes.js')
const Note = require('./pages/Note.js')

/**
 * Router
 */
router.get('/', (req, res) => {
  Home('/').then(({ markup, css }) => {
    res.send(App(markup, css))
  })
})
router.get('/notes', (req, res) => {
  Notes('/notes').then(({ markup, css }) => {
    res.send(App(markup, css))
  })
})
router.get('/notes/:slug', (req, res) => {
  Note(req.params.slug).then(({ markup, css }) => {
    res.send(App(markup, css))
  })
})

module.exports = router
