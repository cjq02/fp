var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts', './src/scss/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist/fp'),
    publicPath: '/dist/fp/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: 'vue-style-loader!css-loader!sass-loader'
            // 'scss': 'vue-style-loader!css-loader!style-loader!sass-loader'
            // 'sass': 'vue-style-loader!css-loader!style-loader!sass-loader?indentedSyntax',
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          // name: '[name].[ext]?[hash]'
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
    // new HtmlWebpackPlugin({
    //   title: 'Fitness Plan'
    // })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  resolveLoader: {
    alias: {
      'scss-loader': 'sass-loader'
    },
  },
  devServer: {
    //historyApiFallback: true,
    //noInfo: true,
    //contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}