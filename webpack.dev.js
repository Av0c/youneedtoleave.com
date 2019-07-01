const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: '0.0.0.0', // Allow the server to be accessed externally (Must also open Firewall)
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
    }
});
