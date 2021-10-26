<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script
        MainTabBar>
<style>
  @import "assets/css/base.css"
</style>
