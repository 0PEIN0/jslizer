const path = require('path');

const webpack = require('webpack');

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'jslizer.js',
        path: distDir,
        publicPath: '/',
        sourceMapFilename: 'jslizer.map',
        library: 'jslizer',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: path.resolve(__dirname, "./node_modules"),
            include: srcDir
        }]
    }
};