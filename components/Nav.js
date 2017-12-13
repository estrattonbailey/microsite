const h = require('../lib/h.js')

module.exports = function Nav (props) {
  const hover = {
    '& span': {
      display: 'block',
      position: 'absolute',
      left: 0, right: 0, bottom: '-5px',
      height: '2px',
      backgroundColor: 'currentColor',
      opacity: 0
    },
    '&:hover span': {
      opacity: 1
    }
  }
   return h`
      <nav class='nav mxa f aic jcb' css=${{
        padding: '1em 1.2em',
        maxWidth: '1200px',
        '& li': {
          marginLeft: '2em'
        },
        '@media (min-width: 900px)': {
          padding: '2em 3em'
        }
      }}>
        <h1 class='h5 b'><a href='/' class='rel' css=${hover}>estrattonbailey<span></span></a></h1>
        <ul class='block x f aic jce fa h6 b i caps track'>
          <li><a href='/notes' class='rel' css=${hover}>notes<span></span></a></li>
        </ul>
      </nav>
   `
}
