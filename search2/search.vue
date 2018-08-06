<template>
    <div style="width: 100%">
       <input type="text" v-model="searched" class="inputSearch">
       <ul class="Showlist">
         <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
            <li class="animated" v-for="(value,index) in list" :key="index">{{value}}</li>
         </transition-group>
       </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "search",
        data(){
          return{
            searched:"",
            lists:[]
          }
        },
      computed:{
          list(){
            var listed=[];
            if(this.searched) {
              for (let i = 0; i < this.lists.length; i++) {
                if (this.lists[i].includes(this.searched, 0)) {
                  listed.push(this.lists[i])
                }
              }
            }
            return listed;
          }
      },
      mounted(){
        axios.get('http://www.diswares.com/system/product/page/1')
          .then(function (response) {
            for(let i=0;i<response['data'].length;i++){
              this.lists.push(response['data'][i]['productName']);
            }

            console.log(this.lists)
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
      }


    }
</script>

<style scoped>
  *{margin: 0;padding: 0}
  ul{list-style: none}
   html,body{
     height: 100%;
     width: 100%;
   }

   .inputSearch{
     display: block;
     width:300px;
     height: 50px;
     background: red;
     margin: auto;
     font-size: 35px;
   }
  .Showlist{
    width:300px;
    border: 1px solid red;
    margin: auto;
  }
  ul li{
    font-size: 18px;
    font-weight: bolder;
    margin-left: 10px;
  }
</style>
