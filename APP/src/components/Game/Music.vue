<template>
  <div>
    <x-header :left-options="{backText: ''}" style="background-color: #20b907;"><span style="font-weight: bolder;color: black">Music</span></x-header>
    <grid :cols="2" :show-lr-borders="false">
      <grid-item link="/musicText" class="outBoxCard" v-for="(val,index) in newMsg" :key="index">
        <div @click="setIndex(index)">
        <img :src="val['album']['blurPicUrl']" class="pic"  width="100%" height="140px" alt=""/>
        <div><span class="MusicTitle">{{val.name}}</span></div>
        <span class="xqText">Artist:</span>
        <span class="xqText"  v-for="(vals,indexs) in val.artists">{{vals.name}}</span>
        <span class="album">专辑:{{val.album.name}}</span>
        </div>
      </grid-item>
    </grid>
    <flexbox style="margin-top: 10%">
      <flexbox-item>
        <x-button  :gradients="['#A644FF', '#FC5BC4']" type="primary" @click.native="prep" class="xbut">Prep</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" class="xbut" :gradients="['#FF2719', '#FF61AD']" @click.native="next">Next</x-button>
      </flexbox-item>
    </flexbox>
     <div style="width: 100%;margin-bottom: 25%"></div>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle, XHeader, XButton, Flexbox, FlexboxItem } from 'vux'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {
  name: 'joke',
  data () {
    return {
      msg: '',
      numb: 0,
      Musicpage: 0
    }
  },
  computed: {
    newMsg () {
      var arr = []
      if (this.msg) {
        for (let i = this.numb; i < this.numb + 10; i++) {
          arr.push(this.msg[i])
        }
      }
      return arr
    }
  },
  methods: {
    setIndex (index) {
      let lastIndex = (this.Musicpage * 10) + index
      localStorage.setItem('nowIndex', lastIndex)
    },
    getMsg: function () {
      this.$http.get(API_PROXY + 'http://music.163.com/api/playlist/detail?id=19723756')
        .then(function (response) {
          this.msg = response['data']['result']['tracks']
          let arr = []
          let picurl = []
          let musicName = []
          for (let i = 0; i < this.msg.length; i++) {
            arr.push(this.msg[i].id)
            picurl.push(this.msg[i]['album']['blurPicUrl'])
            musicName.push(this.msg[i].name)
          }
          localStorage.setItem('musicId', arr)
          localStorage.setItem('picurl', picurl)
          localStorage.setItem('musicName', musicName)
        }.bind(this))
        .catch(function (err) {
          console.log(err)
        })
    },
    prep () {
      if (this.numb >= 9) {
        this.numb = this.numb - 10
        this.Musicpage--
      } else {
        alert('No More,this is the first page')
      }
    },
    next () {
      if (this.numb <= 89) {
        this.numb = this.numb + 10
        this.Musicpage++
      } else {
        alert('NO More,this is the last page')
      }
    }
  },
  created () {
    this.getMsg()
  },
  components: {
    XHeader,
    Grid,
    GridItem,
    GroupTitle,
    XButton,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style scoped>

   .outBoxCard{
     position: relative;
     height: 220px;
   }
  .MusicTitle{
    color: black;
    font-size: 0.8rem;
    font-weight: bolder;
    margin-left:15px;
  }
  .xqText{
    font-size: 0.6rem;
    font-weight: bolder;
    color: gray;
  }
  .album{
    font-family: "Courier New";
     font-size: 0.6rem;
     font-weight: bolder;
     color: #666666;
    position: absolute;
    right: 7px;
    bottom: 0px;
  }
   .xbut{
      width:80%;font-size: 1.2rem;border-radius: 16px;font-weight: bolder;font-family: 'Courier New'
   }

</style>
