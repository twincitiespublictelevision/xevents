const webpack = require('webpack');
const path = require('path');

let config = target => ({
  entry: {
    client: './src/client.ts',
    sw: './src/sw.ts'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `dist/${target}`),
    libraryExport: 'default',
    libraryTarget: target
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version)
    })
  ]
});

module.exports = [
  config('commonjs'),
  config('var')
]