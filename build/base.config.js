const PATH = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:'./src/index.js',
    output:{
        path:PATH.resolve(__dirname,'../dist'),
        filename:'compiled.js',
        //publicPath:'dist/'
    },

    
    module: {
        rules: [
          //编译css和less
          {
            test: /\.(less|css)$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    strictMath: true,
                    noIeCompat: true,
                  },
                },
              },
            ],
          },
          //编译图片
          {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,//当图片小于该大小时采用base64编码大于时使用file-loader加载
                        name:'img/[name].[hash:8].[ext]'
                    },
                },
            ],
          },
          //编译vue模板
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ],
      },

    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
      //js添加版权信息
      new Webpack.BannerPlugin("©1995-2020 Hsiangsun All rights reserved."),
      //将html移动到dist目录下
      new HtmlWebpackPlugin({
        template:'index.html'
      }),
    ]
    
    
}