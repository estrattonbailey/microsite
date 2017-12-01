const h = require('bel')
const cx = require('classnames')
const cxs = require('cxs')

module.exports = function Header ({ internets }) {
  return h`
    <div class='${cxs({
      marginBottom: '2em'
    })}'>
      <h2 class='h6 caps'><em>Internets</em></h2>
      <ul class='mt1 f fw'>
        ${internets.map((int, i) => h`
          <li class='${cxs({
            margin: '0 3em 1em 0'
          })}'>
            <h3 class='rel'>
              <sup class='${cx('h6 abs left', cxs({
                top: '8px',
                transform: 'translateX(-200%)'
              }))}'>${i + 1}</sup>
              ${int.title}
            </h3>
            <p class='h6 mt0'>@ The Couch</p>
          </li>
        `)}
      </ul>
    </div>
  `
}
