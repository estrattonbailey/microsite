const operator = require('operator.js').default

/**
 * Send page views to
 * Google Analytics
 */
function gaTrackPageView () {
  const ga = window.ga

  if (!ga) return

  const data = {
    page: window.location.pathname,
    title: document.title
  }

  ga('set', data)

  ga('send', 'pageview')

  if (window.__debug) {
    console.info('Google event', data)
  }
}

const app = operator({})

app.on('afterRender', () => {
  gaTrackPageView()
})
