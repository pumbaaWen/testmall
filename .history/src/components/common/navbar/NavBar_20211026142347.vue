<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
//部件
  components: {

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
  .nev-bar {
    display: flex;
    line-height: 44px;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
