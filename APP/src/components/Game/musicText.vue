<template>
    <div style="background: yellow">
      <x-header :left-options="{backText: ''}" style="background-color:black">{{musicName[musicId ]}}</x-header>
      <audio src="" autoplay="autoplay" ref="musicAud" style="background: black;" @ended="continued" @error="jump">
      Your browser does not support the audio element.
      </audio>
      <swiper height="450px" style="overflow-y: scroll;background: black">
        <swiper-item class="black">
          <div class="title fadeInUp animated">
            <div style="text-align:center;position: fixed;top: 10px;right: 10px">
              <inline-x-switch v-model="loopvalue"></inline-x-switch>
            </div>
             <div class="imgbox">
               <img :src="allMusicPicUrl[musicId]" width="100%" height="100%"/>
             </div>
          </div>
        </swiper-item>
        <swiper-item class="black"><div class="title fadeInUp animated">
            <div style="position:relative;height: 420px;overflow-y: scroll">
              <div style="position: absolute;top: -0px;width: 100%" ref="moves">
              <p class="Texts" style="width: 100%;text-align: center;font-size: 1rem;color:#20b907" v-for="val in handleMsg">{{val | clearlyrcTime}}</p>
              <!--<div style="font-size: 1rem;color:#20b907;text-align: center" v-html="handleMsg"></div>-->
              </div>
            </div>
         </div>
        </swiper-item>
        <swiper-item class="black">
          <div class="title fadeInUp animated">
                <div class="vux-circle-demo">
                  <br>
                  <div style="width:150px;height:150px;">
                    <x-circle
                      :percent="percent"
                      :stroke-width="5"
                      :stroke-color="['#36D1DC', '#5B86E5']">
                      <span style="color: white;">{{ playtime |timeBy}}</span>
                    </x-circle>
                  </div>
               </div>
          </div>
        </swiper-item>
      </swiper>
        <div class="circle-demo-range">
          <range v-model="percent" :min="0" :max="100"></range>
        </div>
        <div class="musicBut">
          <div class="Mprep" @click="prep"></div>
          <div class="Mnext" @click="next"></div>
          <div class="pause" @click="pause">
            <img slot="icon" src="./compontasset/pause22.png" width="72" height="72" alt="pause" ref="imgbut">
          </div>
        </div>

      </div>

</template>

<script>
  import {XHeader, Swiper, SwiperItem, XCircle, Range, InlineXSwitch} from 'vux'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
  export default {
    name: 'musicText',
    data: function () {
      return {
        msg: '',
        handleMsg: [],
        // 处理过的歌词
        allMusicPicUrl: [],
        // 图片url
        allMusicID: [],
        // 歌词id
        musicId: localStorage.nowIndex,
        // 当前的歌曲的index，作为判断上下歌曲用
        percent: 100,
        handlePercent: 0,
        playtime: 0,
        musicName: [],
        loopvalue: false,
        ifUse: true
      }
    },
    watch: {
      loopvalue () {
        this.$refs.musicAud.loop = this.loopvalue
      },
      percent (val, oldVal) {
        if (val - oldVal >= 2 || oldVal - val >= 2) {
          // this.$refs.musicAud.pause()
          this.handlePercent = this.percent / 100
          this.$refs.musicAud.currentTime = this.$refs.musicAud.duration * this.handlePercent
          this.$refs.musicAud.play()
        }
      }
    },
    filters: {
      timeBy: function (second) {
        var min = 0
        if (second > 60) {
          min = second / 60
          second = second % 60
        }
        // 过滤时间格式，降秒转换为分
        return `0${parseInt(min)}:${parseInt(second)}`
      },
      clearlyrcTime (val) {
        return val.replace(/\[\d{2}:\d{2}.\d{0,5}\]/g, ``)
      }
    },
    methods: {
      jump () {
        this.ifUse = true
        setTimeout(() => {
          if (this.ifUse === true) { this.next() }
        }, 2000)
        // 如果遇到音频error判断ifUse是否还处于true的状态
      },
      continued: function () {
        if (!this.loopvalue) {
          this.next()
          // 判断是否要循环，如果不需要播放下一首
        }
      },
      pause: function () {
        if (this.$refs.musicAud.paused) {
          this.$refs.musicAud.play()
          this.$refs.imgbut.src = require('./compontasset/pause22.png')
        } else {
          this.$refs.musicAud.pause()
          this.$refs.imgbut.src = require('./compontasset/resizeApi.png')
        }
      },
      prep () {
        this.ifUse = false
        this.$refs.musicAud.ontimeupdate = function () {
          let pattern = /\[\d{2}:\d{2}.\d{0,5}\]/g
          let num = 0
          if (!isNaN(this.$refs.musicAud.duration)) {
            this.percent = (this.$refs.musicAud.currentTime / this.$refs.musicAud.duration) * 100
            this.playtime = this.$refs.musicAud.currentTime
            // this.$refs.musicAud.currentTime / this.$refs.musicAud.duration) * 100
            for (let n = 0; n < this.handleMsg.length; n++) {
              if (this.handleMsg[n].match(pattern)) {
                var secondTime = this.handleMsg[n].match(pattern)[0].replace(/\[/g, '').replace(/\]/g, '').split(':')
                var musicTime = parseInt(secondTime[0]) * 60 + parseInt(secondTime[1])
                // 将括号去掉
                if (this.playtime > musicTime) {
                  num = n
                }
              }
            }
            document.getElementsByClassName('Texts')[num].style.color = '#86daee'
            this.$refs.moves.style.top = `-${num * 22}px`
            // document.getElementsByClassName('Texts')[num].parentNode.childNodes
            for (let i = 0; i < document.getElementsByClassName('Texts')[num].parentNode.children.length; i++) {
              if (document.getElementsByClassName('Texts')[num].parentNode.children[i] !== document.getElementsByClassName('Texts')[num]) {
                document.getElementsByClassName('Texts')[num].parentNode.children[i].style.color = '#20b907'
              }
            }
          }
        }.bind(this)
        if (localStorage.nowIndex >= 1) {
          localStorage.nowIndex--
          this.musicId = localStorage.nowIndex
          this.$refs.musicAud.src = `http://music.163.com/song/media/outer/url?id=${this.allMusicID[this.musicId]}.mp3`
          this.$http.get(`${API_PROXY}http://music.163.com/api/song/lyric?os=pc&id=${this.allMusicID[this.musicId]}&lv=-1&kv=-1&tv=-1`)
            .then(function (response) {
              this.msg = response.data.lrc.lyric
              this.handleMsg = []
              var newMsg = this.msg.replace(/\[/g, `,[`).split(',')
              for (let n = 0; n < newMsg.length; n++) {
                this.handleMsg.push(newMsg[n])
              }
            }.bind(this))
            .catch(function (err) {
              console.log(err)
            })
        } else {
          alert('前面已经没有了')
        }
      },
      next () {
        this.ifUse = false
        this.$refs.musicAud.ontimeupdate = function () {
          let pattern = /\[\d{2}:\d{2}.\d{0,5}\]/g
          let num = 0
          if (!isNaN(this.$refs.musicAud.duration)) {
            this.percent = (this.$refs.musicAud.currentTime / this.$refs.musicAud.duration) * 100
            this.playtime = this.$refs.musicAud.currentTime
            // this.$refs.musicAud.currentTime / this.$refs.musicAud.duration) * 100
            for (let n = 0; n < this.handleMsg.length; n++) {
              if (this.handleMsg[n].match(pattern)) {
                var secondTime = this.handleMsg[n].match(pattern)[0].replace(/\[/g, '').replace(/\]/g, '').split(':')
                var musicTime = parseInt(secondTime[0]) * 60 + parseInt(secondTime[1])
                // 将括号去掉
                if (this.playtime > musicTime) {
                  num = n
                }
              }
            }
            document.getElementsByClassName('Texts')[num].style.color = '#86daee'
            this.$refs.moves.style.top = `-${num * 22}px`
            // document.getElementsByClassName('Texts')[num].parentNode.childNodes
            for (let i = 0; i < document.getElementsByClassName('Texts')[num].parentNode.children.length; i++) {
              if (document.getElementsByClassName('Texts')[num].parentNode.children[i] !== document.getElementsByClassName('Texts')[num]) {
                document.getElementsByClassName('Texts')[num].parentNode.children[i].style.color = '#20b907'
              }
            }
          }
        }.bind(this)
        if (localStorage.nowIndex <= 99) {
          localStorage.nowIndex++
          this.musicId = localStorage.nowIndex
          this.$refs.musicAud.src = `http://music.163.com/song/media/outer/url?id=${this.allMusicID[this.musicId]}.mp3`
          this.$http.get(`${API_PROXY}http://music.163.com/api/song/lyric?os=pc&id=${this.allMusicID[this.musicId]}&lv=-1&kv=-1&tv=-1`)
            .then(function (response) {
              this.msg = response.data.lrc.lyric
              this.handleMsg = []
              var newMsg = this.msg.replace(/\[/g, `,[`).split(',')
              for (let n = 0; n < newMsg.length; n++) {
                this.handleMsg.push(newMsg[n])
              }
            }.bind(this))
            .catch(function (err) {
              console.log(err)
            })
        } else {
          alert('后面已经没有了')
        }
      }
    },
    components: {
      XHeader,
      Swiper,
      SwiperItem,
      XCircle,
      Range,
      InlineXSwitch
    },
    mounted () {
      // 页面初步加载时
      this.$refs.musicAud.ontimeupdate = function () {
        let pattern = /\[\d{2}:\d{2}.\d{0,5}\]/g
        let num = 0
        if (!isNaN(this.$refs.musicAud.duration)) {
          this.percent = (this.$refs.musicAud.currentTime / this.$refs.musicAud.duration) * 100
          this.playtime = this.$refs.musicAud.currentTime
          // this.$refs.musicAud.currentTime / this.$refs.musicAud.duration) * 100
          for (let n = 0; n < this.handleMsg.length; n++) {
            if (this.handleMsg[n].match(pattern)) {
              var secondTime = this.handleMsg[n].match(pattern)[0].replace(/\[/g, '').replace(/\]/g, '').split(':')
              var musicTime = parseInt(secondTime[0]) * 60 + parseInt(secondTime[1])
              // 将括号去掉
              if (this.playtime > musicTime) {
                num = n
                // 将n赋值给num
              }
            }
          }
          document.getElementsByClassName('Texts')[num].style.color = '#86daee'
          this.$refs.moves.style.top = `-${num * 20}px`
          // document.getElementsByClassName('Texts')[num].parentNode.childNodes
          for (let i = 0; i < document.getElementsByClassName('Texts')[num].parentNode.children.length; i++) {
            if (document.getElementsByClassName('Texts')[num].parentNode.children[i] !== document.getElementsByClassName('Texts')[num]) {
              document.getElementsByClassName('Texts')[num].parentNode.children[i].style.color = '#20b907'
            }
          }
          // 改变同级非本身所有颜色
        }
      }.bind(this)
      // 监听video的时间变化
      let MusicName = localStorage.musicName.replace(/\((.+?)\)/g, '').replace(/\（(.+?)\）/g, '').split(',')
      // 将歌曲名字中的包含中文以及英文的括号全部过滤掉
      let handleUrl = localStorage.picurl.split(',')
      // 将图片资源的url从本地资源中分割成数组
      let handleID = localStorage.musicId.split(',')
      for (let i = 0; i < handleUrl.length; i++) {
        this.allMusicPicUrl.push(handleUrl[i])
        this.allMusicID.push(handleID[i])
        this.musicName.push(MusicName[i])
      }
      // 前面都是做歌曲的处理包括图片资源以及id以及名字
      if (this.allMusicID[this.musicId]) {
        this.$refs.musicAud.src = `http://music.163.com/song/media/outer/url?id=${this.allMusicID[this.musicId]}.mp3`
        this.$http.get(`${API_PROXY}http://music.163.com/api/song/lyric?os=pc&id=${this.allMusicID[this.musicId]}&lv=-1&kv=-1&tv=-1`)
        .then(function (response) {
          this.msg = response.data.lrc.lyric
          var newMsg = this.msg.replace(/\[/g, `,[`).split(',')
          for (let n = 0; n < newMsg.length; n++) {
            this.handleMsg.push(newMsg[n])
          }
        }.bind(this))
        .catch(function (err) {
          console.log(err)
        })
      }
      // 歌词处理
    }
  }
</script>

<style scoped>
  @keyframes circled
  {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
  }
  .black {
    background-color: #000000;
  }
  .imgbox{
    margin:100px auto;
    background: yellow;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    animation:circled 7s infinite linear;
  }
  .musicBut{
    position: absolute;
    width: 100%;
    height:33%;
    margin-top: -30px;
    z-index: -1;
    background: black;
  }
  .Mnext,.Mprep{
    width: 70px;
    height: 45px;
    margin-top: 53px;
    background-size: 100% 100%;
  }
   .Mprep{
       float: left;
       margin-left: 42px;
       background-image: url('./compontasset/prep.png');
     }
  .Mnext{
    float: right;
    margin-right: 42px;
    background-image: url('./compontasset/next.png');
  }

   .pause{
       width: 72px;
       height: 72px;
       background: gray;
        margin:40px auto;
       border-radius: 50%;
       box-shadow: 0 0 2px black;
     }
  .vux-circle-demo {
    text-align: center;
    margin-top:20%
  }
  .vux-circle-demo > div {
    margin-left: auto;
    margin-right: auto;
  }
  .circle-demo-range {
    width: 100%;
    height: 20px;
    margin:0 auto;
    border: 1px black solid;
    background: black;
  }
</style>
