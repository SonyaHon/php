const ENV = process.env.ENV || false;
console.log(ENV);
module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  watch: ENV==="true",
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /^.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      },
      {
        test: /^.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};