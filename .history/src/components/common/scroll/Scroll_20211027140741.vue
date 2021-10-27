<template>
  <div class="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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

  },
}
</script>

<style scoped>

</style>
