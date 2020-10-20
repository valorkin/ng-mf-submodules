const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const name = 'oneBxShellApp'

module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: name
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: name,
      library: {type: 'var', name: name},
      filename: 'remoteEntry.js',
      remotes: {
        contentReqApp: 'contentReqApp@http://localhost:4201/remoteEntry.js',
        contentItemApp: 'contentItemApp@http://localhost:4202/remoteEntry.js',
        contentRecommendedCategories: 'contentRecommendedCategories@http://localhost:4203/remoteEntry.js',
        nxApp: 'nxApp@http://localhost:4204/remoteEntry.js',
        ngrxApp: 'ngrxApp@http://localhost:4205/remoteEntry.js'
      },
      shared: [
        sharedDep('@angular/core'),
        sharedDep('@angular/common'),
        sharedDep('@angular/router'),
        sharedDep('@fundamental-ngx/core'),
        sharedDep('@fundamental-ngx/app-shell'),
        sharedDep('@ngrx/store'),
        sharedDep('@ngrx/effects')
      ]
    })
  ]
};


