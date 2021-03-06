/* global __dirname */
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./src/docile.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "docile.js",
    library: "Docile",
    libraryTarget: "window",
    libraryExport: "default",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              rootMode: "upward",
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.join(__dirname, "../tsconfig.json"),
      },
    }),
  ],

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".ts", ".json"],
  },

  context: path.resolve(__dirname, ".."),
  target: "web",
  mode: "production",

  plugins: [],
};
