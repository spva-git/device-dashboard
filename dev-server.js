const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const portNumber = 3333;
const targetEntry = `http://localhost:${portNumber}/`;

new WebpackDevServer(webpack(config), {
  stats: { colors: true },
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: 'dist',
}).listen(portNumber, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Running at ${targetEntry}...`);
  open(targetEntry);
  return;
});
