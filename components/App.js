module.exports = function App (children = '', css = '') {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">

        <meta name="description" content=""/>

        <meta property="og:url" content=""/>
        <meta property="og:site_name" content=""/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content=""/>
        <meta name="twitter:url" content=""/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content=""/>

        <link rel='stylesheet' href='https://unpkg.com/svbstrate@4.0.6/dist/svbstrate.css' />

        <title>estrattonbailey</title>

        <style>
          ${css}
        </style>
      </head>
      <body>
        ${children}
      </body>
    </html>
  `
}
