const h = require('../lib/h.js')

module.exports = function Header (caption) {
  return h`
    <div css=${{
      marginBottom: '3em',
      '@media': {
        marginBottom: '5em'
      }
    }}'>
      <h1>estrattonbailey</h1>
      <p class='h4 mt05'>${caption}</p>
    </div>
  `
}
