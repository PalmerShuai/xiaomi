<!--  -->
<template>
<div id='mine'>
<div class='heade'>
<img src="../../assets/logopeo.png">
<p><span>登录</span>/<span>注册</span></p>
</div>
<van-cell is-link title="我的订单"  />
<div class="thing">
<div>
<span class="iconfont icon-daifukuan"></span>
<p>待付款</p>
</div>
<div>
<span class="iconfont icon-daishouhuo-"></span>
<p>待收货</p>
</div>
<div>
<span class="iconfont icon-xiugai"></span>
<p>退还修</p>
</div>
</div>

<div class="discount">
<span class="iconfont icon-huiyuan- zuo"></span>
<van-cell is-link title="会员福利" class='you' />
</div>
<div class="discount ">
<span class="iconfont icon-kabao zuo"></span>
<van-cell is-link title="我的优惠" class='you youxian' />
</div>

<div class="jian"></div>

<div class="discount">
<span class="iconfont icon-fuwuerji zuo"></span>
<van-cell is-link title="服务中心" class='you' />
</div>
<div class="discount ">
<span class="iconfont icon-icon-test zuo"></span>
<van-cell is-link title="小米之家" class='you youxian' />
</div>
<div class="jian"></div>
<div class="discount ">
<span class="iconfont icon-shezhi zuo"></span>
<van-cell is-link title="设置" class='you youxian' />
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

#mine .heade{
height:80px;
background:orange;
position: relative;
}
#mine .heade img{
    width:10%;
    position:absolute;
    left:20px;
    top:20px
}
#mine .heade p{
position:absolute;
    left:80px;
    top:27px;
    color:white
}
#mine .thing{
    display: flex;
    height:50px;
    justify-content:space-around ;
    padding: 30px;
    border-bottom:1px solid #cecece;
    margin-bottom: 10px;
}
#mine .thing div{
    width:20%;
    
    text-align: center;
}
#mine .thing div span{
    font-size: 25px;
    line-height: 30px;
    color:#cecece
}
#mine .thing div p{
    font-size: 20px;
    line-height: 40px;
    color:#000000
}
#mine .discount{
    position: relative;
    height:60px;
    
}
#mine .discount .zuo{
    padding-left: 20px;
    position: absolute;
    left:0;
    top:8px;
width: 10%;
color:yellow;
display:block;
font-size: 30px;
}
#mine .discount .you{
position: absolute;
right:0;
width: 85%;
border-bottom: 1px solid #cecece;
}
#mine .discount .icon-kabao{
    color:blue
}
#mine .discount .youxian{
    border-bottom:none
}
#mine .jian{
    background: #cecece;
    height:15px
}
#mine .discount .icon-fuwuerji{
    color:pink
}
#mine .discount .icon-icon-test{
    color:purple
}
#mine .discount .icon-shezhi{
    color:#cecece
}

</style>