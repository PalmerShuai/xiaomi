<!--  -->
<template>
<div id='login'>
<van-nav-bar title="注册" left-text="返回" left-arrow @click.native="goback">
 </van-nav-bar>
 <div class="date">
 <span>用户名:</span>
 <input type="text">
 </div>
  <div class="date">
 <span>密   码:</span>
 <input type="text">
 </div>
 <button class="log">注册</button>
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
#login .date{
  width:80%;
  height:50px;
  margin:50px auto;
  
}
#login .date span{
  height:40px;
  line-height: 40px;
  float:left;
  font-size: 18px;
}
#login .date input{
  width:75%;
  height:40px;
  float:right;
  border:1px solid #cecece
}
#login .log{
  display:block;
  width:40%;
  height:50px;
  border:1px solid #cecece;
  margin: 0 auto;
  font-size:25px;
}
</style>