var webpack = require('webpack');

module.exports = {
    entry: './app/App.js',
    output: {
        filename: 'bundle.js',
        library: 'require',
        libraryTarget: 'this'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        /*new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
    ]
};