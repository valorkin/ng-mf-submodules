const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');

const shellConfig = {
  ngConfigPath: './angular.json',
  name: 'shell',
  libName: 'shell',
  port: 5000,
  publicPath: 'http://localhost:5000/',
  entryModule: './projects/shell/src/app/app.module#AppModule',
  shared: ['@angular/core', '@angular/common', '@angular/router'],
  exposes: {}
}

const mfe1Config = {
  ngConfigPath: '../packages/ng9-app/angular.json',
  name: 'ng9-app',
  libName: 'mfe1',
  port: 3000,
  publicPath: 'http://localhost:3000/',
  entryModule: '../packages/ng9-app/src/app/app.module#AppModule',
  shared: ['@angular/core', '@angular/common', '@angular/router'],
  exposes: {
    './Download': '../packages/ng9-app/src/app/download.component.ts',
    './Upload': '../packages/ng9-app/src/app/upload.component.ts'
  }
}

const mfe2Config = {
  ngConfigPath: '../packages/ng10-app/angular.json',
  name: 'ng10-app',
  libName: 'mfe2',
  port: 3001,
  publicPath: 'http://localhost:3001/',
  entryModule: '../packages/ng10-app/src/app/app.module#AppModule',
  shared: ['@angular/core', '@angular/common', '@angular/router'],
  exposes: {
    './Analyze': '../packages/ng10-app/src/app/analyze.component.ts',
    './Enrich': '../packages/ng10-app/src/app/enrich.component.ts'
  }
}

function fromNgConfig(projectConfig = {}) {
  const pathToConfig = projectConfig.ngConfigPath;
  const ngConfig = _loadNgConfig(pathToConfig);
  const projectName = projectConfig.name;
  if (!ngConfig.projects[projectName]) {
    throw new Error(`Incorrect project name "${projectName}" in "${pathToConfig}"`);
  }
  const pjroot = path.relative(process.cwd(), path.resolve(__dirname, path.dirname(pathToConfig)));
  return _configTemplate(ngConfig.projects[projectName], projectConfig, pjroot);
}

function _loadNgConfig(pathToConfig) {
  try {
    return require(pathToConfig);
  } catch {
    throw new Error(`Incorrect path to angular.json ${pathToConfig}`);
  }
}

function _configTemplate(ngConfig, projectConfig, pjroot) {
  const {name, libName, port, publicPath, entryModule, shared, exposes} = projectConfig;
  const {sourceRoot} = ngConfig;
  const options = ngConfig.architect.build.options;
  const _pj = (_p) => path.join( pjroot, _p)

  const wpconfig = {
    entry: [`./${_pj(options.polyfills)}`, `./${_pj(options.main)}`],
    resolve: {
      mainFields: ["browser", "module", "main"]
    },
    devServer: {
      contentBase: path.join(pjroot, options.outputPath),
      port
    },
    module: {
      rules: [
        {test: /\.ts$/, loader: "@ngtools/webpack"}
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: libName,
        library: {type: "var", name: libName},
        filename: "remoteEntry.js",
        exposes,
        shared
      }),
      new AotPlugin({
        skipCodeGeneration: false,
        tsConfigPath: path.join(pjroot, options.tsConfig),
        directTemplateLoading: true,
        entryModule: path.resolve(
          process.cwd(),
          entryModule
        )
      }),
      new CopyPlugin([
        {from: path.join(pjroot, sourceRoot, 'assets'), to: 'assets'},
      ]),
      new HtmlWebpackPlugin({
        template: path.join(pjroot, options.index)
      })
    ],
    output: {
      publicPath,
      filename: "[name].js",
      // path: path.resolve(process.cwd(), pjroot) + "/dist/" + name,
      path: path.resolve(process.cwd(), `../dist/` + name),
      chunkFilename: "[id].[chunkhash].js"
    },
    mode: "production"
  }

  return wpconfig;
}

// module.exports = [fromNgConfig(shellConfig), fromNgConfig(mfe1Config), fromNgConfig(mfe2Config)];
module.exports = [fromNgConfig(mfe2Config)];
