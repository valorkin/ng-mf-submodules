const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');

const shellConfig = {
  name: 'shell',
  port: 5000,
  publicPath: 'http://localhost:5000/',
  entryModule: './projects/shell/src/app/app.module#AppModule',
  shared: ['@angular/core', '@angular/common', '@angular/router'],
  exposes: {}
}

const mfe1Config = {
  name: 'mfe1',
  port: 3000,
  publicPath: 'http://localhost:3000/',
  entryModule: './projects/mfe1/src/app/app.module#AppModule',
  shared: ['@angular/core', '@angular/common', '@angular/router'],
  exposes: {
    './Download': './projects/mfe1/src/app/download.component.ts',
    './Upload': './projects/mfe1/src/app/upload.component.ts'
  }
}

const mfe2Config = {
  name: 'mfe2',
  port: 3001,
  publicPath: 'http://localhost:3001/',
  entryModule: './projects/mfe2/src/app/app.module#AppModule',
  shared: ['@angular/core', '@angular/common', '@angular/router'],
  exposes: {
    './Analyze': './projects/mfe2/src/app/analyze.component.ts',
    './Enrich': './projects/mfe2/src/app/enrich.component.ts'
  }
}

function fromNgConfig(projectConfig = {}, pathToConfig = './angular.json', ) {
  const ngConfig = _loadNgConfig(pathToConfig);
  const projectName = projectConfig.name;
  if (!ngConfig.projects[projectName]) {
    throw new Error(`Incorrect project name "${projectName}" in "${pathToConfig}"`);
  }
  return _configTemplate(ngConfig.projects[projectName], projectConfig);
}

function _loadNgConfig(pathToConfig) {
  try {
    return require(pathToConfig);
  } catch {
    throw new Error(`Incorrect path to angular.json ${pathToConfig}`);
  }
}

function _configTemplate(ngConfig, projectConfig) {
  const {name, port, publicPath, entryModule, shared, exposes} = projectConfig;
  const {sourceRoot} = ngConfig;
  const options = ngConfig.architect.build.options;

  return {
    entry: [`./${options.polyfills}`, `./${options.main}`],
    resolve: {
      mainFields: ["browser", "module", "main"]
    },
    devServer: {
      contentBase: path.join(__dirname, options.outputPath),
      port
    },
    module: {
      rules: [
        {test: /\.ts$/, loader: "@ngtools/webpack"}
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name,
        library: {type: "var", name},
        filename: "remoteEntry.js",
        exposes,
        shared
      }),
      new AotPlugin({
        skipCodeGeneration: false,
        tsConfigPath: path.relative(__dirname, options.tsConfig),
        directTemplateLoading: true,
        entryModule: path.resolve(
          __dirname,
          entryModule
        )
      }),
      new CopyPlugin([
        {from: path.join(sourceRoot, 'assets'), to: 'assets'},
      ]),
      new HtmlWebpackPlugin({
        template: options.index
      })
    ],
    output: {
      publicPath,
      filename: "[name].js",
      path: __dirname + "/dist/" + name,
      chunkFilename: "[id].[chunkhash].js"
    },
    mode: "production"
  }
}

module.exports = [fromNgConfig(shellConfig), fromNgConfig(mfe1Config), fromNgConfig(mfe2Config)];
