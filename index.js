import  vuebanner from './vuebanner'
import Vue from 'vue'
const VueBanner={
  install:function(){
    Vue.component("VueBanner",vuebanner);
  }
}
export default VueBanner;
