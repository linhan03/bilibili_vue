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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
