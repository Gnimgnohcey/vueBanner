<template>
  <div>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">


          <swiper-slide class="box" v-for="(val,index) in content" :key="index">{{val}} {{index}}</swiper-slide>
          <!--<swiper-slide class="box">I'm Slide 2</swiper-slide>-->
          <!--<swiper-slide class="box">I'm Slide 3</swiper-slide>-->
          <!--<swiper-slide class="box">I'm Slide 4</swiper-slide>-->
          <!--<swiper-slide class="box">I'm Slide 5</swiper-slide>-->
          <!--<swiper-slide class="box">I'm Slide 1</swiper-slide>-->
           <!--内容页面-->
        <div class="swiper-pagination"  slot="pagination"></div>
         <!--分页器-->
        <div class="swiper-button-prev" slot="button-prev"></div>

        <div class="swiper-button-next" slot="button-next"></div>
          <!--按钮-->
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
        <!--滚动条-->
      </swiper>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide }  from 'vue-awesome-swiper'
    export default {
        name: "vuebanner",
        data(){
          return{
            content:["图片1","图片2","图片3","图片4"],
            swiperOption:{
              autoplay: true,
              // 是否自动播放
              loop : true,
              // 是否循环

              effect : 'cube',
              cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 100,
                shadowScale: 0.8,
              },

              //动画的切换方式
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                // 分页器的类型
                dynamicBullets: true,
                dynamicMainBullets: 2,
                // 显示主点的个数
                clickable: true,
                clickableClass : 'my-pagination-clickable',
                // 点击具体切换
              },
              // 分页器
              on: {
                touchEnd: function(event){
                },
                // 点击触发事件
                // slideChange: function(){
                //   if(this.isEnd){
                //     this.navigation.$nextEl.css('display','none');
                //   }else {
                //     this.navigation.$nextEl.css('display', 'block');
                //   }
                //   // 滑动到最后页面时候隐藏
                // },
              },
              //动画的触发事件
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hideOnClick: true,
                //点击图片按钮消失，下面是bug的解决方法
              },
              //上一页和下一页的按钮
              scrollbar: {
                el: '.swiper-scrollbar',
              },
             // 滚动条
            }
          }
        },
         components:{
          swiper,
          swiperSlide
      }
    }
</script>

<style scoped>
   .box{
    height: 300px;
     background: yellow;
   }
   /*.swiper-container .swiper-button-hidden{ opacity : 0; }*/
  /*如果出现点击按钮不消失时添加这句话*/

</style>
