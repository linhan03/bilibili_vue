<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论区域 -->
    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../subcomponents/comment";
export default {
  data() {
    return {
      id: this.$route.params.id, //将url地址中传递的id挂载到data上，方便以后调用
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http
        .get("api/getnew/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.newsinfo = result.body.message[0];
          } else {
            Toast("获取新闻详情失败");
          }
        })
        .catch(err => {
          Toast("请求新闻详情失败");
        });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>   

<style scoped>
.newsinfo-container {
  padding: 0 4px;
}
.newsinfo-container .title {
  font-size: 14px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.newsinfo-container .subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.newsinfo-container .content img {
  width: 100%;
  height: 100%;
}
</style>

