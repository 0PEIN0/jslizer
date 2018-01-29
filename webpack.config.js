'use strict';

const path = require('path');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')
const env = process.env.WEBPACK_ENV;

function loadDefaultPlugins() {
    var plugins = [];
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    );
    return plugins;
}

function loadProductionPlugins(plugins) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    );
    return plugins;
}

function getDefaultConfig() {
    return {
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
}

const config = getDefaultConfig();
var minConfig = getDefaultConfig();
minConfig.output.filename = 'jslizer.min.js';
minConfig.output.sourceMapFilename = 'jslizer.min.map';
config.plugins = loadDefaultPlugins();
minConfig.plugins = loadDefaultPlugins();
minConfig.plugins = loadProductionPlugins(minConfig.plugins);

module.exports = [config, minConfig];