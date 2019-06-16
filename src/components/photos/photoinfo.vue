<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview
        :slides="slide1"
        @close="handleClose"
        class="preview-img"
        v-for="(item,index) in list"
        :src="item.src"
        height="100"
        @click="$preview.open(index,list)"
        :key="item.src"
      ></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content"></div>

    <!-- 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {}, //图片详情
      list: [] //缩略图数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .get("api/getimageInfo/" + this.id)
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            this.photoinfo = result.body.message[0];
          } else {
            Toast("获取图片信息失败");
          }
        })
        .catch(error => {
          Toast("请求图片信息失败");
        });
    },
    getThumbs() {
      this.$http
        .get("api/getthumimage/" + this.id)
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            result.body.message.forEach(item => {
              item.w = 600;
              item.h = 400;
            });
            this.list = result.body.message;
          } else {
            Toast("获取缩略图失败");
          }
        })
        .catch(error => {
          Toast("请求缩略图失败");
        });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<style scoped>
.photoinfo-container {
  padding: 3px;
}
.photoinfo-container h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px;
}

.photoinfo-container .subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.photoinfo-container .content {
  font-size: 13px;
  line-height: 30px;
}

.photoinfo-container .thumbs img{
    margin: 10px;
    box-shadow: 0 0 8px #999;
}
</style>
