const CompressionJS = require('uglifyjs-webpack-plugin');
const Merge = require('webpack-merge');
const BaseConfig = require('./base.config');




module.exports = Merge(BaseConfig,{
    plugins:[
      //压缩js
      new CompressionJS(),
    ], 
}); 