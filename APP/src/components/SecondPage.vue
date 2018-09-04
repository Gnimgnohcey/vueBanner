<template>
   <div>
     <scroller lock-x scrollbar-y height="200px" ref="scroller">
       <div>
      <grid>
           <grid-item link="/setTime">
             <img slot="icon"  src="../assets/stopwatch8.png">
           </grid-item>
           <grid-item link="/Music">
                <img slot="icon"  src="../assets/musical47.png">
           </grid-item>
         </grid>
         <grid>
           <grid-item link="/MusicText">
             <img slot="icon"  src="../assets/musical47.png">
           </grid-item>
         </grid>
       </div>
     </scroller>
   </div>

</template>

<script>
  import { Scroller, Divider, Spinner, Grid, GridItem, GroupTitle } from 'vux'

  export default {
    name: 'SecondPage',
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Scroller,
      Divider,
      Spinner
    },
    methods: {
      go () {
        alert(1)
      }
    }
  }
</script>

<style scoped>

  .flex-demo {
    width:60px;
    height: 60px;
    margin:auto;
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
    line-height: 1.6;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;

    background-clip: padding-box;
  }

</style>
