const h = require('../lib/h.js')

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
    <section css=${style} ${props}>
      ${children}
    </section>
  `
}
