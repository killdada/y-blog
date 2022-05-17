import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'yen blog',
  mode: 'site',
  base: '/y-blog/',
  publicPath: '/y-blog/',
  // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
