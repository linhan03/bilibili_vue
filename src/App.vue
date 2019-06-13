<template>
  <div id="app" class="app-container">
   <!-- 顶部Header -->
    <mt-header fixed title="Mint_UI Vue Project"></mt-header>
   <!-- 中间路由 route-view -->
  <div>123</div>
   <!-- 底部Tabbar -->
  <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge mui-badge-danger">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.app-container{
  padding-top: 40px;
}
</style>
