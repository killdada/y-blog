import { defineConfig } from 'dumi';

const isGithub = process.env.GITHUB === '1';

export default defineConfig({
  title: 'yen blog',
  mode: 'site',
  base: isGithub ? '/y-blog/' : '/',
  publicPath: isGithub ? '/y-blog/' : '/',
  // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
