<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
//部件
  components: {

  },
//静态
  props: {

  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper,{

    })
  },
}
</script>

<style scoped>

</style>
