<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab-bar',
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
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1);
  }
</style>
