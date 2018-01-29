const path = require('path');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')
const env = process.env.WEBPACK_ENV;

const filename = 'jslizer' + ((env === 'production') ? '.min' : '') + '.js';

const config = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: filename,
        path: distDir,
        publicPath: '/',
        sourceMapFilename: 'jslizer.map',
        library: 'jslizer',
        libraryTarget: 'var'
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
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
};

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    )
}

module.exports = config;