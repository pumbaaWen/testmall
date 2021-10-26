<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
//部件
  components: {
    TabBar,
    TabBarItem
  },
//静态
  props: {

  },
//对象内部的属性监听，也叫深度监听
  watch: {

  },
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {

  },
//方法表示一个具体的操作，主要书写业务逻辑；
  methods: {

  },
//请求数据
  created() {

  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
