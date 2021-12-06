const path = require("path");
const webpack = require("webpack");
console.log(path.resolve(__dirname, "dist"));

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  //   target: "web",
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    port: 3000,
    static: "dist",
    hot: true,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
