<template>
    <header class="page-header">
        <div class="header clearfix" :class="{ isfixed: isFixed }">
            <div class="header-wrap">
                <div class="header-nav clearfix" ref="headerNav">
                    <!-- left -->
                    <div class="header-left-side">
                        <!-- news -->
                        <News />
                        <!-- nav -->
                        <NavMain />
                    </div>
                    <!-- right -->
                    <div class="header-right-side clearfix">
                        <!-- links -->
                        <ul class="header-links-wrap">
                            <li class="header-link-item01">
                                <a href="javascript:void(0)">
                                    <div class="icon-wrap">
                                        <i></i>
                                    </div>
                                    加入代理
                                </a>
                            </li>
                            <li class="header-link-item02">
                                <a href="javascript:void(0)">
                                    <div class="icon-wrap">
                                        <i></i>
                                    </div>
                                    在线客服
                                </a>
                            </li>
                            <li class="header-link-item03">
                                <a href="javascript:void(0)">
                                    <div class="icon-wrap">
                                        <i></i>
                                    </div>
                                    帮助中心
                                </a>
                            </li>
                            <li class="header-link-item04">
                                <a href="javascript:void(0)">
                                    <div class="icon-wrap">
                                        <i></i>
                                    </div>
                                    备用地址
                                </a>
                            </li>
                        </ul>
                        <!-- lang -->
                        <LangSelector />
                    </div>
                </div>
            </div>
            <!-- logo -->
            <Logo :style="{ 'z-index': logoZIndex }" />
            <!-- login -->
            <Login />
            <!-- slider -->
            <div v-if="isHomePage" class="first-slider-wrap">
                <div id="js-ele-slideshow" class="ele-slideshow-wrap">
                    <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                        <ul>
                            <li v-for="(slide, index) in slides" :key="index" :data-autoplaytime="slide.autoplayTime" :class="{ active: currentIndex === index }">
                                <a :href="slide.link">
                                    <div class="img" :style="{ backgroundImage: `url(${slide.image})` }"></div>
                                </a>
                            </li>
                        </ul>

                        <!-- 導航點 -->
                        <div id="js-ele-slideshow-control-wrap1" class="ele-slideshow-control-wrap">
                            <div id="js-ele-slideshow-nav1" class="ele-slideshow-nav">
                                <a v-for="(slide, index) in slides" :key="index" href="javascript:void(0)" :class="{ active: currentIndex === index }" @click="goToSlide(index)"></a>
                            </div>
                        </div>

                        <!-- 左右箭頭 -->
                        <div class="ele-slideshow-arrow-wrap">
                            <a href="javascript:void(0)" id="js-ele-slideshow-arrow-left1" class="ele-slideshow-arrow ele-slideshow-arrow-left" :style="{ top: '355px' }" @click="prevSlide"></a>
                            <a href="javascript:void(0)" id="js-ele-slideshow-arrow-right1" class="ele-slideshow-arrow ele-slideshow-arrow-right" :style="{ top: '355px' }" @click="nextSlide"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, inject } from "vue";
import { gsap } from "gsap";
import Login from "./Login.vue";
import News from "./News.vue";
import NavMain from "./NavMain.vue";
import LangSelector from "./LangSelector.vue";
import Logo from "./Logo.vue";
import slider01 from "@/assets/image/not-use/slider01.png";
import slider02 from "@/assets/image/not-use/slider02.png";
import { useRoute } from "vue-router";
import type { SharedState } from "../types/sharedState";

const route = useRoute();
const isHomePage = computed(() => {
    return route.path === "/";
});
const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;
const isFixed = ref(false);
const headerNav = ref<HTMLElement | null>(null);
// 檢查寬度並設置固定狀態
const checkWidth = () => {
    if (!headerNav.value) return;

    const windowWidth = window.innerWidth;
    const navWidth = headerNav.value.offsetWidth;
    isFixed.value = windowWidth > navWidth + 20;
    updateSharedState({
        isFixed: isFixed.value,
    });
};

// 處理視窗大小變化
const handleResize = () => {
    // 檢查寬度
    checkWidth();
};

const logoZIndex = ref(2222222);
// 監聽滾動事件
const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const navElement = headerNav.value;

    if (!navElement || !isFixed.value) return;

    // 處理 logo z-index
    logoZIndex.value = scrollTop > 0 ? 1 : 2222222;
};

// 定義輪播圖數據
const slides = [
    {
        image: slider01,
        link: "javascript:void(0)",
        autoplayTime: 5000,
    },
    {
        image: slider02,
        link: "javascript:void(0)",
        autoplayTime: 5000,
    },
];

const currentIndex = ref(0);
let autoplayTimer: number | null = null;

// 切換到下一張
const nextSlide = () => {
    const nextIndex = (currentIndex.value + 1) % slides.length;
    animateSlide(currentIndex.value, nextIndex);
    currentIndex.value = nextIndex;
};

// 切換到上一張
const prevSlide = () => {
    const nextIndex = currentIndex.value - 1 < 0 ? slides.length - 1 : currentIndex.value - 1;
    animateSlide(currentIndex.value, nextIndex);
    currentIndex.value = nextIndex;
};

// 切換到指定幻燈片
const goToSlide = (index: number) => {
    if (index === currentIndex.value) return;
    animateSlide(currentIndex.value, index);
    currentIndex.value = index;
};

// 動畫效果
const animateSlide = (fromIndex: number, toIndex: number) => {
    const slideElements = document.querySelectorAll(".ele-slideshow-scroll li");

    gsap.to(slideElements[fromIndex], {
        opacity: 0,
        duration: 0.5,
    });

    gsap.fromTo(slideElements[toIndex], { opacity: 0 }, { opacity: 1, duration: 0.5 });
};

// 自動播放
onMounted(() => {
    autoplayTimer = window.setInterval(() => {
        nextSlide();
    }, slides[currentIndex.value].autoplayTime);
    checkWidth();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
});

// 清理定時器
onUnmounted(() => {
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
    }
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
.header {
    &.isfixed {
        .header-wrap {
            width: 100%;
            position: fixed;
            z-index: 700;
            left: 0;
            right: 0;
            top: 0;
        }
    }
    .header-wrap {
        height: 110px;
        background: url("@/assets/image/header_bg01_x.jpg") repeat-x 0 0;

        .isfixed & {
            position: fixed;
            z-index: 700;
            left: 0;
            right: 0;
            top: 0;
        }

        .header-nav {
            position: relative;
            @include layout-max-width;
            .header-left-side {
                float: left;
                width: 920px;
                padding-top: 11px;
            }
            .header-right-side {
                float: left;
                width: 400px;
            }
        }
    }
}
.header-links-wrap {
    float: left;
    font-size: 13px;
    padding-top: 10px;
    li {
        position: relative;
        text-align: center;
        float: left;
        display: block;
        margin: 0 5px;
        cursor: pointer;
        &:hover {
            .icon-wrap {
                padding-bottom: 4px;
                //金色背景底圖
                background: linear-gradient(to right, #ddb59c 0, #fee2c8 50%, #ddb59c 100%);
                box-shadow: 0 5px 10px 0 rgba(41, 43, 51, 0.2);
                &:after {
                    background: linear-gradient(to right, #ddb59c 0, #fee2c8 50%, #ddb59c 100%);
                }
                i {
                    filter: drop-shadow(0 4px 8px rgba(41, 43, 51, 0.2));
                }
            }
        }
        .icon-wrap {
            position: absolute;
            width: 40px;
            height: 40px;
			top: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            transition: all 0.3s;
            border-radius: 100%;
            i {
                width: 22px;
                height: 22px;
                position: absolute;
                left: 9px;
                top: 9px;
            }
            &:after {
                content: "";
                display: block;
                background: linear-gradient(#fefefe 0, #f0f2ff 50%, #fefefe 100%);
                border-radius: 100%;
                width: 100%;
                height: 100%;
                box-shadow: 0 5px 10px 0 rgba(41, 43, 51, 0.15);
            }
        }
        a {
            display: block;
            width: 70px;
            overflow: hidden;
            line-height: 22px;
            height: 22px;
            color: #737580;
            padding-top: 50px;
        }
    }
    li {
        @for $i from 1 through 4 {
            &.header-link-item0#{$i} {
                .icon-wrap {
                    i {
                        background: url("@/assets/image/header_btn_links0#{$i}.png") no-repeat 0 0;
                    }
                }
                &:hover {
                    .icon-wrap {
                        i {
                            background-position: 0 100%;
                        }
                    }
                }
            }
        }
    }
}
.first-slider-wrap {
    position: relative;
    height: 790px;
    background: url("@/assets/image/first_slider_bg01.jpg") no-repeat 50% 0 #e4e6f2;

    // 控制按鈕樣式
    .ele-slideshow-control-wrap {
        position: absolute;
        bottom: 90px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .ele-slideshow-wrap {
        position: relative;
        height: $first-height;
        ul {
            li {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                a {
                    display: block;
                    .img {
                        width: 100%;
                        height: $first-height;
                        background-position: 50%;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
    }
    .ele-slideshow-scroll {
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        ul {
            width: 100%;
            height: 100%;

            li {
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 0.5s;

                &.active {
                    opacity: 1;
                }

                .img {
                    width: 100%;
                    height: 100%;
                    background-position: 50%;
                    background-repeat: no-repeat;
                }
            }
        }
    }
    // 左右箭頭
    .ele-slideshow-arrow-wrap {
        .ele-slideshow-arrow {
            position: absolute;
            width: 80px;
            height: 80px;
            background: url("@/assets/image/slider_arrow.png") 0 0 no-repeat;
            opacity: 0.5;
            &.ele-slideshow-arrow-left {
                left: 20px;
            }
            &.ele-slideshow-arrow-right {
                left: auto;
                right: 20px;
                background-position: -80px 0;
            }
            &:hover {
                opacity: 1;
            }
        }
    }
    // 圓點控制項的框架
    .ele-slideshow-control-wrap {
        text-align: center;
        width: 100%;
        position: absolute;
        z-index: 2;
        bottom: 90px;
        left: auto !important;
        right: 0;
    }
    // 圓點控制項的按鈕風格
    .ele-slideshow-nav {
        > a {
            display: inline-block;
            vertical-align: middle;
            width: 14px;
            height: 14px;
            background: url("@/assets/image/slider_ctrl.png") no-repeat 0 0;
            margin: 0 5px;
            &.active {
                background-position: 100% 0;
            }
        }
    }
}
</style>
