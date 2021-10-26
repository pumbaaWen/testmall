<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator">
    </slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
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

</style>
