 # PonyRacer

 Create your first project in Angular2 by hands. No use of angular-cli or templates :)
 
 ## Pre-requisites
 * node 7.1
 * typescript 2.1.4
 ```bash
 npm install -f typescript
 ```
 * npm 3.10.9

 ## Create first app
 #### define typescript enviroment
 ```bash   
 tsc --init --target es5 --sourceMap --experimentalDecorators --emitDecoratorMetadata
 ```
 Edit tsconfig and add `include` and `types`:
 ```json
 {
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    },
    "exclude": [
            "node_modules"
    ],
    "include": [
            "src/**/*"
    ],
    "types" : ["core-js"]
}
```
 
 #### create initial package.json
 
 ```bash
 npm init
 ```
 #### install angular components

```bash
npm install --save @angular/core@2.2.0 @angular/compiler@2.2.0 @angular/common@2.2.0 @angular/platform-browser@2.2.0 @angular/platform-browser-dynamic@2.2.0 rxjs@5.0.0-beta.12 reflect-metadata@0.1.8 zone.js@0.6.21
npm install --save-dev @types/core-js
```

>NOTE: to avoid the error `error TS2304: Cannot find name 'Promise'` install @types/core-js

#### install systemjs
To provide es5 support of commonjs (dynamic module loading), use systemjs

```bash
 npm install --save systemjs@0.19.41 
 ```

See [index.html](index.html) on how to configue SystemJS

#### Code your first app
See `src` folder for code source.
* create components
* creeate angular module
* create main
* create index.html

#### Run the app
* Install http server
```bash
npm install -g http-server
```
* Run
```
http-server
```
Go to http://localhost:8000/

> NOTE: in main.js I had to specify `import {PonyRacerAppComponent} from './app.component.js'` for SystemJS to be able to load the module.

