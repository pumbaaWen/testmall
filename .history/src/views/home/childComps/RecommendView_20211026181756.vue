<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.titel}}</div>
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
  }
}
</script>

<style scoped>

</style>
