---
group:
  path: /hyx
  title: 华宇讯
  order: 4
nav:
  path: /work
---

# 华宇讯

## 公司背景

深圳华宇讯有限公司

主打

- 苏打爱生活 企业生活服务电商平台，为机构客户提供电影文娱、生日/节令关怀、健康生活、旅游团建、学习成长等福利产品
- 淘福客 企业福利经营 SaaS 系统，依托福利平台体系支撑，帮助企业打造自有品牌、自有产品、自有平台、自有客户、自有现金流于一体的平台型福利营销公司

所在部门平台研发中心

岗位：前端研发 leader （前端团队成员 6 - 8 人）

工作核心

- 淘福客 saas 系统
- 大供应链、供应商体系等
- 内部 erp 系统

其中主要涉及的 pc 端后台管理系统有 10 几个，大部分以 pc 端为主，一小部分钉钉 H5 应用、pos 刷卡机等；
项目语言大多基于 react，一小部分 vue2 （卖座兑票系统），以及一小部分 vue3 (数据中心平台)；
平台框架基于 create-react-app umi vue-cli, 新开的几个项目都是基于 ts

基于以下背景

1：整体前端历史文档沉淀太少，几乎没有什么规范化

2：大部分老项目还没有前后端分离

2020.7.14 入职到至今二年左右，整理下所有的历程

主要成就

- 沉淀前端公共文档说明
- 前端公共组件、公共库等
- 前端公共脚手架、持续集成部署 cli 等

## 规范化

### git 规范

基于现有的平台部历史的 git 规范，整理适用于实际情况的 git 管理规范

![图 2](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/46eb10929017e23a1853b49700aaaadc7bd24439f35d52fef9d5192f4ef8aefe.png)

![图 6](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/d91ec1ca9381f05efa4e5fa7bcf61d4d89abefb84e831c4dc1ede058540be53a.png)

### 代码规范

参考部分开源的一些规范代码，初步形成自己的规范，并不断协调补充

![图 1](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/d195d63cc1f1de255a4946664bdfe44fbd7bdc1dd918b123798d793eca1b11c7.png)

### 发布规范

项目拆分主要负责人，每个项目有二个主要负责人，限制对应分支代码保护，只有对应项目的负责人才有权限合并发布项目，项目发布前先在发布日志补充相关发布日志，在钉钉群 @ 对应负责人，负责人帮忙检查是否更新，更新完以后打 tag

![图 7](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/41b6bf88a1ca1951c2f1f889803ce2d7138944a3bf9f3a7b23dd1668731841cf.png)

## 公共文档

沉淀所有历程的公共历史文档，方便新人对接，查阅文档等

![图 8](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/535554b9d1c0a78b7b19575452fbeb9b48455d81a1dee07c95bf90d405071a21.png)

![图 9](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/caea019b106a8da03fb22a707d75a77df92d2c0bab766f0a99786f40a0be4bf5.png)

## 前后端分离

基于现有项目大部分还都是前后端没有分离的项目，前后端没有分离，前端调试的时候非常不方便，需要同时部署 go 环境，跑后端代码，相应的分支管理也更混乱，因此刚入职我觉得最迫切的需要把老项目进行前后端分离

基于淘福客运营商系统进行前后端分离，重构代码踩坑，并整理文档，方便后续安排其他人员，升级其他老项目

![图 10](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/db981d3abb2384468e8ac4dd97a3d46b2234627007b05770d01c834716b2867b.png)

## 部署

### 历史方案

前后端分离以后对整个项目的部署也进行了升级，旧项目目前部署分多种情况

![图 11](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/884f945f6b941e0ab37a62efe86d1cbf4618d93344bad2ca7abbedd569f51d47.png)

![图 12](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/ef6b766a6385747e42feb4870eded4377efbf21dc23c66cb873864714a0f3ccd.png)

### 脚手架 cli

在阅读所有项目的发布方式及源码，为了方便用户一键发布项目，集成了公共的发布 cli 文件

![图 13](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/fddfdbfc939d6ee8b9ef54db666a2fde1c566408dda0c57076a85062a782ae58.png)

### 持续集成部署

发布 cli 还是需要手动执行，cli 和 drone 配合，把所有分离后的前端项目和新项目都接入持续集成平台

![图 14](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/e48f8ad9219e3ceb1d675a62161ee29c5edf772886a18ac0e05b68b1274792eb.png)

基于 drone 同时在内部集成 sonar 代码质量管理平台

## 脚手架

背景

在前后端分离的过程中，旧项目改造；新项目使用 vue3、umi3 的过程中，我们积累了一些经验，很多项目都有一些公共的配置，比如规范化、sentry，公共日志，公共组件、qiankun 嵌入、发布部署等

为了方便后续老项目的一键升级，减少升级代码框架的工作量；方便新项目架构配置的统一性；因此我们基于实战的经验形成了我们自己的脚手架

![图 15](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/c2406989a3f49fa05e09c169e93cb6d6cfce043cf25bddc9d771b2d8267f66b4.png)

### 内置

除了一些公共的配置，还支持一些开关选项

- 规范化 eslint prettier commitlint 等
- sentry 公共 sentry
- arms 外部重要项目额外接入 arms
- qiankun 接入 qiankun 公共方案
- 部署 统一的公共部署 cli，持续集成等

### 涉及知识点

除了公共的框架配置知识点，要做一个自己的脚手架 cli 涉及以下知识点

- chalk 颜色
- ora 进度条
- execa 执行各种命令行
- glob 遍历文件
- Mustache 模板语法
- commander 命令行
- inquirer 命令询问
- nunjucks 模板语法
- ejs 模板语法

还有其他开发一个脚手架 cli 需要的一些知识点等

目前该脚手架支持三种模板语法 Mustache nunjucks ejs

## 公共库

背景

很多 pc 端项目实际升级的过程中发现有非常多公用的组件，公共的工具函数，经常在一个方法在多个项目里面引入，因此建立了一个基础前端公共库，主要包含公共组件、工具函数等

![图 17](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/2f61e53747756e5d1e2c28ff70c6c11409b28bc5f1c39aa0690689b1bcc26d85.png)

![图 18](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/d3477603b34092b235142578a8190ac802373ccd4e7ecc1421a99b3acfde5ba7.png)

其中大部分工具函数都是旧项目直接迁移过来的，对于工具函数目前要求是必须写单元测试

下面介绍下部分组件和工具的场景

### MzThirdIframe

公共的 iframe 挂载器

旧项目里面经常需要挂载其他部门的一些 iframe 页面，每次挂载页面的时候，之前的做法是他们定义好路由，我们额外再写一个路由去挂载他们的页面。这样导致其他部门每一次菜单页面的新增，我们都需要额外声明路由，写一堆重复的代码，而且每次新增页面我们部门也需要改代码

基于上面的情况，封装了公共的 iframe 挂载器，其他部门新增菜单挂载的时候，只需要在菜单配置的额外一个公共的前缀 + 他们的路由 就可以自动识别，无需其他额外代码 （组件也兼容了一些历史的旧数据）。
然后使用的过程中，基于部分页面的不同性，做成不同的配置项，大部分配置是通用的

![图 21](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/7420c6094e1f517c5fb7b38d1293017fdaac9f5337e8d5d5f543705cc11abe72.png)

### MzQiankun

初期我们的项目所有的其他系统页面都是通过 iframe 嵌入的，因为 iframe 的局限性，我们考虑 [[qiankun](https://qiankun.umijs.org/zh) 这个挂载方式

初步在老项目验证完以后，然后把挂载的 qiankun 容器、qiankun 通信等公共方案迁移集成到了这个公共组件库

![图 20](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/112e935806deb20d78b9ccdaa22f8f9ba29596d03920d5a0a6ae043c3108f88c.png)

### mz-less

我们同一个体系的项目下面，大部分 ui 和产品要求风格需要统一，因此和 ui 沟通以后除了一版公共的设计规范，对于一些常用的组件集成到公共组件库里面，并且把 ui 设计的一些规范的 less 变量也集成到 mz-less 里面

![图 16](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/ab553190227f8b1ec22f9037c34f64ad9463df12de10a2f9fbfcfe9248787be4.png)

### MzNewSider

多个侧边栏 ui 需要统一风格，因此也集成到了里面，其中包含了大量的业务配置项

![图 19](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/77a23a144f7a449c63380a3fb1e6bcf8c61ded7c06a6271a56f49a0390477ca3.png)

## 动态表单重构

我们组还有个大头负责的就是我们公司内部的 erp 系统，其中内部 erp 里面有一个核心模块，动态表单：通过拖拉拽的方式快速生成一个表单页面用于我们的 erp 流程

但是有几个非常严重的问题

- 现有的 erp 表单功能，交互体验差，性能也差,尤其是设计时感觉很难配置
- 现有 erp 表单代码可维护性极差，文档缺失严重，动不动一个组 w 件 5000 -6000 行

基于以前对于动态可视化有一定的经验，以及考察了市面上开源的一些其他动态框架之后，决定花时间重构整个动态表单

重构注意的点

1. 代码质量，以及文档的完善度
2. 核心业务需要一步步拆分实现

### x-render

预研了 [x-render](https://xrender.fun/)

实验基础版本 [demo](https://form-render.yenmysoft.com.cn/#/)

![图 22](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/550ba62d652aedf66d5d93c5d85ba0a98d931bc3eb24c392e8c9314feef8487b.png)

[demo 文档](https://form-render-doc.yenmysoft.com.cn/guide/intro)

![图 23](https://qiniu.yenmysoft.com.cn/y-blog-images/docs/work/hyx/13ab8967ac72e421d57a8d6db9caf76193ce3ea7fca91e91002a231c22d67269.png)

后续因为一些功能需求还有 bug 在开源库上一般没那么快同步，而且有些功能配置可能官方上并不会同步，因此我们内部 fork 了该开源库进行维护更改，上面的 demo 只是最基础的版本（没有更新过），还存在比较多的问题

重构后的表单版本目前已经投入在生产环境使用，现有的新流程表单都是使用新表单进行设计配置，大部分核心业务、场景功能都已经满足

## 总结

整个的过程中，成长了很多，学习了很多。很多东西并不是一蹴而就，需要不断的积累经验

比如前期前后端分离并没有考虑那么多后续，只是打算快速先把前后端分离开来，后续一步步沉淀经验，抽离公共组件库、抽离公共脚手架、公共发布 cli 到最后的持续集成等

二年的时间里面学习了很多，总结如下

- 对前端工程化有更加深刻的理解，实践是检验真理的唯一标准
- 对脚手架 cli、发布部署 k8s、docker、nginx、持续集成有更加深刻的理解
- 对业务的理解能力进一步提升，在重构动态表单系统的时候，满足了大多数核心业务功能
- 对自我要求更高，有一定的代码洁癖。

管理方面的心得

一个人不可能完全的完成所有的任务，需要合理的分配资源，在这里谢谢团队的小伙伴们的支持

- 前端公共文档多沉淀，方便后续对接和维护
- 技术文档多沉淀，方便查询，以及共同实战提升 （踩坑总结后，指导安排其他人接入其他老项目等）
- 合理的分配资源，项目合理划分主要的负责人员
- 建立多个专项培养计划，成员自行选择感兴趣的内容进行学习，沟通监督进度等

目前的专项培养计划

- 脚手架
- 发布部署
- qiankun 微应用
- webpack
- 单元测试、端到端测试

不足的点：一直说好的 codereview 并没有推行下去，比较遗憾 😂

团队氛围也很重要，互动，吃吃喝喝，哈哈 😀
