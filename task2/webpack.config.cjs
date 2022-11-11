const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {        
        path: path.resolve(__dirname, './dist')
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ],
      },  

    module: {
        rules: [
            { 
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }         
            },            
        ]
    },

    plugins:[
        new CleanPlugin(),
        new HtmlPlugin({
            template: './public/index.html'
        }),        
    ]
};