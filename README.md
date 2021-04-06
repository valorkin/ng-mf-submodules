# Moved to module-federation monorepo

https://github.com/valorkin/module-federation

-------------
# Overview

This project demonstrates how `module federation` works in Angular based environment and its
one of the main source of truth with examples for internal Ariba SAP project, where we are going to use this 
unique way of connecting applications. 


## Steps to run this

#### Prerequisites

Make sure you have `yarn` available on your system
```html
install `yarn`
```
  

### Quick start

The fastest way how to get started is to run this below command which will build and launches 
everything 

```bash
yarn install && yarn start
```

## Project Structure

Project is divided up into 2 parts:
 - mf-builder
    - _This folder might change in the future and is used for the custom elements_ mainly now
 - packages 
    - Contains `Angular` applications
    
    
There are two main entry points to the applications:

- Access https://localhost:4200

This is the `packages/one-bx-shell-app` app which showcase main host app aggregating all 
micro-frontend application served by different microservices (`teams responsible to build 1BX App`) 



- Access https://localhost:5000

This entry point simulates CFLP App environment where we have a Shellbar on the host page and iFrame pointing
to the https://localhost:4200

Each application contains `webpack.extra.js` that extends existing Angular's CLI builder with ability to 
plug-in custom Webpack plugin and in here we define specifics for the _Module federated_ app using 
`ModuleFederationPlugin` plugin.

 - To learn more about `ModuleFederationPlugin` please see [docs](https://webpack.js.org/concepts/module-federation/)
 
 
### one-bx-shell-app

Host application that uses `@fundamenta-ngx/app-shell` components & API in order to dynamically load these applications:

### content-req-app

Remote app exposing `PR List` card shown on the main landing page.
 - Angular component uses `@fundamenta-ngx/core` components

### content-item-app

Remote app exposing `Your Favorite` card shown on the main landing page + `Item Detail Page`. Here we also 
demonstrate how **Routing** works:
 - Using Routing tag (see _ItemDetailPage_)
 - Using loadChildren dynamic imports to have sub-routing (see `ItemDetailsModule`)
 
### nx-app

Remote App show Module Federation with nrwl NX structure `/libs and apps/` .

### iframe-source-website

Remote website used as an iFrame source for `Quick Links` landing page card.

  _Remember currently we can federate 3 different types of microfrontend remote application:_
     
    - Angular Components & Modules
    - Web Components (Custom Elements)
    - iFrame 



### ngrx-app

Remote angular app using NGRx State management directly on the exposed component and sharing its state
with its child components


### content-recommended-categories

Remote App exposing Recomended Categories shown on the dashboard.





