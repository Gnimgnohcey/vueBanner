<template>
  <div id="app">
      <tabbar style="position: fixed">
        <tabbar-item link="/FirstPage">
          <img slot="icon" src="./assets/home.png">
          <span slot="label">Home</span>
        </tabbar-item>
        <tabbar-item link="/SecondPage">
          <img slot="icon" src="./assets/game.png">
          <span slot="label">MyGame</span>
        </tabbar-item>
        <tabbar-item link="/ThirdPage">
          <img slot="icon" src="./assets/chat.png">
          <span slot="label">Wechat</span>
        </tabbar-item>
      </tabbar>
      <transition  enter-active-class="animated bounceInRight">
      <keep-alive include="FirstPage,Music">
       <router-view></router-view>
      </keep-alive>
      </transition>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/close.less';

body {
  background-color: white;
}
</style>
