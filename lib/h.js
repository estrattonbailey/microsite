const hyperx = require('hyperx')
const vdom = require('hyperscript')
const cx = require('classnames')
const cxs = require('cxs')

module.exports = hyperx((tag, props, children) => {
  if (props.css && typeof props.css === 'object') {
    props.className = cx(props.className, cxs(props.css))
  }

  return vdom(tag, props, children)
})
