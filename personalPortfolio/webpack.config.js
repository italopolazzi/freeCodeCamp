const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@img': path.resolve(__dirname, 'src', 'img'),
            '@styles': path.resolve(__dirname, 'src', 'styles'),
            '@js': path.resolve(__dirname, 'src', 'js'),
        }
    },
    module: {
        rules: [{
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(html)$/,
                use: [{
                    loader: 'html-loader',
                    options: {

                        interpolate: true
                    }
                }]
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {},
                }, ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            title: 'Ítalo Polazzi - Web Developer',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            inject: 'body'
        })
    ]
}