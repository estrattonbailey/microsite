const h = require('hyperx')
const dom = require('hyperscript')
const cxs = require('cxs')

module.exports = h(function (tag, props, children) {
  if (props.css && typeof props.css === 'object') {
    props.className = [props.className || '', cxs(props.css)].join(' ')
  }

  return dom(tag, props, children)
})

