const Merge = require('webpack-merge');
const BaseConfig = require('./base.config');


module.exports = Merge ( BaseConfig,{
    devServer:{
        contentBase:'./dist',
        inline:true,//实时监听
        port: 8080
    }
})