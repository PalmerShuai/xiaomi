<!--  -->
<template>
<div id='kind'>
<van-nav-bar title="分类" left-text="返回" left-arrow @click.native="goback">
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
<div class="content">
<van-tree-select height="150vw" :items="items" :main-active-index.sync="active">
  <template #content> 
  <div v-if="active === 0">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
   <img src="../../assets/02.jpg" />
  </van-swipe-item>
  <van-swipe-item>
  <img src="../../assets/03.jpg" />
  </van-swipe-item>
  <van-swipe-item>
  <img src="../../assets/04.jpg" />
  </van-swipe-item>
  </van-swipe>
  <h3>热销手机</h3>
  <ul>
  <li>
  <img src='../../assets/shouji1.jpg'>
  <p>经典回忆</p>
  <span>￥20</span>
  </li>
  <li>
  <img src='../../assets/shouji1.jpg'>
  <p>经典回忆</p>
  <span>￥20</span>
  </li>
   <li>
  <img src='../../assets/shouji1.jpg'>
  <p>经典回忆</p>
  <span>￥20</span>
  </li>
   <li>
  <img src='../../assets/shouji1.jpg'>
  <p>经典回忆</p>
  <span>￥20</span>
  </li>
   <li>
  <img src='../../assets/shouji1.jpg'>
  <p>经典回忆</p>
  <span>￥20</span>
  </li>
   <li>
  <img src='../../assets/shouji1.jpg'>
  <p>经典回忆</p>
  <span>￥20</span>
  </li>
  </ul>
  </div>
 <div v-if="active === 1">1</div>
   <div v-if="active === 2">2</div>
  </template>
</van-tree-select>

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
 active: 0,
      items: [{ text: '手机' }, { text: '分组 2' },{ text: '分组 3' }, { text: '分组 4' }],
};
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
#kind .content .van-sidebar-item {
   height:80px;
    line-height: 80px;
    text-align: center;
    font-size:25px
}
#kind .content img{
    width:100%
}
#kind .content h3{
    height:50px;
    line-height:50px;
    text-align: center;
    color:orange;
    font-size:20px;
    font-weight: 800;
}
#kind .content ul li{
width:49%;
height:140px;
float:left;
border:1px solid #cecece;
text-align: center;
}
#kind .content ul li img{
    height:80px
}
#kind .content ul li p{
    font-size:18px;
    margin:5px 0
}
#kind .content ul li span{
    font-size:14px;
    color:red
}
</style>