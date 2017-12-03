const h = require('../lib/h.js')

module.exports = function Header (title, subtitle) {
  return h`
    <div css=${{
      marginBottom: '3em',
      '@media (min-width: 900px)': {
        marginBottom: '5em'
      }
    }}'>
      <h1>${title}</h1>
      ${subtitle && h`<p class='h4'>${subtitle}</p>`}

      <hr css=${{
        marginTop: '2em',
        '@media (min-width: 900px)': {
          marginTop: '3em'
        }
      }} />
    </div>
  `
}
