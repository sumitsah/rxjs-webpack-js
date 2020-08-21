const {join} = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        path: join(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 4200,
    },
};