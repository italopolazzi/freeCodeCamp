const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/assets/',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: true
                }
            }]
        }]
    }
}