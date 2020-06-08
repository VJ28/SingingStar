const path = require("path");
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin");
const config = {
  entry: {
    app: ["./src/client.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist/public/"),
    publicPath: "/",
    chunkFilename: "[name].js",
    filename: "[name].js",
  },
  devtool: "",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "src/client/styles")],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]",
              encoding: false,
              context: path.resolve(__dirname, "src/assets/"),
              outputPath: "/",
              publicPath: "/",
              esModule: false,
              limit: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.DefinePlugin({
      //<--key to reduce React's size
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

module.exports = config;
