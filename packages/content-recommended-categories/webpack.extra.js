const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const name = 'contentRecommendedCategories';

module.exports = {
  output: {
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
      exposes: {
        './RecommendedCategories': './packages/content-recommended-categories/src/app/recommended-categories/recommended-categories.component.ts',
        './TestError': './packages/content-recommended-categories/src/app/test-error/error.component.ts'
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


