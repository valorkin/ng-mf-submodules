const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mfe6Config = {
  projectName: 'auth-app',
  name: 'authApp',
  main: 'main',
  port: 4206,
  publicPath: 'http://localhost:4206/',
  projectRoot: '../packages/webcomp-auth-app',
  plugins: [
    new CleanWebpackPlugin()
  ],
  shared: [
    "rxjs"
  ],
  exposes: {
    './Login': '../packages/webcomp-auth-app/component',
  }
};

function _webComponentConfigTemplate(projectConfig) {
  const {projectName, name, main, port, publicPath, projectRoot, shareScope, shared, exposes } = projectConfig;

  return {
    entry: `${projectRoot}/${main}`,
    mode: "development",
    devServer: {
      contentBase: path.normalize(path.join(__dirname, '../dist', projectName)),
      port
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      publicPath,
      uniqueName: name,
      path: path.normalize(path.normalize(path.join(__dirname, '../dist', projectName))),
      filename: '[name].js'
    },
    resolve: {
      extensions: [ '.ts', '.js' ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new ModuleFederationPlugin({
        name,
        library: {type: "var", name},
        filename: "remoteEntry.js",
        exposes,
        shared,
        shareScope: shareScope || 'default'
      }),
      new HtmlWebpackPlugin({
        template: path.normalize((path.join(projectRoot, 'index.html')))
      }),
    ]
  }
}

module.exports = [
  _webComponentConfigTemplate(mfe6Config)
];
