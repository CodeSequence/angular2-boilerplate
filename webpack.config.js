const {resolve} = require('path')
const {DefinePlugin, optimize} = require('webpack');

module.exports = function createWebpackConfig(env) {
  const DEFAULT_PLUGINS = [
    new DefinePlugin({
      PROD: JSON.stringify(env.prod)
    })
  ];

  const PRODUCTION_PLUGINS = [
    new optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new optimize.DedupePlugin()
  ];

  const PLUGINS = env.prod ? [ ...DEFAULT_PLUGINS, ...PRODUCTION_PLUGINS ]: DEFAULT_PLUGINS;

  return {
    entry: './app/index',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    plugins: PLUGINS,
    devServer: { },
    module: {
      loaders: [
        {test: /\.ts$/, loader: 'ts', exclude: /node_modules/},
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.html$/, loader: 'raw-loader' },
        { test: /\.json$/, loader: 'json-loader' },
        {
          test: /(\.png?$|\.jpg?$|\.jpeg?$|\.svg?$|\.eot?$|\.ttf?$|\.woff?$|\.woff2?$|\.wav?$|\.mp3?$|\.ico?$)/,
          loader: 'file'
        }
      ],
    },
  };
};
