<template>
  <div>
    <div v-bind:class="{option:true}">
      <ul>
        <li :class="{directory:true}" v-for="(val,index) in directory" :key="index">
          <div class="directorytop" @click="toggleShow(val,index)">{{val.name}}</div>
           <ul class="toggle" >
             <li class="toggle_o"  v-if="val.ifshow"  :class="{SecondaryDirectory:true}" v-for="(value,Sindex) in val.SecondaryDirectory" :key="Sindex">
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
  name: 'SecondaryMenu',
  data () {
    return {
      directory: [
			// 一级菜单目录
        {
          name: 1,
          ifshow: true,
					// 记载显示与否
          SecondaryDirectory: [{
            name: 2,
            path: '/2'
          }]
					// 二级菜单目录
        },
        {name: 2,
          ifshow: true,
          SecondaryDirectory: [
            {
              name: 'home',
              path: '/home'
            },
            {
              name: 22,
              path: '/222'
            }]
        },
        {
          name: 3,
          ifshow: true,
          SecondaryDirectory: [
            {
              name: 'home',
              path: '/home'
            },
            {
              name: 22,
              path: '/222'
            }]
        },
        {
          name: 3,
          ifshow: true,
          SecondaryDirectory: [
            {
              name: 'home',
              path: '/home'
            },
            {
              name: 22,
              path: '/222'
            }]
        },
        {
          name: 3,
          ifshow: true,
          SecondaryDirectory: [
            {
              name: 'home',
              path: '/home'
            },
            {
              name: 22,
              path: '/222'
            }]
        },
        {
          name: 3,
          ifshow: true,
          SecondaryDirectory: [
            {
              name: 'home',
              path: '/home'
            },
            {
              name: 22,
              path: '/222'
            }]
        }

      ]
    }
  },
  methods: {
    toggleShow (val, index) {
      var toggle = document.getElementsByClassName('toggle')[index];
			// 拿到根据index拿到具体的toggle
      var n = val.SecondaryDirectory.length * 20;
			// 根据二级目录的个数计算出父级ul的高度
      val.ifshow = !val.ifshow
      if (val.ifshow) {
        toggle.style.height = `${n}px`
				// 如果ifshow变为了true,那么高度变为前面计算出来的
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
		// 在挂在前先把高度赋值给父级的ul来达到动画
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
