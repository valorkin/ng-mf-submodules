const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackMerge = require('webpack-merge');
const {getStylesConfig} = require('@angular-devkit/build-angular/src/webpack/configs/styles');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const shellConfig = {
  projectName: 'one-bx-shell-app',
  remotes: {
    contentReqApp: 'contentReqApp@http://localhost:4201/remoteEntry.js',
    contentItemApp: 'contentItemApp@http://localhost:4202/remoteEntry.js',
    contentRecommendedCategories: 'contentRecommendedCategories@http://localhost:4203/remoteEntry.js',
    nxApp: 'nxApp@http://localhost:4204/remoteEntry.js',
    ngrxApp: 'ngrxApp@http://localhost:4205/remoteEntry.js'
  },
  name: 'oneBxShellApp',
  port: 4200,
  publicPath: 'http://localhost:4200/',
  projectRoot: '../packages/one-bx-shell-app',
  entryModule: '../packages/one-bx-shell-app/src/app/app.module#AppModule',
  shared: [
    sharedDep('@angular/core'),
    sharedDep('@angular/common'),
    sharedDep('@angular/router'),
    sharedDep('@fundamental-ngx/core'),
    sharedDep('@fundamental-ngx/app-shell'),
    sharedDep('@ngrx/store')
  ],
  exposes: {}
};

const mfe1Config = {
  projectName: 'content-req-app',
  name: 'contentReqApp',
  port: 4201,
  publicPath: 'http://localhost:4201/',
  projectRoot: '../packages/content-req-app',
  entryModule: '../packages/content-req-app/src/app/app.module#AppModule',
  shared: [
    sharedDep('@angular/core'),
    sharedDep('@angular/common'),
    sharedDep('@angular/router'),
    sharedDep('@fundamental-ngx/core'),
    sharedDep('@fundamental-ngx/app-shell')
  ],
  exposes: {
    './Download': '../packages/content-req-app/src/app/download.component.ts',
    './PrList': '../packages/content-req-app/src/app/pr-list/pr-list.component.ts'
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
    sharedDep('@angular/core'),
    sharedDep('@angular/common'),
    sharedDep('@angular/router'),
    sharedDep('@fundamental-ngx/core'),
    sharedDep('@fundamental-ngx/app-shell')
  ],
  exposes: {
    './CatalogItem': '../packages/content-item-app/src/app/item-page/item-page.component.ts',
    './IframeCatalogItem': '../packages/content-item-app/src/app/iframe-item-page/iframe-item-page.component.ts',
    './YourFavorites': '../packages/content-item-app/src/app/your-favorites/your-favorites.component.ts',
    './Laptops': '../packages/content-item-app/src/app/modules/laptops/laptops.component.ts',
  }
};

const mfe3Config = {
  projectName: 'content-recommended-categories',
  name: 'contentRecommendedCategories',
  port: 4203,
  publicPath: 'http://localhost:4203/',
  projectRoot: '../packages/content-recommended-categories',
  entryModule: '../packages/content-recommended-categories/src/app/app.module#AppModule',
  shared: [
    sharedDep('@angular/core'),
    sharedDep('@angular/common'),
    sharedDep('@angular/router'),
    sharedDep('@fundamental-ngx/core'),
    sharedDep('@fundamental-ngx/app-shell')
  ],
  exposes: {
    './RecommendedCategories': '../packages/content-recommended-categories/src/app/recommended-categories/recommended-categories.component.ts',
  }
};

const mfe4Config = {
  projectName: 'nx-app',
  name: 'nxApp',
  port: 4204,
  publicPath: 'http://localhost:4204/',
  projectRoot: '../packages/nx-app',
  entryModule: '../packages/nx-app/apps/nx-app/src/app/app.module#AppModule',
  shared: [
    sharedDep('@angular/core'),
    sharedDep('@angular/common'),
    sharedDep('@angular/router'),
    sharedDep('@fundamental-ngx/core'),
    sharedDep('@fundamental-ngx/app-shell')
  ],
  exposes: {
    './CatalogItem': '../packages/nx-app/libs/shared/src/lib/item-page/item-page.component.ts',
    './YourFavorites': '../packages/nx-app/apps/nx-app/src/app/your-favorites/your-favorites.component.ts',
  }
};

const mfe5Config = {
  projectName: 'ngrx-app',
  name: 'ngrxApp',
  port: 4205,
  publicPath: 'http://localhost:4205/',
  projectRoot: '../packages/ngrx-app',
  entryModule: '../packages/ngrx-app/src/app/app.module#AppModule',
  shared: [
    sharedDep('@angular/core'),
    sharedDep('@angular/common'),
    sharedDep('@angular/router'),
    sharedDep('@fundamental-ngx/core'),
    sharedDep('@fundamental-ngx/app-shell'),
    sharedDep('@ngrx/store')
  ],
  exposes: {
    './Counter': '../packages/ngrx-app/src/app/counter/counter.component.ts',
  }
};

const mfe6Config = {
  projectName: 'auth-app',
  name: 'authApp',
  main: 'main',
  port: 4206,
  publicPath: 'http://localhost:4206/',
  projectRoot: '../packages/webcomp-auth-app',
  shared: [
    "rxjs"
  ],
  exposes: {
    './Login': '../packages/webcomp-auth-app/component',
  }
};

function fromNgConfig(projectConfig = {}, pathToConfig = './angular.json',) {
  const ngConfig = _loadNgConfig(pathToConfig);
  const projectName = projectConfig.projectName;
  if (!ngConfig.projects[projectName]) {
    throw new Error(`Incorrect project name "${projectName}" in "${pathToConfig}"`);
  }
  const conf1 = _configTemplate(ngConfig.projects[projectName], projectConfig);
  const conf2 = webpackStylesConfig(pathToConfig);
  const merged = webpackMerge(conf1, conf2);
  const _test = Object.create(merged);
  return merged;
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
    devtool: false,
    profile: false,
    watch: false,
    entry: {
      main: [`${projectRoot}/${options.main}`],
      polyfills: [`${projectRoot}/${options.polyfills}`]
    },
    resolve: {
      mainFields: ["es2015", "browser", "module", "main"]
    },
    devServer: {
      contentBase: path.normalize(path.join(__dirname, '../', options.outputPath)),
      port
    },
    module: {
      strictExportPresence: true,
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
        shared,
        shareScope: options.shareScope || 'default'
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
      new MiniCssExtractPlugin(),
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
  fromNgConfig(mfe1Config, '../packages/content-req-app/angular.json'),
  fromNgConfig(mfe2Config, '../packages/content-item-app/angular.json'),
  fromNgConfig(mfe3Config, '../packages/content-recommended-categories/angular.json'),
  fromNgConfig(mfe4Config, '../packages/nx-app/angular.json'),
  fromNgConfig(mfe5Config, '../packages/ngrx-app/angular.json'),
  fromNgConfig(shellConfig, '../packages/one-bx-shell-app/angular.json'),

  _webComponentConfigTemplate(mfe6Config)
];

function webpackStylesConfig(pathToConfig){
  const root = path.resolve(path.parse(pathToConfig).dir)
  const wco = {
    root,
    buildOptions: {
      "outputPath": "dist/content-item-app",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "tsconfig.app.json",
      "aot": true,
      "assets": [],
      "styles": [
      ],
      "scripts": [],
      "stylePreprocessorOptions": {
        "includePaths": []
      },
      "optimization": {
        "scripts": false,
        "styles": false
      },
      "fileReplacements": [],
      "resourcesOutputPath": "",
      "sourceMap": {
        "vendor": false,
        "hidden": false,
        "scripts": true,
        "styles": true
      },
      "vendorChunk": true,
      "commonChunk": true,
      "verbose": false,
      "progress": false,
      "i18nMissingTranslation": "warning",
      "extractCss": false,
      "watch": false,
      "outputHashing": "none",
      "deleteOutputPath": true,
      "preserveSymlinks": false,
      "extractLicenses": false,
      "showCircularDependencies": true,
      "buildOptimizer": false,
      "namedChunks": true,
      "subresourceIntegrity": false,
      "serviceWorker": false,
      "statsJson": false,
      "forkTypeChecker": true,
      "lazyModules": [],
      "budgets": [],
      "rebaseRootRelativeCssUrls": false,
      "crossOrigin": "none",
      "experimentalRollupPass": false,
      "allowedCommonJsDependencies": []
    }
  }
  const config = getStylesConfig(wco);
  return config;
}
