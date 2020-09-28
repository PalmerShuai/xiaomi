import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
var router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            component: () =>
                import ("../views/index"),
            children: [{
                    path: "tuijian",
                    component: () =>
                        import ("../views/index/tuijian")
                },
                {
                    path: "dianiao",
                    component: () =>
                        import ("../views/index/dianiao")
                },
                {
                    path: "dianshi",
                    component: () =>
                        import ("../views/index/dianshi")
                },
                {
                    path: "hezi",
                    component: () =>
                        import ("../views/index/hezi")
                },
                {
                    path: "quanmianping",
                    component: () =>
                        import ("../views/index/quanmianping")
                },
                {
                    path: "shouji",
                    component: () =>
                        import ("../views/index/shouji")
                },
                {
                    path: "yishu",
                    component: () =>
                        import ("../views/index/yishu")
                },
                {
                    path: "zhineng",
                    component: () =>
                        import ("../views/index/zhineng")
                },
                {
                    path: "zhoubian",
                    component: () =>
                        import ("../views/index/zhoubian")
                }
            ],
            // redirect: "tuijian",
            linkActiveClass: "active"
        },

        {
            path: "/kind",
            component: () =>
                import ("../views/kind"),
        },
        {
            path: "/car",
            component: () =>
                import ("../views/car"),
        },
        {
            path: "/mine",
            component: () =>
                import ("../views/mine"),
        },
    ],
    linkActiveClass: "active"
});
export default router;