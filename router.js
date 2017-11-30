const cxs = require('cxs')
const { Router } = require('express')

const router = new Router()

function connect (fetcher) {
  const pending = fetcher() // acts as a cache

  return component => {
    return pending.then(data => {
      const markup = component(data).toString()
      const css = cxs.css()

      cxs.reset()

      return {
        markup,
        css
      }
    })
  }
}

/**
 * Main layout
 */
const App = require('./components/App.js')

/**
 * Pages
 */
const Home = connect(() => {
  return new Promise((resolve, reject) => {
    resolve('Hello world!')
  })
})(require('./pages/Home.js'))
const About = connect(() => {
  return new Promise((resolve, reject) => {
    resolve('About this project:')
  })
})(require('./pages/Home.js'))

/**
 * Router
 */
router.get('/', (req, res) => {
  Home.then(({ markup, css }) => {
    res.send(App(markup, css))
  })
})
router.get('/about', (req, res) => {
  About.then(({ markup, css }) => {
    res.send(App(markup, css))
  })
})

module.exports = router
