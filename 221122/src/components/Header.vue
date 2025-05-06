<template>
    <header id="page-header">
        <div class="header-main clearfix" :class="{ isfixed: isFixed }">
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
                        <HeaderLinks />
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
                        <div id="js-ele-slideshow-control-wrap1" class="ele-slideshow-control-wrap" :style="{ left: '0px' }">
                            <div id="js-ele-slideshow-nav1" class="ele-slideshow-nav">
                                <a v-for="(_, index) in slides" :key="index" href="javascript:void(0)" :class="{ active: currentIndex === index }" @click="goToSlide(index)"> </a>
                            </div>
                        </div>

                        <!-- 左右箭頭 -->
                        <div class="ele-slideshow-arrow-wrap">
                            <a href="javascript:void(0)" id="js-ele-slideshow-arrow-left1" class="ele-slideshow-arrow ele-slideshow-arrow-left" :style="{ top: '355px' }" @click="prevSlide">
                                <i></i>
                            </a>
                            <a href="javascript:void(0)" id="js-ele-slideshow-arrow-right1" class="ele-slideshow-arrow ele-slideshow-arrow-right" :style="{ top: '355px' }" @click="nextSlide">
                                <i></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { gsap } from "gsap";
import Login from "./Login.vue";
import News from "./News.vue";
import NavMain from "./NavMain.vue";
import HeaderLinks from "./HeaderLinks.vue";
import LangSelector from "./LangSelector.vue";
import Logo from "./Logo.vue";
import slider01 from "@/assets/image/not-use/slider01.png";
import slider02 from "@/assets/image/not-use/slider02.png";
import { useRoute } from "vue-router";

const route = useRoute();
const isHomePage = computed(() => {
    return route.path === "/";
});

const isFixed = ref(false);
const headerNav = ref<HTMLElement | null>(null);
// 檢查寬度並設置固定狀態
const checkWidth = () => {
    if (!headerNav.value) return;

    const windowWidth = window.innerWidth;
    const navWidth = headerNav.value.offsetWidth;
    isFixed.value = windowWidth > navWidth + 20; // 外加20px把旁邊的sc
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
@use "@/assets/scss/base/variables" as *; // 使用 @ 別名
@use "@/assets/scss/base/mixins" as *; // 使用 @ 別名
#page-header {
}
.header-main {
    &.isfixed {
        .header-wrap {
            position: fixed;
            z-index: 1111111;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 0;
        }
    }
    position: relative;
    .first & {
    }
    .header-wrap {
        // fixed在這裏
        width: 100%;
        height: 110px;
        background: url("@/assets/image/header_bg01_x.jpg") repeat-x left top;

        .isfixed & {
            position: fixed;
            z-index: 1111111;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 0;
        }

        .header-nav {
            position: relative;
            @include layout-max-width;
            .header-left-side {
                float: left;
                width: 920px;
                padding-top: 15px;
            }
            .header-right-side {
                float: left;
                width: 400px;
            }
        }
    }
}
.first-slider-wrap {
    position: relative;
    width: 100%;
    height: 790px;
    // margin-top: 110px;
    background: url("@/assets/image/first_slider_bg01.jpg") no-repeat center top #e4e6f2;
    .ele-slideshow-wrap {
        position: relative;
        // overflow: hidden;
    }

    .ele-slideshow-scroll {
        ul {
            position: relative;
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
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
        }
    }

    // 控制按鈕樣式
    .ele-slideshow-control-wrap {
        position: absolute;
        bottom: 90px;
        width: 100%;
        display: flex;
        justify-content: center;

        .nav-dots {
            display: flex;
            gap: 10px;

            button {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                border: none;
                cursor: pointer;

                &.active {
                    background: white;
                }
            }
        }

        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;

            &.prev {
                left: 20px;
            }

            &.next {
                right: 20px;
            }
        }
    }
}
</style>
