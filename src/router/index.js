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
            meta: {
                keepAlive: true
            },
            children: [{
                    path: "tuijian",
                    component: () =>
                        import ("../views/index/tuijian"),
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "dianiao",
                    component: () =>
                        import ("../views/index/dianiao"),
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "dianshi",
                    component: () =>
                        import ("../views/index/dianshi"),
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "hezi",
                    component: () =>
                        import ("../views/index/hezi"),
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "quanmianping",
                    component: () =>
                        import ("../views/index/quanmianping"),
                    meta: {
                        keepAlive: true
                    }

                },
                {
                    path: "shouji",
                    component: () =>
                        import ("../views/index/shouji"),
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "yishu",
                    component: () =>
                        import ("../views/index/yishu"),
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "zhineng",
                    component: () =>
                        import ("../views/index/zhineng"),
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "zhoubian",
                    component: () =>
                        import ("../views/index/zhoubian"),
                    meta: {
                        keepAlive: true
                    }
                }
            ],
            redirect: "/index/tuijian",
            linkActiveClass: "active"
        },

        {
            path: "/kind",
            component: () =>
                import ("../views/kind"),
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/car",
            component: () =>
                import ("../views/car")
        },
        {
            path: "/mine",
            component: () =>
                import ("../views/mine"),
            meta: {
                keepAlive: true
            },

        },
        {
            path: "/cardetil",
            component: () =>
                import ("../views/cardetil"),
            meta: {
                keepAlive: false
            }
        },
        {
            path: "/search",
            component: () =>
                import ("../views/search"),
            meta: {
                keepAlive: false
            }
        },
        {
            path: "/login",
            component: () =>
                import ("../views/login"),
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/registered",
            component: () =>
                import ("../views/registered"),
            meta: {
                keepAlive: true
            }
        }
    ],
    linkActiveClass: "active"
});
export default router;