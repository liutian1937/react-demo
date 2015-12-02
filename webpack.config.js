var path = require('path')
var webpack = require('webpack')
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';


var appRoot = path.join(__dirname, 'app');
var nodeRoot = path.join(__dirname, 'node_modules');

module.exports = {
    //devtool: '#source-map',
    entry : {
        index : ['./app/containers/index.js',hotMiddlewareScript],
        //list : ['./application/list/',hotMiddlewareScript]
    },
    output: {
        path: path.join(__dirname, 'dist'), //打包输出目录
        filename: '[name].bundle.js', //打包文件名称
        publicPath: '/_dist/' //资源路径
    },
    resolve: {
        root : [appRoot, nodeRoot],
        //自动扩展文件后缀名
        extensions: ['', '.js','.jsx', '.json', '.scss'],
        //模块别名定义，方便直接引用别名
        alias: {
            form : 'components/form.js'
        }
    },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //new webpack.optimize.CommonsChunkPlugin("commons.js", ["index", "list"]), //配置公用模块
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=react,presets[]=es2015',
        exclude: /node_modules/,
        include: path.join(__dirname,'app')
      },
        {
            test : /\.css$/,
            loader : 'style-loader!css-loader',
            include: path.join(__dirname, 'styles')
        },
        {
            test : /\.less$/,
            loader : 'style-loader!css-loader',
            include: path.join(__dirname, 'styles')
        },
        {
            test : /\.(png|jpg)$/,
            loader : 'url-loader?size=8192',
            include: path.join(__dirname, 'images')
        }
    ]
  }
}

