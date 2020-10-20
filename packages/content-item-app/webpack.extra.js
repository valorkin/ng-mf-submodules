const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const name = 'contentItemApp';

module.exports = {
  output: {
    publicPath: 'http://localhost:4202/',
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
        './CatalogItem': './packages/content-item-app/src/app/item-page/item-page.component.ts',
        './IframeCatalogItem': './packages/content-item-app/src/app/iframe-item-page/iframe-item-page.component.ts',
        './YourFavorites': './packages/content-item-app/src/app/your-favorites/your-favorites.component.ts',
        './ItemDetails': './packages/content-item-app/src/app/item-details/item-details.module.ts',
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


