# vueBanner
基与swiper整合的一个用于vue的全局轮播插件

# 配置准备
  首先安装 vue-awesome-swiper
 
     npm i vue-awesome-swiper -S
  
  安装完成后在main.js中使用对应的插件
  
     import VueAwesomeSwiper from 'vue-awesome-swiper'
     import  'swiper/dist/css/swiper.css'
     Vue.use(VueAwesomeSwiper);
  
  
  这里要注意一点 css文件不要忘记了，网上的教程很多都没有导入这个css因为VueAwesomeSwiper在有一版本后面就需要自己导入css文件，这边复制我写的即可
  # VueBanner使用说明
  下载VueBanner文件后放入components文件夹中即可
   在Vue项目中的main.js文件中：
   
    import VueBanner from './components/VueBanner'
     Vue.use(VueBanner);
     
   之后就是在具体的组建中使用
     
       <div style="width: 500px;height: 300px;margin: auto">
           <VueBanner></VueBanner>
        </div>
        
   这个轮播具体大小具体位置需要css控制，这里只是做个示范。如果你不需要这个轮播中某些元素，比如滚动条，注释掉即可，代码中都有对应的注释
   # VueSecondMenu使用说明
   基于vue以及原生js编写的二级菜单模板，内部除了vue没有使用其他的框架，所以可以达到某些公司的要求
      
   使用方法:
          
          import SecondoryMenu from './components/SecondoryMenu'
          Vue.use(SecondoryMenu);
   具体操作和banner一样都是作为插件使用的，要用组件使用直接导那个vue文件就行，还有一点，这个切换页面基于vue-router所以这一块知识要有了解
 # VueSecondMenu2使用说明
   这是VueSecondMenu2的编写方法，虽然说最后的效果差不多，但底层实现有所不同
 
   
   VueSecondMenu采用的router实现的页面切换
   
   而VueSecondMenu2切换用的是动态组件<component :is=""></component>
   
   利用对动态组件的切换实现不同目录内容的切换
   
   好处：不需要使用vue-router插件，比上面那个的内容要小，适用与就一两个页面内容切换
   
   坏处：因为不是用vue-router而是动态的改变组件，导致网页后退和前进功能没有实际的效果
 # search
 search.vue文件是在vue用结合animate.css做的搜索项的动画，通过搜索出来的东西实时的加到列表中。这个是模板，后续会发布完整的结合接口的搜索项目
 # search2
 加入了axios获取的接口数据 ps：search和search2都没有使用eslint规范，如果你项目打开了eslint使用的时候请自行修改代码
