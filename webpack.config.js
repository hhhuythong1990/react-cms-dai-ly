const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "./src/index.js"
    ],
    output:{
        path: path.resolve(__dirname, "./public"),
        filename: "build/bundle.min.js"
    },
    devtool: 'source-map',
    externals: {
        jquery: "jQuery"
    },    
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            //images: path.join(__dirname, './public/images'),
            Login: 'src/components/login/Login.js',
            Home: 'src/components/home.js',
            Home1: 'src/components/home1.js',            
            Main: 'src/components/Main.js',
            
        },
        extensions: ['*','.js','.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                loader: "babel-loader",
                query:{
                    presets: [
                        "react", "es2015", "stage-2"
                    ]
                }                
            },
            {
                test: /\.css?$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            }, {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader'
            }

        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //   include: /\.min\.js$/,
        //   minimize: true
        // }),
        new webpack.ProvidePlugin({   
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // })
      ]
}