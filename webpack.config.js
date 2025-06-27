const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Extension } = require('typescript');
const {templet} = require('html-webpack-plugin');

module.exports={
  mode: 'development',
  entry: './src/index.tsx',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  resolve:{
    extensions:['.js', '.jsx', '.tsx', '.ts'],
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],

  module:{
    rules:[
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude:  /node_modules/,
      },

    ]
  }
}