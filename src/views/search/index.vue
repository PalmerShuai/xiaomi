<!--  -->
<template>
<div id='search'>
<div class="header">
      <div class="left">
        <span class="iconfont icon-zuojiantou" @click='goback'></span>
      </div>
      <div class="center">
        
        <input type="text" placeholder="搜索商品名称"  />
      </div>
      <div class="right">
        <span class="iconfont icon-search-line"></span>
      </div>
    </div>
    <h3 class="hotse">热门搜索</h3>
    <img src='../../assets/seach1.jpg' class="seachtit">
    <ul class='show'>
    <li>小米耳机</li>
     <li>小米音响</li>
      <li>电视机</li>
       <li>红米</li>
        <li>24寸</li>
         <li>年轻人第一次简历</li>
    </ul>
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
#search .header {
  padding: 10px 20px;
  height: 40px;
  background:#cecece;
  display: flex;
  justify-content: space-between;
}
#search .header .left {
  width: 10%;
  text-align: center;
  color: tomato;
  line-height: 40px;
}
#search .header .left .icon-zuojiantou {
  font-size: 25px;
}
#search .header .center {
  width: 70%;
  height: 30px;
  background: white;
  margin-top: 8px;
  line-height: 30px;
}

#search .header .right {
  width: 10%;
  text-align: center;
  color: tomato;
  line-height: 40px;
}
#search .header .right .icon-search-line {
  font-size: 20px;
  color: red;
}
#search .hotse{
    font-size: 20px;
   font-weight: 300;
   height:40px;
  line-height: 40px;
  text-indent:20px;
}
#search .seachtit{
    width:100%
}

#search .show li{
    float:left;
    padding:10px;
    margin:10px;
    border:1px solid #cecece;
   
}
</style>