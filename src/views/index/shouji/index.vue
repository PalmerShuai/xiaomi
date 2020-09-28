<!--  -->
<template>
<div id='shouji'>
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
<h3 class="title">热销爆款</h3>
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
#shouji .my-swipe{
    height:180px
}
#shouji .my-swipe img{
    width:100%
  }
  #shouji .title{
      margin-top:10px;
      text-indent: 20px;
      font-size:25px;
      font-weight: 700;
  }
   #shouji  .list ul{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between
}
 #shouji  .list ul li{
width:48%;

}
 #shouji  .list ul li img{
    width:100%
}
 #shouji  .list ul li p{
    text-indent: 10px;
    line-height:30px
}
 #shouji  .list ul li .title{
    font-size:18px
}
 #shouji  .list ul li .pric{
    color:orangered
}
</style>