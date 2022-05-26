import { defineConfig } from 'dumi';

// 是否是根节点部署
const isDeployRoot = process.env.DEPLOY_ROOT === '1';
// 非跟节点部署的前缀
let publicPath = '/y-blog/';

export default defineConfig({
  title: ' ',
  hash: true,
  favicon: 'http://qiniu.yenmysoft.com.cn/y-blog-images/yen.ico',
  logo: 'http://qiniu.yenmysoft.com.cn/y-blog-images/yenlogo.png',
  mode: 'site',
  // 七牛云输出的目录更改成y-blog，方便上传到七牛云对应的目录
  outputPath: 'y-blog',
  base: !isDeployRoot ? publicPath : '/',
  // 七牛云加上域名
  publicPath: !isDeployRoot ? publicPath : '/',
  // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  exportStatic: {},
  navs: [null, { title: 'Git', path: 'https://github.com/killdada/y-blog' }],
  // more config: https://d.umijs.org/config
});
