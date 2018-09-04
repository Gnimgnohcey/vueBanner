<template>
    <div>
      <x-header style="background-color:#000;" :left-options="{showBack: false}" >视频<a style="color: white;font-weight: bolder" @click="getOther" slot="right">换一批</a></x-header>
        <div>
          <grid v-for="(val ,index) in msg"class="videoCard" :key="index">
            <grid-item :link="{path:'/videoplay'}"  >
              <div style="width: 100%;height: 100%" @click="changeState(val['mp4_url'])">
              <div class="leftBorder" >
                 <img class="leftImg" v-bind:src="val['cover']" width="80%" height="110px"/>
              </div>
              <div class="rightBorder">
                  <div class="video_title">{{val['title']}}</div>
                  <div class="video_news">
                    <span v-for="(value,indextow) in val['extraTags']">{{value}}</span>
                  </div>
              </div>
              </div>
            </grid-item>
          </grid>
        </div>
    </div>

</template>

<script>
   // import state from '../store/state'
   import {mapActions} from 'vuex'
   import {Grid, GridItem, GroupTitle, XHeader} from 'vux'
   import axios from 'axios'

export default {
     name: 'FirstPage',
     data () {
       return {
         msg: 'a'
       }
     },
     methods: {
       ...mapActions(['changeState', 'replaceNew']),
       getOther () {
         axios.get('http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&size=20')
           .then(function (response) {
             this.msg = response.data['视频']
           }.bind(this))
           .catch(function (err) {
             console.log(err)
           })
       }
     },
     components: {
       Grid,
       GridItem,
       GroupTitle,
       XHeader
     },
     mounted () {
       axios.get('http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&size=20')
        .then(function (response) {
          this.msg = response.data['视频']
        }.bind(this))
        .catch(function (err) {
          console.log(err)
        })
     }
}
</script>

<style scoped>
  .videoCard{
     position: relative;
  }
   .leftBorder,.rightBorder{
        display: inline-block;
   }
   .leftBorder{
     height: 100%;
     width:50%;
   }
   .rightBorder{
     height: 100%;
     width:50%;
     position: absolute;
     top: 20px;
     right: 8%;
   }
   .video_title{
     width: 100%;
     font-size:1rem;
     font-weight: bolder;
     font-family: "Comic Sans MS";

   }
  .video_news{
    position: absolute;
    bottom: 30%;
    width: 100%;
    height: 20px;
  }
  .video_news span{
    font-size: 0.3rem;
    color: gray;
    font-weight: bolder;
    margin-left: 10px;
  }
</style>
