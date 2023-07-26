const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, '.dist'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })],
    devServer: {
        static: {
            directory: path.join(__dirname, '.dist'), // Replace 'public' with the path to your static files directory.
        },
        historyApiFallback: true, // This option is still valid for enabling history fallback.
        // ... other devServer options ...
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
        ],
    },
}