# vueBanner
基与swiper整合的一个用于vue的全局轮播插件

# 配置准备
  首先安装 vue-awesome-swiper
 
     npm i vue-awesome-swiper -D
  
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
