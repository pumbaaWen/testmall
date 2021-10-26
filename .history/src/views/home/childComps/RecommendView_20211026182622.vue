<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-tiem">
      <!-- <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.titel}}</p>
      </a> -->

      <div>{{item.link}}</div>
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
  }

  .recommend-item {
    flex: 1;
  }
</style>
