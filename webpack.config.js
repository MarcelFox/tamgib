const path = require("path");
const dotenv = require("dotenv");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

dotenv.config();

const NODE_ENV =
  process.env.NODE_ENV === "production" ? "production" : "development";

const port = process.env.PORT || 8080;
module.exports = {
  mode: NODE_ENV,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: port,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@Domain": path.resolve(__dirname, "src/domains"),
      "@Core": path.resolve(__dirname, "src/core"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options:{
          minimize: true
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "index.html",
    }),
  ],
};
