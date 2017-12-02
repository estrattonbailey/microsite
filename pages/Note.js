const api = require('../lib/api.js')
const connect = require('../lib/connect.js')
const Outer = require('../components/Outer.js')
const Header = require('../components/Header.js')
const Notes = require('../components/Notes.js')

module.exports = connect(function Home({ note }) {
  return Outer([
    Header('notes', note.title)
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
