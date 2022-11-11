const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sass = require('sass');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },

    optimization: {
        minimizer: [new UglifyJsPlugin()],
      },
    
    module: {
        rules: [
            {
                test:  /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ],
            },
        ]
    },
    plugins:[
        new CleanPlugin(),
        new HtmlPlugin({
            template: './public/index.html'
        }),
        new CopyPlugin({
            patterns: [{ from: './static', to: './static'}]
        }),
        new MiniCssExtractPlugin(),
    ]
};