<template>
    <div class="mainnav-wrap">
        <div class="mainnav">
            <ul class="clearfix">
                <li v-for="item in navItems" :key="item.path" :id="item.id" :class="item.className" @mouseenter="showDropdown(item.category)" @mouseleave="hideDropdown">
                    <router-link v-if="item.hasUrl" :to="item.path" :class="{ current: route.path === item.path }">
                        <span v-if="item.category !== 'mores'">{{ item.name }}</span>
                    </router-link>
                    <a v-else :href="item.path" :class="{ current: route.path === item.path }">
                        <span v-if="item.category !== 'mores'">{{ item.name }}</span>
                    </a>
                </li>
                <li :key="navMores.path" :id="navMores.id" :class="navMores.className">
                    <router-link :to="navMores.path">
                        <span v-if="navMores.category !== 'mores'">{{ navMores.name }}</span>
                    </router-link>
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
            id: "LS-first",
            className: "LS-first",
            hasDropdown: false,
            hasUrl: true,
        },
        {
            name: "体育赛事",
            path: "/sports_login",
            id: "LS-ball",
            className: "LS-ball",
            hasDropdown: true,
            category: "balls",
            platforms: navData.value?.balls || [],
            hasUrl: true,
        },
        {
            name: "视讯直播",
            path: "/live",
            id: "LS-live",
            className: "LS-live",
            hasDropdown: true,
            category: "lives",
            platforms: navData.value?.lives || [],
            hasUrl: true,
        },
        {
            name: "电子游艺",
            path: "/casino_login",
            id: "LS-game",
            className: "LS-game",
            hasDropdown: true,
            category: "games",
            platforms: navData.value?.games || [],
            hasUrl: true,
        },
        {
            name: "彩票游戏",
            path: "/lottery",
            id: "LS-lottery",
            className: "LS-lottery",
            hasDropdown: true,
            category: "lotterys",
            platforms: navData.value?.lotterys || [],
            hasUrl: true,
        },
        {
            name: "棋牌游戏",
            path: "/card",
            id: "LS-card",
            className: "LS-card",
            hasDropdown: true,
            category: "cards",
            platforms: navData.value?.cards || [],
            hasUrl: true,
        },
        {
            name: "优惠活动",
            path: "/promotions",
            id: "LS-memberexclusiveii",
            className: "LS-memberexclusiveii",
            hasDropdown: false,
            hasUrl: true,
        },
        {
            name: "手机下注",
            path: "javascript:void(0)",
            id: "LS-mobile",
            className: "LS-mobile",
            hasDropdown: false,
            hasUrl: false,
        },
    ];

    return baseNavItems;
});

const navMores = computed(() => {
    const baseNavMores = {
        name: "更多",
        path: "javascript:void(0)",
        id: "LS-more",
        className: "LS-more",
        hasDropdown: true,
        category: "mores",
        platforms: navData.value?.mores || [],
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
@use "@/assets/scss/base/variables" as *; // 使用 @ 別名
@use "@/assets/scss/base/mixins" as *;
// 導覽列選單
.mainnav-wrap {
    position: relative;
    .mainnav {
        * {
            box-sizing: border-box;
        }
        ul {
            li {
                position: relative;
                // display: inline-block;
                float: left;
                vertical-align: middle;
                width: 100px;
                & > a {
                    display: block;
                    width: auto;
                    text-align: center;
                    font-size: 14px;

                    width: 100px;
                    height: 52px; //56
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    padding: 6px 6px 0;
                    line-height: 24px;
                    color: #292b33;
                    &.current,
                    &:hover {
                        color: #fff;
                        background: url("@/assets/image/nav_over.png") center top no-repeat;
                    }
                }
                &.LS-more {
                    margin: 10px 0 0 10px;
                    & > a {
                        display: block;
                        width: 15px;
                        height: 18px;
                        background: url("@/assets/image/sub.png") 50% 50% no-repeat;
                    }
                }
                &:hover {
                    .ele-drop-group {
                        display: block !important; // 覆蓋 inline style
                    }
                }
            }
        }
    }
}

// 下拉子選單  這邊的設定都只是為了特立獨行的more(也就是那個+號)
@if $subnav-type==1 {
    .ele-subnav-title {
        display: block;
        //height: 43px;
        line-height: 43px;
        text-align: center;
        font-size: 14px;
        color: rgb(255, 191, 0);
        @include text-truncate;
        @if $subnav-kind==1 {
            background: #2a2a2a;
        } @else if $subnav-kind==2 {
            background: #424242;
        } @else if $subnav-kind==3 {
            background: #870000;
        } @else if $subnav-kind==4 {
            background: #ddd;
            color: #f90c0b;
        }
    }

    .ele-drop-group {
        width: 130px;
        * {
            box-sizing: border-box;
        }
    }

    .lsub-inner-wrap {
        width: 100%;
        border-width: 1px;
        border-style: solid;
        border: 1px solid $subnav-border;
        box-shadow: rgba(16, 16, 16, 0.3) 2px 3px 3px;
        a {
            display: block;
            height: 38px;
            line-height: 38px;
            font-size: 12px;
            @include text-truncate;
            padding: 0 10px 0 37px;
            &:hover {
                color: $subnav-hover;
            }
        }
        @if $subnav-kind==1 {
            background: rgba(0, 0, 0, 0.95);
            a {
                color: #fff;
            }
        } @else if $subnav-kind==2 {
            background: rgba(85, 85, 85, 0.95);
            a {
                color: #fff;
            }
        } @else if $subnav-kind==3 {
            background: rgba(255, 255, 255, 0.8);
            a {
                color: #000;
            }
        } @else if $subnav-kind==4 {
            background: rgba(255, 255, 255, 0.8);
            a {
                color: #000;
            }
        }
    }

    #nav-game {
        &.ele-drop-group {
            width: 448px;
        }
        .lsub-inner-wrap {
            @include clearfix;
            a {
                width: 25%;
                float: left;
            }
        }
    }
} @else if $subnav-type==2 {
    .ele-subnav-title {
        display: none;
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
        // padding: 30px 0;
        box-sizing: content-box;
        opacity: 0.95;
        @if $subnav-kind==1 {
            background: rgba(18, 18, 18, 0.95);
            a {
                color: #fff;
            }
        } @else if $subnav-kind==2 {
            background: rgba(85, 85, 85, 0.95);
            a {
                color: #fff;
            }
        } @else if $subnav-kind==3 {
            background: rgba(249, 249, 249, 0.95);
            a {
                color: #333;
            }
        } @else if $subnav-kind==4 {
            background: rgba(255, 255, 255, 0.95);
            a {
                color: #333;
            }
        }
        &#nav-mores {
            width: 130px !important;
            min-width: unset;
            left: 0; // 從中間開始
            transform: translateX(calc(-50% + 7px)); // 向左移動自身寬度的一半
        }
    }

    .lsub-inner-wrap {
        @include clearfix;
        width: $subnav-width;
        min-height: 200px;
        margin: 0 auto;
        padding-left: 225px;
        background-repeat: no-repeat;
        background-position: left top;
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
                background: none;
                width: 130px;
                height: 38px;
                line-height: 38px;
                padding: 0 10px 0 37px;
                font-size: 12px;
                text-align: left;
                &:before {
                    display: none;
                }
            }
        }
    }
}
</style>
