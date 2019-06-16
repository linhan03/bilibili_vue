<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id === 0?'mui-active':'']"
            v-for="item in cates"
            :key="item.id"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
// // Vue.prototype.mui = mui;

export default {
  name: "photolist",
  data() {
    return {
      cates: [], //所有分类列表
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0); //默认请求 全部 种类
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("api/getimgcategory")
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            this.cates = result.body.message.unshift({ title: "全部", id: 0 });
          } else {
            Toast("获取图片种类失败");
          }
        })
        .catch(error => {
          Toast("请求图片种类失败");
        });
    },
    getPhotoListByCateId(cateId) {
      this.$http
        .get("api/getimage/" + cateId)
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            this.list = result.body.message;
          } else {
            Toast("获取图片失败");
          }
        })
        .catch(error => {
          Toast("请求图片失败");
        });
    }
  }
};
</script>

<style scoped>
* {
  /* 移除警告 */
  touch-action: pan-y;
  /* chrome 为了提高页面的滑动流畅度 */
  /* CSS属性 touch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）。 */
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}

.photo-list li {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  position: relative;
}

.photo-list li img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.photo-list li img {
  width: 100%;
  vertical-align: middle;
}

.photo-list li .info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 84px;
}

.photo-list li .info .info-title {
  font-size: 14px;
}

.photo-list li .info .info-body {
  font-size: 13px;
}
</style>
