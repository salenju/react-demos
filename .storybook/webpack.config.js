const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, '../src/components'),
      '@Page': path.resolve(__dirname, '../src/routes'),
      '@Services': path.resolve(__dirname, '../src/services'),
      '@Store': path.resolve(__dirname, '../src/store'),
      '@Utils': path.resolve(__dirname, '../src/utils'),
      '@Consts': path.resolve(__dirname, '../src/consts'),
      '@Mock': path.resolve(__dirname, '../src/mock')
    },
    extensions: ['.js', '.less', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  }
}
