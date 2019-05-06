const path = require('path');

const BROWSERS = process.env['BROWSERS']
console.log('BROWSERS:', BROWSERS);

module.exports = {
  mode: "development",
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader', options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: [BROWSERS]
              }
            }]
          ]
        }
      }]
    }]
  }
}
