<!--  -->
<template>
<div id='tuijian'>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
   <img src="../../../assets/02.jpg" />
  </van-swipe-item>
  <van-swipe-item>
  <img src="../../../assets/03.jpg" />
  </van-swipe-item>
  <van-swipe-item>
  <img src="../../../assets/04.jpg" />
  </van-swipe-item>
  
</van-swipe>

<div class="tu">
<ul>
<li>
<img src='../../../assets/米粉.png'>
</li>
<li>
<img src='../../../assets/依旧.png'>
</li>
<li>
<img src='../../../assets/发布.png'>
</li>
<li>
<img src='../../../assets/物流.png'>
</li>
</ul>
</div>
<div class="tu1">
<div class="left">
<img src='../../../assets/left1.png'>
</div>
<div class="right">
<div class="top">
<img src='../../../assets/right1.jpg'>
</div>
<div>
<img src='../../../assets/right2.png'>
</div>
</div>
</div>
<div class="tu2">
<img src='../../../assets/tu2 1.jpg'>
</div>
<div class="tu2">
<img src='../../../assets/tu3 1.png'>
</div>
<div class="tu3">
<img src='../../../assets/tu3.png'>
</div>
<div class="list">
 <ul>
   <li>
   <img src="../../../assets/lingt.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p>
   </li>
   <li>
    <img src="../../../assets/lingt.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p>
   </li>
   <li>
    <img src="../../../assets/lingt.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p></li>
   <li>
    <img src="../../../assets/lingt.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p></li>
   
   </ul>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
 images: [
        
        '../../../assets/02.png',
        '../../../assets/03.png',
        '../../../assets/04.png',
        
      ],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped >
#tuijian .my-swipe{
    height:180px
}
#tuijian .my-swipe img{
    width:100%
  }
  #tuijian .tu{
      height:80px;
      background:red
  }
   #tuijian .tu ul{
      height:80px;
      
  }
   #tuijian .tu ul li{
       width:25%;
       float:left;

   }
     #tuijian .tu ul li img{
         width:100%
     }
  #tuijian .tu1{
      height:260px;
      border:1px solid #cecece
  }
  #tuijian .tu1 .left{
   float:left;
   width:49%;
   border:1px solid #cecece
  }
  #tuijian .tu1 .left img{
    width:100%
  }
  #tuijian .tu1 .right{
   float:right;
   width:49%;
   border:1px solid #cecece
  }
  #tuijian .tu1 .right .top{
    margin-bottom: 5px;
  }
  #tuijian .tu1 .right img{
     width:100% 
  }
   #tuijian .tu2 {
     height:146px;

   }
     #tuijian .tu2 img{
     width:100% 
  }
     #tuijian .tu3 {
     height:230px;

   }
     #tuijian .tu3 img{
     width:100% 
  }
  #tuijian  .list ul{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between
}
 #tuijian  .list ul li{
width:48%;

}
 #tuijian  .list ul li img{
    width:100%
}
 #tuijian  .list ul li p{
    text-indent: 10px;
    line-height:30px
}
 #tuijian  .list ul li .title{
    font-size:18px
}
 #tuijian  .list ul li .pric{
    color:orangered
}
</style>