const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './app.js',
        vendor: ['jquery']
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
    ]
};