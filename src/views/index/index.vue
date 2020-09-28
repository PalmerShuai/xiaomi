<!--  -->
<template>
  <div id="index">
    <div class="header">
      <div class="left">
        <span class="iconfont icon-xiaomi"></span>
      </div>
      <div class="center">
        <span class="iconfont icon-search-line"></span>
        <input type="text" placeholder="搜索商品名称" />
      </div>
      <div class="right">
        <span class="iconfont icon-xiaolian"></span>
      </div>
    </div>
    <div class="nav">
      <ul>
        <router-link tag='li' to='/index/tuijian'  >推荐</router-link>
        <router-link tag='li' to='/index/shouji'>手机</router-link>
        <router-link tag='li' to='/index/zhineng'>智能</router-link>
         <router-link tag='li' to='/index/dianshi'>电视</router-link>
        <router-link tag='li' to='/index/dianiao'>电脑</router-link>
        <router-link tag='li' to='/index/quanmianping'>全面屏</router-link>
        <router-link tag='li' to='/index/zhoubian'>生活周边</router-link>
        <router-link tag='li' to='/index/hezi'>盒子</router-link>
        <router-link tag='li' to='/index/yishu'>艺术</router-link>
      </ul>
    </div>
    <router-view></router-view>
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
  methods: {},
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
#index .header {
  padding: 10px 20px;
  height: 40px;
  background: violet;
  display: flex;
  justify-content: space-between;
}
#index .header .left {
  width: 10%;
  text-align: center;
  color: tomato;
  line-height: 40px;
}
#index .header .left .icon-xiaomi {
  font-size: 25px;
}
#index .header .center {
  width: 70%;
  height: 30px;
  background: white;
  margin-top: 8px;
  line-height: 30px;
}
#index .header .center .icon-search-line {
  font-size: 20px;
}
#index .header .right {
  width: 10%;
  text-align: center;
  color: tomato;
  line-height: 40px;
}
#index .header .right .icon-xiaolian {
  font-size: 20px;
  color: #cecece;
}
#index .nav {
  
  width: 100%;
  overflow-x:auto;
}
#index .nav ul {
  height: 50px;
  width: 100%;
  white-space:nowrap;
  overflow: hidden;
  overflow-x:auto;
}
#index .nav ul li {
  
display: inline-block;
  width: 15%;
  height: 50px;
  text-align: center;
  line-height:50px;
  color:#cecece
}
#index .nav ul .active{
    border-bottom:1px solid red
}
</style>