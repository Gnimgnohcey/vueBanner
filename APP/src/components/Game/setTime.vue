<template>
   <div>
       <x-header style="background:red;">you can set You Time</x-header>
       <div style="text-align:center;margin-top: 20px;">
         <input class="itext"  type="text"  v-model="setYouTime"></input>
         <x-button :gradients="['#1D62F0', '#19D5FD']" style="width: 30%"  @click.native="startTime">Start</x-button>
         <div class="vux-circle-demo">
           <br>
           <div style="width:150px;height:150px;">
             <x-circle
               :percent="percent"
               :stroke-width="5"
               stroke-color="#368">
               <span style="font-weight: bolder;font-size: 1.2rem">{{ setYouTime }}</span>
             </x-circle>
           </div>
         </div>
       </div>
   </div>
</template>

<script>
  import { InlineXNumber, XHeader, XButton, XCircle } from 'vux'
  export default {
    name: 'setTime',
    data () {
      return {
        setYouTime: 0,
        showTime: this.setYouTime,
        percent: 100
      }
    },
    methods: {
      startTime () {
        this.showTime = this.setYouTime
        var Timer = setInterval(() => {
          if (this.setYouTime <= 1) {
            clearInterval(Timer)
          }
          this.setYouTime--
          this.percent = this.setYouTime / this.showTime * 100
        }, 1000)
      }
    },
    components: {
      InlineXNumber,
      XHeader,
      XButton,
      XCircle
    }
  }
</script>

<style scoped>
  .itext{
    display: block;
    width: 160px;
    height: 30px;
    margin:auto;
    margin-bottom: 10%;
    margin-top: 17%;
    text-align: center;
  }
  .vux-circle-demo {
    text-align: center;
  }
  .vux-circle-demo > div {
    margin-left: auto;
    margin-right: auto;
  }
  .circle-demo-range {
    width: 250px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
</style>
