<template>
  <div>
    <div v-bind:class="{option:true}">
      <ul>
        <li :class="{directory:true}" v-for="(val,index) in directory">
          <div class="directorytop" @click="toggleShow(val,index)">{{val.name}}</div>
          <ul class="toggle" >
            <li class="toggle_o"  v-if="val.ifshow"  :class="{SecondaryDirectory:true}" v-for="(value,Sindex) in val.SecondaryDirectory">
               {{value['path']}}
               <router-link v-bind:to="{path:value['path']}">  {{value["name"]}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "SecondaryMenu",
    data(){
      return{
        directory:[
          {
            name:1,ifshow:true,
            SecondaryDirectory:[{
              name:2,
              path:'/2'
            }]
          },
          {name:2,
            ifshow:true,
            SecondaryDirectory:[
              {
                name:'home',
                path:'/home'
              },
              {
                name:22,
                path:'/222'
              }]
          },
          {
            name:3,
            ifshow:true,
            SecondaryDirectory:[
              {
                name:'home',
                path:'/home'
              },
              {
                name:22,
                path:'/222'
              }]
          },
          {
            name:3,
            ifshow:true,
            SecondaryDirectory:[
              {
                name:'home',
                path:'/home'
              },
              {
                name:22,
                path:'/222'
              }]
          },
          {
            name:3,
            ifshow:true,
            SecondaryDirectory:[
              {
                name:'home',
                path:'/home'
              },
              {
                name:22,
                path:'/222'
              }]
          },
          {
            name:3,
            ifshow:true,
            SecondaryDirectory:[
              {
                name:'home',
                path:'/home'
              },
              {
                name:22,
                path:'/222'
              }]
          },

        ]
      }
    },
    methods:{
      toggleShow(val,index){
        var toggle=document.getElementsByClassName("toggle")[index];
        var n=val.SecondaryDirectory.length*20;
        val.ifshow=!val.ifshow;
        if(val.ifshow){
          toggle.style.height=`${n}px`
        }else{
          toggle.style.height="0px"
        }
      },
    },
    mounted(){
      for(let i=0;i<this.directory.length;i++) {
        var n=this.directory[i].SecondaryDirectory.length*20;
        for(let num=0;num<this.directory[i].SecondaryDirectory.length;num++) {
          var toggle=document.getElementsByClassName("toggle")[i];
           toggle.style.height = `${n}px`;
        }
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  .option{
    width: 300px;
    height: 500px;
    border: 1px solid black
  }
  .directory{
    width: 300px;
    background: yellow;
  }
  .directorytop{
    text-align: center;
  }
  .SecondaryDirectory{
    width: 300px;
    height: 20px;
    background: palegoldenrod;
  }
  .toggle{
     transition: 0.5s all ease;
  }

</style>
