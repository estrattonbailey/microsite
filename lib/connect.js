const cxs = require('cxs')

const cache = new Map()

module.exports = function connect (component, fetcher) {
  return props => {
    let pending = cache.get(props)

    if (!pending) {
      cache.set(props, fetcher(props))
      pending = cache.get(props)
    }

    return pending.then(data => {
      const markup = component(data).outerHTML
      const css = cxs.css()

      cxs.reset()

      return {
        markup,
        css
      }
    })
  }
}
