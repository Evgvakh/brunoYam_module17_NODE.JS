const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.cjs');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
            directory: path.resolve(__dirname, './src/css'),
        },
        port: 3307,
        client: {
            overlay: false            
        }
    },
});