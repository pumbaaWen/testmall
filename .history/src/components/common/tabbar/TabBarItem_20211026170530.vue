<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItme',
  data() {
    return {
      // isActive: true
    }
  },
//部件
  components: {

  },
//静态
  props: {
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
//对象内部的属性监听，也叫深度监听
  watch: {

  },
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
//方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    },
  },
//请求数据
  created() {

  },
  mounted() {
    
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>
