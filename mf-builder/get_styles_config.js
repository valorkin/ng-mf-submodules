const {getStylesConfig} = require('@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/styles');
const wco = {
  root: '/home/valorkin/work/sap/sap-ng-mf/packages/content-item-app',
  buildOptions: {
      "outputPath": "dist/content-item-app",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "tsconfig.app.json",
      "aot": true,
      "assets": [],
      "styles": [
        "src/styles.css"
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
