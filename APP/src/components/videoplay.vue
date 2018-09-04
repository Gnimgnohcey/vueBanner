<template>
   <div>
     <br>
     <x-header :left-options="{backText: ''}" style="background-color:#000;">this is your Video</x-header>
     <br>
     <video style="margin:10px auto;width: 100%;" controls="" autoplay="true" name="media">
       <source :src="videourl" type="video/mp4">
     </video>
      <div style="height: 40px">
      </div>
   </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import { XHeader } from 'vux'
    export default {
      name: 'videoplay',
      components: {
        XHeader
      },
      methods: {
      },
      computed: mapGetters(['videourl']),
      mounted () {
      }
    }
</script>

<style scoped>

</style>
