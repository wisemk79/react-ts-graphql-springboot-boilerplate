const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      filename: "main.js",
      path: __dirname + "/dist",
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
        test: /\.css$/, 
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                compilerOptions: {
                    "noEmit": false
                }
            },
            exclude: /node_modules|\.d\.ts$/,
        }

      ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
  }
