const config = {
  entry: {
    'js/app': './_develop/js/app.js',
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:  ['env'],
          }
        }
      }
    ]
  }
}

export default config;