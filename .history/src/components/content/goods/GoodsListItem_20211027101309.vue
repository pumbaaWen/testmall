<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
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

