const h = require('../lib/h.js')

const resume = [
  {
    company: 'The Couch',
    url: 'https://thecouch.nyc/',
    roles: 'Dev',
    dates: 'Aug 2017 - present'
  },
  {
    company: 'Freelance',
    roles: 'React, GraphQL, Node.js, Shopify',
    dates: 'May 2017 - present'
  },
  {
    company: 'Barrel',
    url: 'https://barrelny.com/',
    roles: 'Dev',
    dates: 'Jan 2015 - May 2017'
  },
  {
    company: 'Sculpt',
    url: 'https://wearesculpt.com/',
    roles: 'Design, Social, Photo, Dev',
    dates: 'July 2013 - Dec 2014'
  },
]

module.exports = function Projects () {
  return h`
    <div css=${{
      marginBottom: '3em',
      '@media': {
        marginBottom: '5em'
      }
    }}>
      <h2 class='h6 caps cb track'><em>Résumé</em></h2>

      <ul class='mt1 f fw'>
        ${resume.map(r => h`
          <li class='rel' css=${{
            margin: '0 3em 1em 0',
            '&:hover sup': {
              'opacity': 1
            }
          }}>
            <h4 class='rel' css=${{ color: 'var(--c0)' }}>
              ${r.url && h`
                <sup class='h6 abs left b' css=${{
                  color: 'var(--c1)',
                  top: '8px',
                  transform: 'translateX(-150%)',
                  opacity: 0
                }}>↳</sup>
              `}

              ${r.company}
            </h4>
            <p class='h5 my0'>${r.roles}</p>
            <h6 class='mt05'>${r.dates}</h6>

            ${r.url && h`<a href='${r.url}' target='_blank' class='abs fill z1'></a>`}
          </li>
        `)}
      </ul>
    </div>
  `
}
