module.exports = function App (children = '', css = '') {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">

        <meta name="description" content="Developer. Interested in design systems, open source, and beer. Based in NYC."/>

        <meta property="og:url" content="https://estrattonbailey.com"/>
        <meta property="og:site_name" content="estrattonbailey"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="estrattonbailey"/>
        <meta property="og:description" content="Developer. Interested in design systems, open source, and beer. Based in NYC."/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="estrattonbailey"/>
        <meta name="twitter:url" content="https://estrattonbailey@gmail.com"/>
        <meta name="twitter:title" content="estrattonbailey"/>
        <meta name="twitter:description" content="Developer. Interested in design systems, open source, and beer. Based in NYC."/>
        <meta name="twitter:image" content=""/>

        <link rel='stylesheet' href='https://unpkg.com/svbstrate@4.0.6/dist/svbstrate.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css' />
        <link rel='stylesheet' href='/main.css' />

        <title>estrattonbailey</title>

        <script>
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-40494652-14', 'auto');
          ga('send', 'pageview');
        </script>
        <script async src='https://www.google-analytics.com/analytics.js'></script>
      </head>
      <body>

        <div id='root'>
          <style>
            ${css}
          </style>
          ${children}
        </div>

        <script src='/index.js'></script>
      </body>
    </html>
  `
}
