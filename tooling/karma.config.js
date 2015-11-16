var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      //  We need to polyfill as PhantomJS doesn't support 'bind'.
      '../node_modules/babel-core/browser-polyfill.js',
      '../src/**/*.spec.js'
    ],
    frameworks: ['tap'],
    preprocessors: {
      '../src/**/*.spec.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    singleRun: false,
    webpack: {
      entry: {},
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            exclude: [
              /node_modules/,
              /\.spec\.js/
            ],
            loader: 'isparta-instrumenter-loader'
          }
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, '../src')
          }
        ]
      },
      plugins: [
        new webpack.IgnorePlugin(/react\/lib\/ReactContext/)
      ]
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: '../coverage/',
      reporters: [
        {type: 'text'},
        {type: 'lcov', subdir: 'lcov'}
      ]
    }
  });
};
