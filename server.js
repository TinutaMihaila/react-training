if (!process.env.HOST || !process.env.PORT || !process.env.URL) {
  const { HOST, PORT, URL } = require('./config');

  process.env.HOST = HOST;
  process.env.PORT = PORT;
  process.env.URL = URL;
}

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webPackConfig = require('./config/webpack')(process.env.URL, __dirname);

const compiler = webpack(webPackConfig);

const server = new WebpackDevServer(compiler, {
  hot: true,
  compress: true,
  publicPath: webPackConfig.output.publicPath,
  historyApiFallback: true,
});

server.listen(
  process.env.PORT,
  process.env.HOST,
  () => {
    console.log(`Webpack dev server is running!
    host: ${process.env.HOST}:
    port: ${process.env.PORT}
    url: ${process.env.URL}`);
  }
);
