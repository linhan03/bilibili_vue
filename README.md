# bilipro

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
# 这是一个Vue项目 

# [开源协议的异同](https://img-my.csdn.net/uploads/201204/08/1333882488_6318.png)

## 传统命令提交git
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页APP组件
    1. 完成Header区域，使用Mint-UI中的Header组件
    2. 制作底部的Tabbar区域，使用MUI的Tabbar.html
        + 制作 购物车 小图标：
        + 拷贝css样式和ttf文件
        + 为 购物车 小图标 添加对应样式
    3. 要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造 tabbar为router-link 设置路由高亮

## 点击tabbar 中的路由链接，展示对应路由组件

## 制作首页轮播图布局，加载首页轮播图数据
    1. 获取数据，使用vue-resource
    2. 使用 vue-resource 的 this.$http.get 获取数据
    3. 获取到的数据，保存到 data 身上
    4. v-for 渲染 data

## 改造 九宫格 区域样式

## 改造新闻资讯 路由链接 页面制作（绘制页面->使用vue-resource获取数据->渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
    1. 把列表中的每一项改造为 router-link ，并提供唯一ID标识符
    2. 创建新闻详情组件 newsinfo.vue
    3. 添加对应路由

## 实现 新闻详情 的页面布局和数据渲染

## 单独封装一个 comment.vue 评论子组件
    1. 创建组件
    2. 需要的页面引入组件`import component from './comment.vue'`
    3. 使用 components 属性导入组件
    4. 以标签形式 在页面中引用

## 获取所有评论数据显示到页面中

## 实现店家加载更多评论的功能
    1. 为 加载更多按钮，绑定事件，请求下一页数据
    2. pageIndex++,重新调用this.getComments()
    3. 将新评论追加到commentList

## 发表评论 
    1. textarea 双向数据绑定
    2. 事件绑定 
    3. 数据校验
    4. vue-resource 保存数据
    5. 评论发表成功后，重新刷新列表，以查看最新评论x
    6. 评论保存后只在前端添加自组评论,不重新请求评论列表√

## 改造图片分享 按钮为路由链接并显示对应组件

## 绘制图片列表 组件页面结构并美化样式

## 实现 图片详情 中缩略图的功能
    1. 使用插件 vue-preview
    2. 获取所有图片列表并渲染

    1. 顶部的滑动条 取消 .mui-fullscreen ,导入对应js文件并初始化,mui.js和bundle.js严格模式冲突:禁用webpck中严格模式
    [babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode)
    [在vue_cli上使用mui或引入mui.js各种报错及问题](https://blog.csdn.net/u012815877/article/details/81187826)
        + 引用mui.js后在/home/photolist刷新后报错[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See URL 并且无法切换底部tabbar
        + 解决：把tabbar的样式类mui-tab-item的样式复制并重命名mui-tab-item-llb 难道是js里对dom的操作失效？但是还是能正常工作。是mui.js操作的csss相关而不是js相关?
        + 在mouted时挂载mui的scroll
        + 获取所有分类
    2. 底部的图片内容,懒加载，之后渲染数据

## 实现图片列表懒加载改造 和样式美化

## 实现点击图片 跳转到 图片详情页面
    1. 把li改为router-link时加上 tag="li"

## 实现 详情页面布局和美化，同时获取数据，渲染页面

## 绘制 商品列表 页面基本结构并美化

## 尝试在手机上去进行项目的预览和测试
    1. 保证手机和开发项目的电脑处于同一个wifi环境，手机可以访问电脑的IP
    2. 打开 package.json 在dev脚本中 添加一个 --host 指令，把当前电脑的WIFI IP地址，设置为 --host 的指令值

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
