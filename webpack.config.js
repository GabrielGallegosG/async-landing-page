const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: './src/index.html',
        filename: './index.html'
    }),
    new Dotenv()
]
}