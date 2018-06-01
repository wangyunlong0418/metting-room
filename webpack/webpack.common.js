const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['less-loader', 'style-loader']
                })
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
            }, {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                },
            }
        ]
    }
}