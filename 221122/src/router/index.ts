import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "首頁",
        component: () => import("@/views/index.vue"),
        meta: {
            htmlClass: "first", // 定義該路由對應的 html class
            title: "首頁",
        },
    },
    {
        path: "/about",
        name: "關於我們",
        component: () => import("@/views/about.vue"),
        meta: {
            htmlClass: ["madvertis", "at1"], // 定義該路由對應的 html class
            title: "關於我們",
        },
    },
    {
        path: "/sports_login",
        name: "體育賽事",
        component: () => import("@/views/sports_login.vue"),
        meta: {
            htmlClass: ["ball", "is-login"], // 定義該路由對應的 html class
            title: "體育賽事",
        },
    },
    {
        path: "/live",
        name: "視訊直播",
        component: () => import("@/views/live.vue"),
        meta: {
            htmlClass: "livetop", // 定義該路由對應的 html class
            title: "視訊直播",
        },
    },

    {
        path: "/casino_login",
        name: "電子遊藝",
        component: () => import("@/views/casino_login.vue"),
        meta: {
            htmlClass: ["game", "is-login"], // 定義該路由對應的 html class
            title: "電子遊藝",
        },
    },
    {
        path: "/lottery",
        name: "彩票遊戲",
        component: () => import("@/views/lottery.vue"),
        meta: {
            htmlClass: "ltlottery", // 定義該路由對應的 html class
            title: "彩票遊戲",
        },
    },
    {
        path: "/card",
        name: "棋牌遊戲",
        component: () => import("@/views/card.vue"),
        meta: {
            htmlClass: "card", // 定義該路由對應的 html class
            title: "棋牌遊戲",
        },
    },

    {
        path: "/promotions",
        name: "優惠活動",
        component: () => import("@/views/promotions.vue"),
        meta: {
            htmlClass: ["madvertis", "memberexclusiveii"], // 定義該路由對應的 html class
            title: "優惠活動",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 路由守衛
router.beforeEach((to: any, from: any, next: any) => {
    const htmlElement = document.documentElement;

    // 移除舊的 classes
    if (from.meta.htmlClass) {
        const oldClasses = Array.isArray(from.meta.htmlClass) ? from.meta.htmlClass : [from.meta.htmlClass];
        htmlElement.classList.remove(...oldClasses);
    }

    // 添加新的 classes
    if (to.meta.htmlClass) {
        const newClasses = Array.isArray(to.meta.htmlClass) ? to.meta.htmlClass : [to.meta.htmlClass];
        htmlElement.classList.add(...newClasses);
    }

    document.title = (to.meta.title as string) || "預設標題";
    next();
});

export default router;
