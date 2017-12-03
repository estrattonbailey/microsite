const h = require('../lib/h.js')
const md = require('marked')
const hl = require('highlight.js')

md.setOptions({
  highlight: function (code) {
    return hl.highlightAuto(code).value
  }
})

module.exports = function Markdown (content) {
  return h`
    <div class='rte' innerHTML=${md(content)}>
    </div>
  `
}
