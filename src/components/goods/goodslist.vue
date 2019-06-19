<template>
  <div class="goods-list">
    <div class="goods-item">
      <img
        src="https://i0.hdslb.com/bfs/archive/3e2dffa9ef67923335c3be41f0ad9a4e1d1627d0.png@336w_190h.webp"
        alt
      >
      <h1 class="title">讲得还不错 言简意赅</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://i0.hdslb.com/bfs/archive/3e2dffa9ef67923335c3be41f0ad9a4e1d1627d0.png@336w_190h.webp"
        alt
      >
      <h1 class="title">讲得还不错 言简意赅</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://i0.hdslb.com/bfs/archive/3e2dffa9ef67923335c3be41f0ad9a4e1d1627d0.png@336w_190h.webp"
        alt
      >
      <h1 class="title">讲得还不错 言简意赅</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}

.goods-list .goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 3px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* min-height: 293px; */
}
.goods-list .goods-item img {
  width: 100%;
}
.goods-list .goods-item .title {
  font-size: 14px;
}

.goods-list .goods-item .info {
  background-color: #eee;
}

.goods-list .goods-item .info p {
  margin: 0;
  padding: 5px;
}
.goods-list .goods-item .info .price {
  background-color: #eee;
}
.goods-list .goods-item .info .price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}

.goods-list .goods-item .info .price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}

.goods-list .goods-item .info .sell {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
