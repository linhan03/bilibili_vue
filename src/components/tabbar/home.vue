<template>
  <div>
    <mt-swipe :auto="4000" :show-indicators="false">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>

    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="../../images/娱乐.png" alt>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="../../images/画画.png" alt>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
            <img src="../../images/商店.png" alt>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/天气.png" alt>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/视频.png" alt>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/相机.png" alt>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "home",
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 返回对象{status:0,{url:xxx,img:xxx}}
      this.$http
        .get("api/getlunbo")
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message;
          } else {
            Toast("加载轮播图失败");
          }
        })
        .catch(error => {
          Toast("请求轮播图失败");
        });
    }
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1) {
  background-color: red;
}
.mint-swipe-item:nth-child(2) {
  background-color: blue;
}
.mint-swipe-item:nth-child(3) {
  background-color: cyan;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
  width: 60px;
  height: 60px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>
