const path = require('path')
const webpack = require('webpack') //启动热更新第二步
const htmlWebpackPlugin = require('html-webpack-plugin')
    //只要是插件都要放到plugins节点中去
    //这个插件的2个作用：
    //1、自动在内存中根据指定页面生成一个内存的页面
    //2、自动把打包好的路径追加到页面中去

module.exports = {
    entry: path.join(__dirname, './src/main.js'), //需要打包的文件
    output: {
        path: path.join(__dirname, './dist'), //打包好的文件存储位置
        filename: 'bundle.js' //输出的文件名称
    },
    devServer: { //配置webpack-dev-server
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true //启动热更新第一步
    },
    plugins: [ //配置插件的节点，启动热更新第三步
        new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象
        new htmlWebpackPlugin({ //创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面，将来会根据指定的页面路径去生成内存中的页面
            filename: 'index.html' //指定页面生成的名称
        })
    ],
    module: { //这个节点用于配置所有第三方模块加载器
        rules: [ //所有第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //配置处理 .css 文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //这是配置处理 .less 文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //这是配置处理 .scss 文件的第三方loader规则
            //{ test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=40000&name=[hash:8]-[name].[ext]' }, 
            //处理图片路径的loader,limit给定的值是图片的大小，单位是byte，如果我们引用的图片大于等于给定的limit值，则不会被转为 base64 格式的字符串，如果图片小于给定的limit值，则会转为 base64 的字符串
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, //这是处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //处理.js高级语法的loader
        ]
    }
}