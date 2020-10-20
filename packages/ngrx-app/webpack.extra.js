const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const name = 'ngrxApp';

module.exports = {
  output: {
    publicPath: 'http://localhost:4205/',
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
        './Counter': './packages/ngrx-app/src/app/counter/counter.component.ts',
      },
      shared: [
        sharedDep('@angular/core'),
        sharedDep('@angular/common'),
        sharedDep('@angular/router'),
        sharedDep('@fundamental-ngx/core'),
        sharedDep('@fundamental-ngx/app-shell'),
        sharedDep('@ngrx/store'),
        sharedDep('@ngrx/effects')
      ],
    })
  ]
};


