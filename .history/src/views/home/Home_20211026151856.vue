<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {getHomeMultidata} from '../../network/home'
export default {
  name: "Home",
  data() {
    return {
      banner: []

    }
  },
//部件
  components: {
    NavBar
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
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      this.result = res
    })
  },
  mounted() {

  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
