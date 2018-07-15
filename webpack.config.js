'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')
const env = process.env.WEBPACK_ENV;

function getDefaultConfig() {
    return {
        entry: './index.js',
        devtool: 'source-map',
        mode: env,
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
            rules: [{
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
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: false,
                    parallel: true,
                    uglifyOptions: {
                        compress: true,
                        ecma: 8,
                        mangle: false,
                    },
                    sourceMap: true,
                })
            ]
        }
    };
}

const config = getDefaultConfig();
//TODO: add `minConfig` variable in the array below after the bugs are resolved.
module.exports = [config];
