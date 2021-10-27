<template>
  <div class="tab-conteol">
    <div v-for="item in titles" :key="item.index" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
//部件
  components: {

  },
//静态
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
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
  .tab-conteol {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    height: 40px;
  }
  .tab-control-item {
    flex: 1;
  }
</style>