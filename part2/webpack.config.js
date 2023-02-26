const path = require("path");
const html = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  //  指定入口文件
  mode: "development",
  entry: "./src/index.ts",
  //   指定打包文件所在的目录
  output: {
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的名字
    filename: "bundle.js",
  },

  //  指定webpack打包时要使用的模块
  module: {
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: "ts-loader",
        // 要排除的文件
        exclude: /node_modules/, 
      },
    ],
  },
  plugins: [new html(), new CleanWebpackPlugin()],

  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
