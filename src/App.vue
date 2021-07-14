<template>
  <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooder"/>
  </div>
</template>

<script>
// 底部导航组件
import FooterGuide from './components/FooterGuide'

export default {
  name: 'App',
  components: {
    // 底部导航组件
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
