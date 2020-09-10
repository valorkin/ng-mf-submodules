# install
```bash
## v1

#install lerna
npm ci
#install npm in all micro apps
lerna bootstrap
#run default build in each micro app, it's critical for angular
lerna run build

#install npm in mf builder
npm i --prefix ng9-module-federation-builder/
# run mf builder
npm run build --prefix ng9-module-federation-builder/
```

```bash
### v2
npm i
```

###hacks and tricks
```bash
npm i -D ng9-module-federation-builder/libs/*.tgz --prefix packages/ng9-app/
```

###errors
```
ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'bindingStartIndex' of null
TypeError: Cannot read property 'bindingStartIndex' of null

733.49b6cbefb1628a6e2e02.js:2 ERROR Error: Uncaught (in promise): Error: ASSERTION ERROR: Type passed in is not ComponentType, it does not have 'ɵcmp' property.
Error: ASSERTION ERROR: Type passed in is not ComponentType, it does not have 'ɵcmp' property.
```

