import { defineConfig } from 'umi';

const QiniuWebpackPlugin = require('better-qiniu-webpack-plugin');

let qiniuConfig = {};

try {
  qiniuConfig = require('./.vscode/settings.json');
} catch (error) {
  console.info(
    '没有提供七牛云相关配置，无法使用vscode插件 markdownimg，以及无法构建部署到七牛云',
  );
}

export default defineConfig({
  chainWebpack: (config) => {
    if (
      process.env.NODE_ENV === 'production' &&
      Object.keys(qiniuConfig).length
    ) {
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
