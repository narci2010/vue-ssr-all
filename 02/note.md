## 第二阶段

后端渲染 不包含 Ajax 数据

## 步骤

1. 拆分 JS 入口
2. 拆分 webpack 打包配置
3. 编写服务端渲染主体逻辑

npm run build:client // 打包浏览器端需要 bundle
npm run build:server // 打包 SSR 需要 bundle

npm start // 其实就是 node server/server.js，提供 http 服务
下面地址分别为服务器端渲染和客户端渲染
http://localhost:3000/index
http://localhost:3001/index
