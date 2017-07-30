var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
      path : __dirname + '/dist',
      filename: "bundle.js",
      publicPath: '/'
    },
    module: {
      loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        },{
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ],
          },{
            test: /\.(jpe?g|png|gif)$/i, 
            loader: "file-loader?name=public/images/icons/[name].[ext]"
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {}
        }, {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader?jsx=1',
              query: {
                svgo: {
                  plugins: [{removeTitle: false}],
                  floatPrecision: 2
                }
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    plugins : [
      new HtmlWebpackPlugin({
          hash: false,
          inject: 'body',
          filename: 'index.html',
          template: path.join(__dirname + '/index.html'),
        })
    ]
}