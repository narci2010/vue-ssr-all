# SSR SPA sample using Vue.js with TypeScript and Firebase Hosting & Cloud Functions

This is a sample App built by Vue CLI3. You can run this app on both localhost and Web.

If you want to run this app in the real world, use Firebase. All settings is included in this sample.

The same app using Nuxt.js instead of Vue CLI3 is [here](https://github.com/Mizumaki/Nuxt_SSR_TypeScript_Firebase_Workbox_example).

## Usage

Install dependencies in root directory and functions directory:

```
// in root directory
yarn

// in funcitons directory
yarn
```

Build app:

```
yarn build
```

Run app in localhost:

```
yarn serve:pro

// now, app is served in http://localhost:8080
```

In fact, this sample doesn't provide dev server, because I can't do it.
If you have good answer for this issue, please pull request it!

### deploy to Firebase

First, build this app.

Second, following instruction in [Firebase Official page](https://firebase.google.com), set up the environments.

If you create project and [install and set up firebase cli](https://firebase.google.com/docs/cli), you are ready to deploy.

```
yarn deploy
```

## References

I use these example project as references.
Thanks!

- [vue ssr guide](https://ssr.vuejs.org)
- [vue-cli-ssr-example](https://github.com/eddyerburgh/vue-cli-ssr-example)
- [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

npm i firebase -g

functions 目录先执行 npm install
这个项目需要
npm upgrade caniuse-lite browserslist 或
yarn upgrade caniuse-lite browserslist

Building for production...Browserslist: caniuse-lite is outdated. Please run next command `yarn upgrade caniuse-lite browserslist`
npm i caniuse-lite browserslist

真 tmd 的怪事：
ERROR Failed to compile with 1 errors  
This relative module was not found:

- ./app in ./src/entry-client.ts
  app.ts 改成 main.ts 就可以了

SSR，首屏是服务器端渲染的纯 HTML，之后 Vue 在客户端浏览器接管，并通过客户端激活 (client-side hydration)机制跟服务器端交互。
