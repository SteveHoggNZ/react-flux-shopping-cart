var fs = require('fs');
var path = require('path');
var replaceStream = require('replacestream');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  // res.sendFile(path.join(__dirname, 'index.html'));
  // this is a dev server so inject the script tag into the index
  // the index template does not have a script tag as html-webpack-plugin injects that for production

  fs.createReadStream(path.join(__dirname, 'index.html'))
    .pipe(replaceStream('</body>', '    <script src="/static/bundle.js"></script>\n</body>'))
    .pipe(res);
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
