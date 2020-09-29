<!--  -->
<template>
<div id='detil'>
<div class="imgs">
<span class="iconfont icon-zuojiantou" @click='goback'></span>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
   <img src="../../assets/deti1.jpg" />
  </van-swipe-item>
  <van-swipe-item>
  <img src="../../assets/deti1.jpg" />
  </van-swipe-item>
  <van-swipe-item>
  <img src="../../assets/deti1.jpg" />
  </van-swipe-item>
  </van-swipe>
  <img src="../../assets/detil2.jpg" />
</div>
<div class="desc">
<p class="title">13.3*笔记本Air i7 8GB 独显</p>
<p class="more">【小米笔记本超值待价！ 立减400元 限量抢购！享小米期3/6期免息！】</p>
<p class="infpr">2G独显/8GB内存+256GB SSD/第七代intel酷睿 i7处理器/FHD全贴合屏幕/指纹解锁</p>
<p class="pric">￥7999</p>
</div>
<div class="miaoshu">
<img src="../../assets/detil3.jpg" />
<img src="../../assets/detil4.jpg" />
</div>
 <div class="boot">
   <div class='left'>
  <span class="iconfont icon-shouye"></span>
   <p>首页</p>
   </div>
   <div class='center'>
    <span class="iconfont icon-gouwucheman"></span>
   <p>购物车</p>
   </div>
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
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
goback(){
    this.$router.go(-1)
}
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
#detil .imgs{
    position:relative;
}
#detil .imgs .icon-zuojiantou{
    display:inline-block;
    width:25px;
    height:25px;
    border-radius: 50%;
    background:#000000;
    opacity: 0.2;
    color:whitesmoke;
    font-size:25px;
    position: absolute;
    top:10px;
    left:10px;
    z-index: 2;
}
#detil .imgs img{
    width:100%
}
#detil .desc .title{
text-indent:20px;
font-size:22px;
}
#detil .desc .more{
    padding-left:20px;
color:orangered;
font-size:16px;
}
#detil .desc .infpr{
padding-left:20px;
color:#cecece;
font-size:14px;
}
#detil .desc .pric{
padding-left:20px;
color:orangered;
font-size:18px;
}
#detil .miaoshu img{
width:100%
}
#detil .boot{
   width:100%;
   height:60px;
    
    position: fixed;
    bottom:0;
    background:white;
}
#detil .boot div{
    text-align: center;;
    height:60px;
    float:left
}
#detil .boot .left{
    width:20%;
    line-height: 20px;;
}

#detil .boot .left span{
    font-size: 20px;
}
#detil .boot .center{
    width:20%;
    line-height: 20px;;
}

#detil .boot .center span{
    font-size: 20px;
}
#detil .boot .right{
    width:60%;
background:orangered;
line-height: 60px;
color:white;

}
</style>