const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.cjs');

module.exports = merge(common, {
    mode: 'production',    
});