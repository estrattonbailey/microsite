const h = require('../lib/h.js')
const { differenceInDays } = require('date-fns')

module.exports = function Notes ({ notes }) {
  return h`
    <div>
      <ul class='mt1 f fw x'>
        ${notes.sort((a, b) => a.date < b.date).map(note => h`
          <li class='rel block x' css=${{
            margin: '0 3em 2em 0',
            '&:hover sup': {
              'opacity': 1
            }
          }}>
            <h3 class='rel mb0'>
              <sup class='h6 abs left b' css=${{
                color: 'var(--c1)',
                top: '8px',
                transform: 'translateX(-150%)',
                opacity: 0
              }}>↳</sup>

              ${note.title}
            </h3>

            <p class='h5 my075'>${note.teaser}</p>
            <p class='h6 mt025'>${differenceInDays(new Date(), new Date(note.date))} days ago</p>

            <a href='/notes/${note.slug}' class='abs fill z1'></a>
          </li>
        `)}
      </ul>
    </div>
  `
}
