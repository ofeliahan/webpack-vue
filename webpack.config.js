//这是webpack 的配置文件
//需要暴露一个对象,注意,这里暴露的方式还是COMMON.JS的方式
const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
  //模式
  mode:'development',//两个选项:development (开发)  production(生产,运行)
  //入口
  entry:'./src/index.js',

  //出口
  output:{
    //出口的位置(绝对路径)
    path:path.resolve(__dirname,'./dist'), //项目根目录下的distwenj jia 
    filename:'bundle.js'              //打包后文件的名字
    
  },


  module:{
    //规则
    rules:[
      {
        test:/\.css$/,  //找到匹配的文件模块
        //注意 use 里的加载器名要按照使用的顺序倒着写
        use:[
          'style-loader',
          'css-loader'
        ]    //要使用什么加载器去处理这个模块文件
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },


  //插件
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    new CopyWebpackPlugin([
      {
        //只写form 的话,会默认存进设置的出口文件夹下面
        //写了to的话就会存进这里设置的文件夹,没有的话会自动创建
        from:'./lib/jquery.min.js', 
        to:'lib'  //dist下的lib文件夹
        //  to:'lib/abc/js  就会存进lib文件夹下,并且更名为abc.js
      }
    ])
  ],


  //解析
  resolve:{
    //别名
    alias:{
      vue:'vue/dist/vue.esm.js'
    }

  },
  //webpack-dev-server配置
  devServer:{
    //配置以哪个文件夹作为web服务的根路径
    contentBase:path.resolve(__dirname,'./dist')
  },

  //
 

}
