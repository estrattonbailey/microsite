const h = require('../lib/h.js')

module.exports = function Footer () {
  return h`
    <div css=${{}}'>
      <hr css=${{
        margin: '3em 0',
        '@media (min-width: 900px)': {
          margin: '5em 0'
        }
      }} />

      <div class='f aic jce'>
        <a href='https://github.com/estrattonbailey' target='_blank' class='f aic b mr1' css=${{
          color: 'var(--c1)',
          textDecoration: 'none',
          '&:focus, &:hover': {
            outline: '0',
            color: 'var(--c0)'
          }
        }}>
          <span class='mr05' css=${{ color: 'var(--c0)' }}>↳</span>GitHub
        </a>
        <a href='https://twitter.com/estrattonbailey' target='_blank' class='f aic b' css=${{
          color: 'var(--c1)',
          textDecoration: 'none',
          '&:focus, &:hover': {
            outline: '0',
            color: 'var(--c0)'
          }
        }}>
          <span class='mr05' css=${{ color: 'var(--c0)' }}>↳</span>Twitter
        </a>
      </div>
    </div>
  `
}
