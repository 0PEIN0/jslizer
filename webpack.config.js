const path = require('path');

const webpack = require('webpack');

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'jslizer.js',
        path: distDir,
        publicPath: '/',
        sourceMapFilename: 'jslizer.map',
        library: 'jslizer',
        libraryTarget: 'var'
    }
};