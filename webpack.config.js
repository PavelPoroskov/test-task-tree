const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const safePostCssParser = require('postcss-safe-parser');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// // const TerserPlugin = require('terser-webpack-plugin');

const postcssNormalize = require('postcss-normalize');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');

const shouldUseSourceMap = true;

const appDirectory = path.resolve(__dirname);

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

const babelLoaderConfiguration = {
  test: /\.js?x$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [path.resolve(appDirectory, 'src')],
  // use: {
  //   loader: 'babel-loader'
  // }
  // use: ['babel-loader'],
  use: ['babel-loader', 'eslint-loader'],
};

module.exports = (webpackEnv, options) => {
  // const isEnvDevelopment = webpackEnv === 'development';
  // const isEnvProduction = webpackEnv === 'production';
  const isEnvDevelopment = options.mode === 'development';
  const isEnvProduction = options.mode === 'production';

  // const publicPath = isEnvProduction
  //   ? paths.servedPath
  //   : isEnvDevelopment && '/';
  const publicPath = isEnvProduction
    ? '/test-task-tree/'
    : isEnvDevelopment && '/';

  // const publicPath = './';

  // Some apps do not use client-side routing with pushState.
  // For these, "homepage" can be set to "." to enable relative asset paths.
  const shouldUseRelativeAssetPaths = publicPath === './';

  const cssLoaderConfiguration = {
    test: /\.css$/,
    use: [
      isEnvDevelopment && require.resolve('style-loader'),
      // 'style-loader',
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: shouldUseRelativeAssetPaths ? { publicPath: '../../' } : {},
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            postcssFlexbugsFixes,
            postcssPresetEnv({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            postcssNormalize(),
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
    ].filter(Boolean),
    sideEffects: true,
  };

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
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
      // publicPath: '/',
      publicPath,
    },
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
    },

    module: {
      rules: [
        imageLoaderConfiguration,
        babelLoaderConfiguration,
        cssLoaderConfiguration,
      ],
    },

    resolve: {
      // root: path.resolve('./src')
      modules: ['node_modules', path.resolve(__dirname, 'src')],
      // modules: ['node_modules'],
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
      isEnvProduction
      && new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
    ].filter(Boolean),

    // optimization: {
    //   minimize: isEnvProduction,
    //   minimizer: [
    //     // This is only used in production mode
    //     new OptimizeCSSAssetsPlugin({
    //       cssProcessorOptions: {
    //         parser: safePostCssParser,
    //         map: shouldUseSourceMap
    //           ? {
    //             // `inline: false` forces the sourcemap to be output into a
    //             // separate file
    //             inline: false,
    //             // `annotation: true` appends the sourceMappingURL to the end of
    //             // the css file, helping the browser find the sourcemap
    //             annotation: true,
    //           }
    //           : false,
    //       },
    //     }),
    //   ],
    //   // Automatically split vendor and commons
    //   // https://twitter.com/wSokra/status/969633336732905474
    //   // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    //   splitChunks: {
    //     chunks: 'all',
    //     name: false,
    //   },
    //   // Keep the runtime chunk separated to enable long term caching
    //   // https://twitter.com/wSokra/status/969679223278505985
    //   runtimeChunk: true,
    // },

  };
};
