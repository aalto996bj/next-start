const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
var https = require('https');
var fs = require('fs');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

var port = 3000
if (!dev) {
  port = 80
}

var options = {
  key: fs.readFileSync('publick.key.pem'),
  cert: fs.readFileSync('domain.cert.pem'),
};

app.prepare().then(() => {
  createServer(options, (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/video') {
      app.render(req, res, '/video', query)
    } else if (pathname === '/videossr') {
      app.render(req, res, '/videossr', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})