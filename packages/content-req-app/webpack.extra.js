const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const name = 'contentReqApp';

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: name
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: name,
      library: { type: 'var', name: name },
      filename: 'remoteEntry.js',
      exposes: {
        './Download': './packages/content-req-app/src/app/download.component.ts',
        './PrList': './packages/content-req-app/src/app/pr-list/pr-list.component.ts'
      },
      shared: [
        sharedDep('@angular/core'),
        sharedDep('@angular/common'),
        sharedDep('@angular/router'),
        sharedDep('@fundamental-ngx/core'),
        sharedDep('@fundamental-ngx/app-shell')
      ],
    })
  ]
};


