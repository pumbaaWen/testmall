<template>
  <div class="goods">
    {{goods}}
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  //部件
  components: {

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
