const h = require('../lib/h.js')
const api = require('../lib/api.js')
const connect = require('../lib/connect.js')
const Outer = require('../components/Outer.js')
const Header = require('../components/Header.js')
const Markdown = require('../components/Markdown.js')
const Footer = require('../components/Footer.js')
const ContentColumn = require('../components/ContentColumn.js')

module.exports = connect(function Home({ note }) {
  return Outer([
    Header(note.title),
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
