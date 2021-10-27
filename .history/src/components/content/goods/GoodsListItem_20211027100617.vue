<template>
  <div>
    <img :src="goodsItem.show.img" alt="">
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  data() {
    return {

    }
  },
//部件
  components: {

  },
//静态
  props: {
    goodsItem: {
      type: Object,
      default() {
        return[]
      }
    }
  },
}
</script>

<style scoped>

</style>

