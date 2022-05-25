import { defineConfig } from 'dumi';

const QiniuWebpackPlugin = require('better-qiniu-webpack-plugin');

const isGithub = process.env.GITHUB === '1';
let isQn = process.env.USEQN === '1';
let qiniuConfig = {};
let publicPath = '/y-blog/';

try {
  qiniuConfig = require('./.vscode/settings.json');
} catch (error) {
  console.info(
    '没有提供七牛云相关配置，无法使用vscode插件 markdownimg，以及无法构建部署到七牛云',
  );
  isQn = false;
}

export default defineConfig({
  title: ' ',
  hash: true,
  favicon: 'http://qiniu.yenmysoft.com.cn/y-blog-images/yen.ico',
  logo: 'http://qiniu.yenmysoft.com.cn/y-blog-images/yenlogo.png',
  mode: 'site',
  // 七牛云输出的目录更改成y-blog，方便上传到七牛云对应的目录
  outputPath: isQn ? 'y-blog' : 'dist',
  base: isGithub || isQn ? publicPath : '/',
  // 七牛云加上域名
  publicPath: isQn || isGithub ? publicPath : '/',
  // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  exportStatic: {},
  navs: [null, { title: 'Git', path: 'https://github.com/killdada/y-blog' }],
  // more config: https://d.umijs.org/config
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production' && isQn) {
      // https://github.com/zzetao/qiniu-webpack-plugin
      config.plugin().use(QiniuWebpackPlugin, [
        {
          accessKey: qiniuConfig['markdown-image.qiniu.accessKey'], // 必填
          secretKey: qiniuConfig['markdown-image.qiniu.secretKey'], // 必填
          bucket: qiniuConfig['markdown-image.qiniu.bucket'], // 必填
          bucketDomain: qiniuConfig['markdown-image.qiniu.domain'], // 必填
          matchFiles: ['!*.map'],
          uploadPath: '/y-blog',
          batch: 10,
          deltaUpdate: true,
          // 直接覆盖上传
          cover: true,
        },
      ]);
    }
  },
});
