<template>
  <div>
    <div v-bind:class="{option:true}">
      <ul class="option_wrap">
        <li :class="{directory:true}" v-for="(val,index) in directory" :key="index">
          <div class="directorytop" @click="toggleShow(val,index)">{{val.name}}</div>
           <ul class="toggle" >
             <li class="toggle_o"  v-if="val.ifshow"  :class="{SecondaryDirectory:true}" v-for="(value,Sindex) in val.SecondaryDirectory" :key="Sindex">
               <input type="button" :value="value.targetComponent" v-on:click="processinged(value)"/>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <component :is="SecondMenu"></component>
    <!--动态组件-->
  </div>
</template>

<script>
import one from '../HelloWorl2d'
import two from '../HelloWorld'
// 这两个用于模拟，实际应用按需求导入组建
export default {
  name: 'SecondaryMenu',
  data () {
    return {
      SecondMenu: 'one',
      // SecondMenu用于记载动态组建的值
      directory: [
        {
          name: 1,
          ifshow: true,
          SecondaryDirectory: [{
            name: 2,
            targetComponent: 'two'
          }]
        },
        {
          name: 3,
          ifshow: true,
          SecondaryDirectory: [
            {
              name: 'home',
              targetComponent: 'two'
            },
            {
              name: 22,
              targetComponent: 'one'
            }]
        },
        {
          name: 1,
          ifshow: true,
          SecondaryDirectory: [{
            name: 2,
            targetComponent: 'two'
          }]
        },
        {
          name: '最后一条',
          ifshow: true
        }

      ]
    }
  },
  components: {
    two, one
    // 用于存放改变的动态组件
  },
  methods: {
    processinged (value) {
      this.SecondMenu = value.targetComponent
      // 根据不同传如value来动态的修改组件,
    },
    toggleShow (val, index) {
      var toggle = document.getElementsByClassName('toggle')[index]
      // 拿到点击时当前的index来获取某个指定的toggle对像，即当前的li，点击后产生对应的动画效果
      var n = val.SecondaryDirectory.length * 20
      // *20是因为下面css设置的li高度为20px，这里需要根据需求修改
      val.ifshow = !val.ifshow
      if (val.ifshow) {
        toggle.style.height = `${n}px`
      } else {
        toggle.style.height = '0px'
      }
    }
  },
  mounted () {
    for (let i = 0; i < this.directory.length; i++) {
      var n = this.directory[i].SecondaryDirectory.length * 20
      for (let num = 0; num < this.directory[i].SecondaryDirectory.length; num++) {
        var toggle = document.getElementsByClassName('toggle')[i]
        toggle.style.height = `${n}px`
      }
    }
    // 在最开的时候根据li内部的数量动态的渲染高度，来维持transition动画的正常执行
  }
}
</script>

<style scoped>
  /*scope开启用于防止其他地方重名*/
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
  /*最外围的框*/
  .directory{
    width: 300px;
    background: yellow;
  }
  /*一级目录 包括顶部条与二级内容*/
   .option_wrap > .directory:last-child{
     /*visibility: hidden;*/
     background: white;
     /*颜色与option背景色要相同*/
     color:rgba(0,0,0,0);
   }
   /*为了保证动画的流畅性，在所有li的最后额外添加了一条隐藏的一级目录条，不显示*/

  .directorytop{
    text-align: center;
  }
  /*一级目录顶部条,即目录显示*/
  .SecondaryDirectory{
    width: 300px;
    height: 20px;
    background: palegoldenrod;
  }

  /*二级目录下每个li*/
  .toggle{
     transition: 0.5s all ease;
  }
  /*动画效果*/

</style>
