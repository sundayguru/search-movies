const path = require('path')
const webpack  = require('webpack')

BUILD_DIR = path.resolve(__dirname, 'dist/')
APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
    entry: './src/index.jsx',
    mode: "development",
    output: {
        path: BUILD_DIR,
        publicPath: "/dist/",
        filename: 'bundle.js',
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "public/"),
        port: 9000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/react']
                        }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
