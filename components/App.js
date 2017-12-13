const h = require('../lib/h.js')
const Nav = require('../components/Nav.js')
const Outer = require('../components/Outer.js')

module.exports = function App (children) {
  return h`<div>
    ${Nav()}
    ${Outer(children)}
  </div>`
}
