const h = require('bel')
const cxs = require('cxs')

module.exports = function Header (caption) {
  return h`
    <div class='${cxs({
      marginBottom: '2em'
    })}'>
      <h1>estrattonbailey</h1>
      <p>${caption}</p>
    </div>
  `
}
