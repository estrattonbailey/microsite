const h = require('../lib/h.js')
const api = require('../lib/api.js')
const connect = require('../lib/connect.js')
const App = require('../components/App.js')
const Header = require('../components/Header.js')
const Markdown = require('../components/Markdown.js')
const Footer = require('../components/Footer.js')
const ContentColumn = require('../components/ContentColumn.js')
const { differenceInDays } = require('date-fns')

module.exports = connect(function Home({ note }) {
  return App([
    Header(note.title, `Published ${differenceInDays(new Date(), new Date(note.date))} days ago`),
    h`
      <article>
        ${Markdown(note.body)}
      </article>
    `,
    Footer()
  ])
}, function (slug) {
  const notes = api.getEntries({
    content_type: 'note',
    'fields.slug': slug
  }).then(({ items }) => ({
    note: items[0].fields
  }))

  return notes
})
