import Vue from  'vue'
import SecondaryMenu from './SecondaryMenu'

const SMenu={
  install:function(){
    Vue.component('SecondaryMenu',SecondaryMenu)
  }
}
export default  SMenu;
