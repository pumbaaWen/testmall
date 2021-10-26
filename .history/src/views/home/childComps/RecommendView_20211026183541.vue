<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-tiem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
//部件
  components: {

  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
  }

  .recommend-tiem {
    flex: 1;
  }
  .recommend-tiem img {
    width: 65px;
    height: 65px;
  }
</style>
