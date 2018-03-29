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
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
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
      'vue$': 'vue/dist/vue.esm.js',
      images: path.resolve(__dirname, './assets/images'),
      model: path.resolve(__dirname, './src/model'),
      components: path.resolve(__dirname, './src/components'),
      json: path.resolve(__dirname, './src/json'),
      db: path.resolve(__dirname, './src/db')
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

console.log("Current Environment: " + process.env.NODE_ENV);

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