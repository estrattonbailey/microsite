const h = require('../lib/h.js')

module.exports = function ContentColumn (children) {
  return h`
    <div css=${{
      maxWidth: '800px',
    }}>
      ${children}
    </div>
  `
}
