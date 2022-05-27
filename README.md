# 文档本地开发

`yarn`

`yarn start` or `yarn dev`

基于 vscode，借助 [markdown-image 插件](https://github.com/imlinhanchao/vsc-markdown-image/blob/HEAD/README.zh-cn.md) 插件，复制粘贴图片到 md 文件自动上传到 [七牛云](https://portal.qiniu.com/home)

文档的书写等参考 dumi

# 常用命令

- `yarn start` | `yarn dev` 文档启动
- `deploy:netlify` netlify cli 里面执行的发布命令
- `deploy:qn` 七牛云的发布命令
- `deploy:github` github pages 的发布命令
- `deploy:git-qn` 七牛云、github pages 的发布命令

# 文档部署

目前部署完以后有四个访问地址

- [github page](https://killdada.github.io/y-blog/)
- [netlify](https://yenblog.netlify.app/)
- [qiniu](http://qiniu.yenmysoft.com.cn/y-blog/)
- [vercel](https://www.yenmysoft.com.cn/)

## 1：github-pages

文档部署参考 [GitHub Pages](https://d.umijs.org/zh-CN/guide/faq#%E9%83%A8%E7%BD%B2%E5%88%B0github-pages)

`yarn deploy:github` 把文档更新到 github pages

## 2：github 网络问题

基于[netlify](https://www.netlify.com/)

[netlify 参考文档](https://juejin.cn/post/6844904100329422861)

代码提交到 master 分支自动触发远程的 netlify cli 命令，命令里面会执行 `yarn deploy:netlify` 的构建

## 3：直接把整个发布后的目录上传到七牛云

`yarn deploy:qn`

基于 [qiniu-webpack-plugin](https://github.com/zzetao/qiniu-webpack-plugin)

因为内部源码可能是当前 webpack 版本不一致，导致验证失败，因此基于 [patch-package](https://www.npmjs.com/package/patch-package) 打个补丁

**目前发布配置开启了 umi exportStatic 上传到 七牛云 cdn 的文件大多数都是 html，导致 cdn 缓存特别严重，即使用户开启了禁用浏览器缓存也会命中缓存，可以在 cdn 控制台手动进行刷新**

[七牛云 cdn 刷新](https://portal.qiniu.com/cdn/refresh-prefetch)

> 七牛云注意防盗链、还有告警配置等。具体参考官方说明文档

## 4: vercel

基本配置操作跟 netlify 差不多，[官网](https://vercel.com/)

# 参考

汇总参考文档

- [dumi](https://d.umijs.org/zh-CN)
- [markdown-image](https://github.com/imlinhanchao/vsc-markdown-image/blob/HEAD/README.zh-cn.md)
- [netlify](https://www.netlify.com/)
- [netlify 参考文档](https://juejin.cn/post/6844904100329422861)
- [七牛云](https://portal.qiniu.com/home)
- [七牛云 webpack 插件](https://github.com/zzetao/qiniu-webpack-plugin)
- [patch-package](https://www.npmjs.com/package/patch-package)
- [patch-package 补丁](https://juejin.cn/post/6962554654643191815)
- [vercel](https://vercel.com/)

# License

Copyright © 2022, yen. Released under the MIT License.
