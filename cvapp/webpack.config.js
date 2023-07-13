
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/,
                exclude: /node-modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            }
        ]

    }
}