<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-tiem">
      <!-- <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.titel}}</div>
      </a> -->
      <button @click="bth"></button>
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
  methods: {
    bth() {
      console.log(this.recommends);
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
  }

  .recommend-item {
    flex: 1;
    font-size: 20px;
  }
</style>
