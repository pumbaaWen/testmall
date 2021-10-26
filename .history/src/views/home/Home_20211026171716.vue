<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
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
import NavBar from '../../components/common/navbar/NavBar.vue'
import {getHomeMultidata} from '../../network/home'
import {Swiper, SwiperItem} from '../../components/common/swiper'
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
//部件
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
//请求数据
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    });
    log()
  },
  methods: {
    log ()  {
      console.log(this,banner);
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
