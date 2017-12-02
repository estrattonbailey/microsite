const h = require('../lib/h.js')

module.exports = function Header ({ internets }) {
  return h`
    <div css=${{
      marginBottom: '3em',
      '@media': {
        marginBottom: '5em'
      }
    }}>
      <h2 class='h6 caps track pb1'><em>Internets</em></h2>

      <ul class='mt1 f fw'>
        ${internets.map((int, i) => h`
          <li class='rel' css=${{
            margin: '0 3em 1em 0',
            '&:hover sup': {
              'opacity': 1
            }
          }}>
            <h3 class='rel mb025'>
              <sup class='h6 abs left b' css=${{
                color: 'var(--c1)',
                top: '8px',
                transform: 'translateX(-150%)',
                opacity: 0
              }}>↳</sup>

              ${int.title}
            </h3>

            <p class='h6 mt0 f aic' css=${{ marginTop: '-3px' }}>
              <span css=${{ color: 'var(--c1)' }}>@ ${int.company}</span>
              <span class='mx05'>-</span>
              <span class='i'>${int.launchDate}</span>
            </p>

            <a href='${int.url}' target='_blank' class='abs fill z1'></a>
          </li>
        `)}
      </ul>
    </div>
  `
}
