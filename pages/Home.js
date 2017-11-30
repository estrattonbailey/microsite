const h = require('hyp')
const App = require('../components/App.js')
const Outer = require('../components/Outer.js')

module.exports = function Home(data) {
  return Outer(
    h`
      <h1 style='${{ color: 'tomato' }}'>${data}</h1>
    `
  )
}
