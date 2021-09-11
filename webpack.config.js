const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry:{
        app:"./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets:[
                                [
                                    // 指定加载器
                                    "@babel/preset-env",
                                    // 设置babel
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome":"88"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        //使用corejs的方式“usage” 表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title:"这是一个自定义的title"
            template:'./src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts','.js']
    }

}