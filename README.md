# Polyfill finally from library on Firefox

On Firefox, the finally method from Promise prototype don't work when a Vue project is included as a library.

## Steps to reproduce

From `finlib` folder, launch `npm i` and then `npm run build:lib` to build the Vue project as a library.

Publish it in a npm registry (i used [Verdaccio][]).

> I don't test it using `npm link`.

From `finhost` folder, launch `npm i` (you propably should edit `.npmrc` to add your registry URL and remove `package-lock.json` before).

Launch the project using `npm run serve` and open the app on:

* Firefox - You should see this message inside the terminal:
  ```
  [Vue warn]: Error in created hook: "TypeError: promise.finally is not a function"
  
  found in
  
  ---> <HelloWorld> at src/components/HelloWorld.vue
         <App> at src/App.vue
           <Root> vue.runtime.esm.js:619
  ```
* Chrome - There is a native usage, you will see:
  ```
  Finally should work
  ```

## What is expected?

The `finally` method from `Promise` should work without side effects from another Vue library.

## What is actually happening?

The `finally` method from `Promise` don't work on Firefox.

## Any additional comments? (optional)

Maybe Firefox is not the only browser with this issue.

[verdaccio]: https://verdaccio.org/
