const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);

const babelLoaderConfiguration = {
  test: /\.js?x$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [path.resolve(appDirectory, 'src')],
  // use: {
  //   loader: 'babel-loader'
  // }
  use: ['babel-loader', 'eslint-loader'],
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = (env, options) => {
  // process.env.NODE_ENV = options.mode
  // process.env.BABEL_ENV = options.mode

  return {
    entry: [
      // load any web API polyfills
      // path.resolve(appDirectory, 'polyfills-web.js'),
      // your web-specific entry file
      path.resolve(appDirectory, 'src/index.jsx'),
    ],

    // configures where the build ends up
    output: {
      filename: 'bundle.js',
      path: path.resolve(appDirectory, 'build'),
      publicPath: '/',
    },
    devServer: {
      contentBase: './build',
    },

    module: {
      rules: [babelLoaderConfiguration, imageLoaderConfiguration],
    },

    resolve: {
      // root: path.resolve('./src')
      // modules: ['node_modules', path.resolve(__dirname, 'src')],
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'], // ,
      // alias: {
      //   api: path.resolve(__dirname, './src/api')
      // }
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: 'public/index.html',
          },
          options.mode === 'production'
            ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
            : undefined,
        ),
      ),

      new webpack.DefinePlugin({
        __DEV__: options.mode === 'development',
        NODE_ENV: options.mode,
        BABEL_ENV: options.mode,
      }),
    ],
    // optimization: {
    //   // We no not want to minimize our code.
    //   minimize: false
    // },
  };
};
