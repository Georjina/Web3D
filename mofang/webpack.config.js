const path = require('path');

module.exports = {
  entry: './utils/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'utils/mofang'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
};