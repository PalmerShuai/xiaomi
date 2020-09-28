<!--  -->
<template>
<div id='kind'>
<van-nav-bar title="分类" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
<div class="content">
<div class="left">
<ul>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
</ul>
</div>
<div class="right">
<ul>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
<li>1</li>
</ul>
</div>
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
#kind .content{
    height:562px;
    border:1px solid red
}
#kind .content .left{
    width:30%;
    float:left;
     overflow-y: auto;
}
#kind .content .left ul {
    height:562px;
    overflow-y: auto;
   
}
#kind .content .left ul li{
    height:80px;
    border:1px solid red
}
#kind .content .right{
    width:70%;
    float:right;
    overflow-y: auto;
}
#kind .content .right ul {
    height:562px;
    overflow-y: auto;
   
}
#kind .content .right ul li{
    height:80px;
    border:1px solid red
}
</style>