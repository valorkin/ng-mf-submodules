const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');


const shellConfig = {
  projectName: 'one-bx-shell-app',
  name: 'oneBxShellApp',
  port: 4200,
  publicPath: 'http://localhost:4200/',
  projectRoot: '../packages/one-bx-shell-app',
  entryModule: '../packages/one-bx-shell-app/src/app/app.module#AppModule',
  shared: [
    '@angular/core',
    '@angular/common',
    '@angular/router',
    '@fundamental-ngx/core',
    '@fundamental-ngx/app-shell'
  ],
  exposes: {},
  remotes: {}
};

const mfe1Config = {
  projectName: 'content-req-app',
  name: 'contentReqApp',
  port: 4201,
  publicPath: 'http://localhost:4201/',
  projectRoot: '../packages/content-req-app',
  entryModule: '../packages/content-req-app/src/app/app.module#AppModule',
  shared: [
    '@angular/core',
    '@angular/common',
    '@angular/router',
    '@fundamental-ngx/core',
    '@fundamental-ngx/app-shell'
  ],
  exposes: {
    './Download':     '../packages/content-req-app/src/app/download.component.ts',
    './PrList':       '../packages/content-req-app/src/app/pr-list/pr-list.component.ts'
  }
};


const mfe2Config = {
  projectName: 'content-item-app',
  name: 'contentItemApp',
  port: 4202,
  publicPath: 'http://localhost:4202/',
  projectRoot: '../packages/content-item-app',
  entryModule: '../packages/content-item-app/src/app/app.module#AppModule',
  shared: [
    '@angular/core',
    '@angular/common',
    '@angular/router',
    '@fundamental-ngx/core',
    '@fundamental-ngx/app-shell'
  ],
  exposes: {
    './CatalogItem':  '../packages/content-item-app/src/app/item-page/item-page.component.ts',
    './YourFavorites':'../packages/content-item-app/src/app/your-favorites/your-favorites.component.ts',
  }
};


function fromNgConfig(projectConfig = {}, pathToConfig = './angular.json',) {
  const ngConfig = _loadNgConfig(pathToConfig);
  const projectName = projectConfig.projectName;
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
  const {projectName, name, port, publicPath, entryModule, shared, exposes, projectRoot} = projectConfig;
  const {sourceRoot} = ngConfig;
  const options = ngConfig.architect.build.options;

  return {
    entry: [`${projectRoot}/${options.polyfills}`, `${projectRoot}/${options.main}`],
    resolve: {
      mainFields: ["browser", "module", "main"]
    },
    devServer: {
      contentBase: path.normalize(path.join(__dirname, '../', options.outputPath)),
      port
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
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
        tsConfigPath: path.normalize(path.join(projectRoot, options.tsConfig)),
        directTemplateLoading: true,
        entryModule: path.resolve(
          __dirname,
          entryModule
        )
      }),
      new CopyPlugin([
        {
          from: path.normalize(path.join(projectRoot, sourceRoot, 'assets')), to: 'assets'
        },
      ]),
      new HtmlWebpackPlugin({
        template: path.normalize((path.join(projectRoot, options.index)))
      })
    ],
    output: {
      publicPath,
      filename: "[name].js",
      path: path.normalize(path.join(__dirname, '../', options.outputPath)),
      chunkFilename: "[id].[chunkhash].js"
    },
    // mode: "production"
    mode: "development"
  }
}

module.exports = [
  fromNgConfig(mfe1Config, '../packages/content-req-app/angular.json'),
  fromNgConfig(mfe2Config, '../packages/content-item-app/angular.json'),
  fromNgConfig(shellConfig, '../packages/one-bx-shell-app/angular.json'),
];
