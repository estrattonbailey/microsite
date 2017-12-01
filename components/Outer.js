const h = require('bel')
const cxs = require('cxs')
const cx = require('classnames')

module.exports = function Outer (children, ...props) {
  const style = {
    maxWidth: '1200px',
    padding: '4em 1.2em',
    margin: 'auto',
    '@media (min-width: 900px)': {
      padding: '10em 3em'
    }
  }

  return h`
    <section class='${cxs(style)}' ${props}>
      ${children}
    </section>
  `
}
