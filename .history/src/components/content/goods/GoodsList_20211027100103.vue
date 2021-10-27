<template>
  <div class="goods">
    <goods-list-item/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  //部件
  components: {
    GoodsListItem
  },
  //静态
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>

</style>
