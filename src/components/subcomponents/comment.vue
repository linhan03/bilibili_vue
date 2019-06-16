<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="输入评论内容(最多120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12：12</div>
        <div class="cmt-body">锄禾日当午</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12：12</div>
        <div class="cmt-body">锄禾日当午</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in commentList" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content==='undefined'?'这个用户什么都没说':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "comment",
  data() {
    return {
      pageindex: 1, //默认展示第一页数据
      commentList: [],
      msg: "" //评论输入内容
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    //   获取评论
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.commentList = this.commentList.concat(result.body.message);
          } else {
            Toast("获取评论失败");
          }
        })
        .catch(err => {
          Toast("请求评论失败");
        });
    },
    // 加载更多
    getMore() {
      this.pageindex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("评论不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.body.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.commentList.unshift(cmt);
            this.msg = "";
          } else {
            Toast("发表评论失败");
          }
        })
        .catch(err => {
          Toast("保存评论失败");
          this.msg = "";
        });
    }
  },
  props: ["id"]
};
</script>

<style scoped>
.cmt-container h3 {
  font-size: 18px;
}

.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}

.cmt-list {
  margin: 5px 0;
}

.cmt-list .cmt-item {
  font-size: 13px;
}

.cmt-list .cmt-item .cmt-title {
  line-height: 30px;
  background-color: #ccc;
}

.cmt-list .cmt-item .cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>
