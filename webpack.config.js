module.exports = {
  entry:"./index.js",
  output:{
    path:__dirname,
    filename:'bundle.js',
    publicPath:'__build'
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0', // 'babel-loader' is also a legal name to reference
      }
    ]
  }
}
