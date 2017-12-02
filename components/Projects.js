const h = require('../lib/h.js')

module.exports = function Projects ({ projects }) {
  return h`
    <div css=${{
      marginBottom: '3em',
      '@media': {
        marginBottom: '5em'
      }
    }}>
      <h2 class='h6 caps track pb1'><em>Projects</em></h2>

      <ul class='mt1 f fw'>
        ${projects.map((int, i) => h`
          <li class='rel' css=${{
            margin: '0 3em 1em 0',
            '&:hover sup': {
              'opacity': 1
            }
          }}>
            <h4 class='rel' css=${{ color: 'var(--c1)' }}>
              <sup class='h6 abs left b' css=${{
                color: 'var(--c1)',
                top: '8px',
                transform: 'translateX(-150%)',
                opacity: 0
              }}>↳</sup>

              ${int.title}
            </h4>
            <p class='h6 mt0'>${int.caption}</p>

            <a href='${int.url}' target='_blank' class='abs fill z1'></a>
          </li>
        `)}
      </ul>
    </div>
  `
}
