<template>
  <div class="recommend">
    <div>

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
