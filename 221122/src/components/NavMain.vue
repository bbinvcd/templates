<template>
    <div class="mainnav-wrap">
        <div class="mainnav">
            <ul class="nav-warp clearfix">
                <li class="nav-item" v-for="item in navItems" :key="item.path" :id="item.id" :class="item.className" @mouseenter="showDropdown(item.category)" @mouseleave="hideDropdown">
                    <router-link class="nav-link" v-if="item.hasUrl" :to="item.path" :class="{ current: route.path === item.path }">
						<div v-if="item.hot" class="hot-icon"></div>
                        <span class="nav-link-text" v-if="item.category !== 'mores'">{{ item.name }}</span>
                    </router-link>
                    <a class="nav-link" v-else :href="item.path" :class="{ current: route.path === item.path }">
						<div v-if="item.hot" class="hot-icon"></div>
                        <span class="nav-link-text" v-if="item.category !== 'mores'">{{ item.name }}</span>
                    </a>
                </li>
                <li class="nav-item" :key="navMores.path" :id="navMores.id" :class="navMores.className">
                    <a class="nav-link" href="javascript:void(0)">
						<div v-if="navMores.hot" class="hot-icon"></div>
                        <span v-if="navMores.category !== 'mores'">{{ navMores.name }}</span>
                    </a>
                    <div key="mores" id="nav-mores" class="ele-drop-group">
                        <div class="lsub-inner-wrap">
                            <a v-for="platform in navMores.platforms" :key="platform.pn_link" :href="platform.pn_link" :class="platform.pn_class">
                                <span v-if="platform.pn_logo" :style="`background-image:url(${platform.pn_logo})`">0.0+</span>
                                {{ platform.pn_name }}
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <NavDropdown ref="dropdown" :navData="navData" />
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { NavData, NavItem } from "../types/nav";
import { useRoute } from "vue-router";
import NavDropdown from "./NavDropdown.vue";

const route = useRoute();

const navData = ref<NavData | null>(null);
const dropdown = ref();

// 取得導航資料
const fetchNavData = async () => {
    try {
        const response = await fetch("https://dev-wms.bbinpartner.com/api/navs"); // 你的 API 端點
        navData.value = await response.json();
    } catch (error) {
        console.error("Error fetching nav data:", error);
    }
};

// 根據 API 資料建立導航項目
const navItems = computed<NavItem[]>(() => {
    // 基本導航項目
    const baseNavItems: NavItem[] = [
        {
            name: "首页",
            path: "/",
            id: "nav-first",
            className: "nav-first",
            hasDropdown: false,
            hasUrl: true,
			hot: false
        },
        {
            name: "体育赛事",
            path: "/sports_login",
            id: "nav-ball",
            className: "nav-ball",
            hasDropdown: true,
            category: "balls",
            platforms: navData.value?.balls || [],
            hasUrl: true,
			hot: false
        },
        {
            name: "视讯直播",
            path: "/live",
            id: "nav-live",
            className: "nav-live",
            hasDropdown: true,
            category: "lives",
            platforms: navData.value?.lives || [],
            hasUrl: true,
			hot: false
        },
        {
            name: "电子游艺",
            path: "/casino_login",
            id: "nav-game",
            className: "nav-game",
            hasDropdown: true,
            category: "games",
            platforms: navData.value?.games || [],
            hasUrl: true,
			hot: true
        },
        {
            name: "彩票游戏",
            path: "/lottery",
            id: "nav-lottery",
            className: "nav-lottery",
            hasDropdown: true,
            category: "lotterys",
            platforms: navData.value?.lotterys || [],
            hasUrl: true,
			hot: false
        },
        {
            name: "棋牌游戏",
            path: "/card",
            id: "nav-card",
            className: "nav-card",
            hasDropdown: true,
            category: "cards",
            platforms: navData.value?.cards || [],
            hasUrl: true,
			hot: true
        },
        {
            name: "优惠活动",
            path: "/promotions",
            id: "nav-memberexclusiveii",
            className: "nav-memberexclusiveii",
            hasDropdown: false,
            hasUrl: true,
			hot: false
        },
        {
            name: "手机下注",
            path: "javascript:void(0)",
            id: "nav-mobile",
            className: "nav-mobile",
            hasDropdown: false,
            hasUrl: false,
			hot: false
        },
    ];

    return baseNavItems;
});

const navMores = computed(() => {
    const baseNavMores = {
        name: "更多",
        path: "javascript:void(0)",
        id: "nav-more",
        className: "nav-more",
        hasDropdown: true,
        category: "mores",
        platforms: navData.value?.mores || [],
		hot: false
    };

    return baseNavMores;
});

const showDropdown = (category?: string) => {
    if (category) {
        dropdown.value?.showDropdown(category);
    }
};

const hideDropdown = () => {
    dropdown.value?.hideDropdown();
};

onMounted(() => {
    fetchNavData();
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
// 導覽列選單
.nav-warp {
    .nav-item {
        float: left;
        & > .nav-link {
			position: relative;
            display: block;
            width: auto;
            text-align: center;
            font-size: 14px;
            width: 88px;
            height: 44px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 6px 6px 0;
            line-height: 24px;
            color: #292b33;
            &.current,
            &:hover {
                color: #fff;
                background: url("@/assets/image/nav_over.png") 0 0 no-repeat;
            }
            .nav-link-text {
				padding: 0 10px;
			}
			.hot-icon {
				position: absolute;
				top: 0;
				left: 0;
				width: 21px;
				height: 12px;
				background: url("@/assets/image/hot_01.png") 0 0 no-repeat;
			}
        }
        &.nav-more {
            position: relative;
            margin: 10px 0 0 10px;
            & > a {
                width: 15px;
                height: 18px;
                background: url("@/assets/image/sub.png") 50% 50% no-repeat;
            }
            &:hover {
                .ele-drop-group {
                    display: unset;
                }
            }
        }
    }
}

.ele-drop-group {
    display: none;
    position: absolute;
    left: 50%; // 從中間開始
    transform: translateX(calc(-50vw + 50px)); // 向左移動自身寬度的一半
    top: 100%;
    width: 100vw;
    z-index: 100;
    min-width: $subnav-width;
    box-shadow: rgba(16, 16, 16, 0.3) 2px 3px 3px;
    box-sizing: content-box;
    opacity: 0.95;
    @if $subnav-kind == 1 {
        background: rgba(18, 18, 18, 0.95);
        a {
            color: #fff;
        }
    } @else if $subnav-kind == 2 {
        background: rgba(85, 85, 85, 0.95);
        a {
            color: #fff;
        }
    } @else if $subnav-kind == 3 {
        background: rgba(249, 249, 249, 0.95);
        a {
            color: #333;
        }
    } @else if $subnav-kind == 4 {
        background: rgba(255, 255, 255, 0.95);
        a {
            color: #333;
        }
    }
    &#nav-mores {
        width: 130px !important;
        min-width: auto;
        left: 0;
        transform: translateX(calc(-50% + 13px)); // 向左移動下拉選單寬度的一半再往回推+號寬度的一半，才會剛好置中
    }
}

.lsub-inner-wrap {
    @include clearfix;
    width: $subnav-width;
    min-height: 200px;
    margin: 0 auto;
    padding-left: 225px;
    background-repeat: no-repeat;
    background-position: 0 0;
    #nav-mores & {
        width: 130px;
        min-height: auto;
        padding: 0;
        margin: 0;
    }
    a {
        span {
            display: block;
            @if $subnav-width < 1065px {
                width: calc(($subnav-width - 225px) / 6);
            } @else if $subnav-width < 1185px {
                width: calc(($subnav-width - 225px) / 7);
            } @else if $subnav-width < 1305px {
                width: calc(($subnav-width - 225px) / 8);
            } @else if $subnav-width < 1425px {
                width: calc(($subnav-width - 225px) / 9);
            } @else {
                width: 120px;
            }
            height: 40px;
            background-repeat: no-repeat;
        }

        float: left;
        display: block;
        @if $subnav-width < 1065px {
            width: calc(($subnav-width - 225px) / 6);
        } @else if $subnav-width < 1185px {
            width: calc(($subnav-width - 225px) / 7);
        } @else if $subnav-width < 1305px {
            width: calc(($subnav-width - 225px) / 8);
        } @else if $subnav-width < 1425px {
            width: calc(($subnav-width - 225px) / 9);
        } @else {
            width: 120px;
        }
        height: 90px;
        font-size: 14px;
        text-align: center;
        @include text-truncate;
        &:hover {
            color: $subnav-hover;
        }
        #nav-mores & {
            width: 130px;
            height: 38px;
            line-height: 38px;
            font-size: 12px;
            text-align: center;
            &:before {
                display: none;
            }
        }
    }
}
</style>
