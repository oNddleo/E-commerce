var webpack = require('webpack');

module.exports = {
    entry: {
        index: './app/index.js',
        vendor: [
            "react",
            "react-redux",
            "react-dom",
            "redux"
        ],
    },
    output: {
        path: __dirname,
        filename: './assets/jsx/[name].bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            '__SERVER__': 'false',
            '__BROWSER__': 'true', // you really only need one of these, but I like to have both
            // 'process.env': {
            //   'NODE_ENV': JSON.stringify('production')
            // }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //   compressor: {
        //     warnings: false
        //   },
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            Infinity
        })
    ],
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['*', '.jsx', '.js', '.json'],
        alias: {

            reducer: 'app/reducer/reducer.js',
            store: 'app/store.js',

            //khai bao action

        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader', //thu vien nhu 1 chuong trinh dich
                query: {
                    presets: ['es2015', 'react'] // cac thu vien can de webpack no hieu dc doan ma jsx html
                },
                test: /\.jsx?$/,    //file nao xu dung trong goi bundel
                exclude: /node_modules/ //ngoai tru khog su dung
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
}