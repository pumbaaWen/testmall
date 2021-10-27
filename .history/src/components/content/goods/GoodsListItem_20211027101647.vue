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
  .goods-item {
    padding-bottom: 40px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

