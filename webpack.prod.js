const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'production',

    output: {
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                attributes: false,
                minimize: true,
            },
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'

        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },
            ],
        }),

    ]

}