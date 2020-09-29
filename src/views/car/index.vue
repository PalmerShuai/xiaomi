<!--  -->
<template>
  <div id="car">
  <div class="heade">
   <van-nav-bar title="购物车" left-text="返回" left-arrow fixed @click.native="goback">
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
  </div>
  
   <div class='outer'>
     <div class="noth">
     <img src="../../assets/下载.png">
     </div>
     <div class='has'>
     <ul>
        <li>
           <div class='left'>
           <img src="../../assets/avatar-16009467015171257.jpg">
           </div>
            <div class='right'>
            <p>米家感应灯</p>
             <p>售价：49元</p>
             <div class="num">
             <span class="iconfont icon-jia"></span>
             <input type="text">
              <span class="iconfont icon-jianhao"></span>
             </div>
            </div>
        </li>
     </ul>
     </div>
   </div>
   <div class='love'>
    <img src="../../assets/e95ade2750a7fde92369b416c7d3176d.jpg">
   </div>
   <div class='list'>
   <ul>
   <li>
   <img src="../../assets/电脑.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p>
   </li>
   <li>
    <img src="../../assets/电脑.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p>
   </li>
   <li>
    <img src="../../assets/电脑.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p></li>
   <li>
    <img src="../../assets/电脑.jpg" alt="">
   <p class='title'>13.3*笔记本i5 独显</p>
   <p class='desc'>指纹解锁 全金属机身</p>
   <p class='pric'>￥ 5199</p></li>
   
   </ul>
   </div>
   <div class="boot">
   <div class='left'>
   <p>共1件 金额</p>
   <span>49</span>
   </div>
   <div class='center'><span>继续购物</span></div>
   <div class='right'><span>去付款</span></div>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
goback(){
    console.log(111)
    this.$router.go(-1)
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped >
#car .outer{
    margin-top:50px;
   
}
#car .outer .noth{
    height:90px;
}
#car .outer .noth img{
    width:100%;
    height:100%
}
#car .has ul li{
    display:flex;
    
    padding:10px;
height:140px;
border:1px solid #cecece;
}
#car .has ul li .left{
    flex:1;
    
    height:140px
}
#car .has ul li .left img{
    width:100%;
    height:100%
}
#car .has ul li .right{
    flex:2;
    
    height:140px;
    padding-left:20px
}
#car .has ul li .right p{
    margin-top:10px;
    line-height: 20px;
}
#car .has ul li .right .num{
    margin-top:20px;
    width:75px;
    border:1px solid #cecece;
    display:flex;
}
#car .has ul li .right .num span{
    display:block;
    border:1px solid #cecece
}
#car .has ul li .right .num input{
    width:40px
}
#car  .love{
    height:90px;
}
#car  .love img{
    width:100%;
    height:100%
}
#car  .list ul{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between
}
#car  .list ul li{
width:48%;

}
#car  .list ul li img{
    width:100%
}
#car  .list ul li p{
    text-indent: 10px;
    line-height:30px
}
#car  .list ul li .title{
    font-size:18px
}
#car  .list ul li .pric{
    color:orangered
}
#car .boot{
   width:100%;
    height:60px;
    
    position: fixed;
    bottom:0;
    background:white;
}
#car .boot div{
    text-align: center;;
    height:60px;
    width:33%;
    float:left
}
#car .boot .left{
    line-height: 20px;;
}
#car .boot .left p{
margin-top:20px;
}
#car .boot .left span{
    color:orangered
}
#car .boot .center{
    line-height: 60px;
}
#car .boot .right{
background:orangered;
line-height: 60px;
color:white;
font-size: 700;
}
</style>