<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index"> 
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../components/common/swiper'
export default {
  name: 'HelloWord',
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
