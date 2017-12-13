const { Router } = require('express')

const router = new Router()

/**
 * Main layout
 */
const Shell = require('./components/Shell.js')

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
    res.send(Shell(markup, css))
  }).catch(err => {
    res.status(500).send('500 error')
    console.log(err)
  })
})
router.get('/notes', (req, res) => {
  Notes('/notes').then(({ markup, css }) => {
    res.send(Shell(markup, css))
  }).catch(err => {
    res.status(500).send('500 error')
    console.log(err)
  })
})
router.get('/notes/:slug', (req, res) => {
  Note(req.params.slug).then(({ markup, css }) => {
    res.send(Shell(markup, css))
  }).catch(err => {
    res.status(500).send('500 error')
    console.log(err)
  })
})

module.exports = router
