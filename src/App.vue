<template>
  <div id="app">
    <van-nav-bar title="Vue" />
    <router-view></router-view>
    <van-tabbar route v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :badge="num" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/about">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:2
    }
  }
};
</script>

<style>
#app .van-nav-bar {
  background-color: yellowgreen;
}
.van-nav-bar .van-nav-bar__title {
  color: black;
}
</style>
