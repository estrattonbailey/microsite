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
      <p class='mt05 mb075'>${caption}</p>

      <div class='f aic'>
        <a href='https://github.com/estrattonbailey' target='_blank' class='f aic b mr1' css=${{
          color: 'var(--c1)',
          textDecoration: 'none',
          '&:focus': {
            outline: '1px dashed currentColor'
          }
        }}>
          <span class='mr05' css=${{ color: 'var(--c0)' }}>↳</span>GitHub
        </a>
        <a href='https://twitter.com/estrattonbailey' target='_blank' class='f aic b' css=${{
          color: 'var(--c1)',
          textDecoration: 'none',
          '&:focus': {
            outline: '1px dashed currentColor'
          }
        }}>
          <span class='mr05' css=${{ color: 'var(--c0)' }}>↳</span>Twitter
        </a>
      </div>
    </div>
  `
}
