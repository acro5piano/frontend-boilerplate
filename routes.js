const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    template: 'templates/index.pug',
    filename: 'index.html',
  },
].map(route => {
  return new HtmlWebpackPlugin(route)
})
