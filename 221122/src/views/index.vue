<template>
    <Header />
    <main class="page-container">
        <div class="page-body">
            <div class="first-middle-wrap">
                <div class="first-wrap clearfix">
                    <div class="first-tip-wrap">
                        <a class="first-tip-item-1 tip-item" v-if="!isLogin" href="javascript:void(0);">
                            <div class="first-tip-icon"></div>
                            <div class="first-tip-box">
                                <div class="first-tip-title">注册</div>
                                <div class="first-tip-content">免费创建账号</div>
                            </div>
                        </a>
                        <a class="first-tip-item-1 tip-item" v-else href="javascript:void(0);">
                            <div class="first-tip-icon"></div>
                            <div class="first-tip-box">
                                <div class="first-tip-title">欢迎光临</div>
                                <div class="first-tip-content">挑战您的好运气</div>
                            </div>
                        </a>
                        <div class="first-tip-item-2 tip-item" href="javascript:void(0);">
                            <div class="first-tip-icon"></div>
                            <div class="first-tip-box">
                                <div class="first-tip-title">存款</div>
                                <div class="first-tip-content">平均12秒快速存款</div>
                            </div>
                        </div>
                        <div class="first-tip-item-3 tip-item" href="javascript:void(0);">
                            <div class="first-tip-icon"></div>
                            <div class="first-tip-box">
                                <div class="first-tip-title">提款</div>
                                <div class="first-tip-content">平均25秒快速到账</div>
                            </div>
                        </div>
                        <a class="first-tip-item-4 tip-item" href="javascript:void(0);">
                            <div class="first-tip-icon"></div>
                            <div class="first-tip-box">
                                <div class="first-tip-title">新手指南</div>
                                <div class="first-tip-content">简单便捷轻松上手</div>
                            </div>
                        </a>
                        <a class="first-tip-item-5 tip-item" href="javascript:void(0);">
                            <div class="first-tip-icon"></div>
                            <div class="first-tip-box">
                                <div class="first-tip-title">代理</div>
                                <div class="first-tip-content">加入代理行列</div>
                            </div>
                        </a>
                    </div>
                    <!-- 热门优惠 -->
                    <div class="middle-left">
                        <p>热门优惠</p>
                        <div class="middle-discount-wrap">
                            <div id="js-ele-slideshow2" class="ele-slideshow-wrap2">
                                <div class="js-ele-slideshow-scroll ele-slideshow-scroll2">
                                    <ul>
                                        <li
                                            v-for="(slide, index) in slides"
                                            :key="index"
                                            :data-autoplaytime="slide.autoplayTime"
                                            :style="{
                                                display: 'list-item',
                                                opacity: currentIndex === index ? 1 : 0,
                                                position: index === 0 ? 'relative' : 'absolute',
                                            }"
                                        >
                                            <a :href="slide.link">
                                                <div class="ele-slideshow-img" :style="{ backgroundImage: `url(${slide.image})` }"></div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap-test"></div>
                                </div>

                                <!-- 導航點 -->
                                <div id="js-ele-slideshow-control-wrap2" class="ele-slideshow-control-wrap">
                                    <div id="js-ele-slideshow-nav2" class="ele-slideshow-nav">
                                        <a v-for="(slide, index) in slides" :key="index" href="javascript:void(0)" class="ele-slideshow-nav-dot" :class="{ active: currentIndex === index }" @click="goToSlide(index)"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 輪播 -->
                    <div class="middle-center">
                        <swiper
                            :modules="[Autoplay, EffectFade, Navigation]"
                            :speed="1000"
                            :effect="'fade'"
                            :fadeEffect="{
                                crossFade: true,
                            }"
                            :loop="true"
                            :navigation="true"
                            :autoplay="{
                                delay: 5000,
                                disableOnInteraction: false,
                            }"
                        >
                            <!-- 1經典百家樂 -->
                            <swiper-slide class="slider-content slider1">
                                <div class="slider-top">
                                    <i class="slider-img01"></i>
                                    <i class="slider-img02"></i>
                                    <i class="slider-img03"></i>
                                    <i class="slider-img04"></i>
                                    <div class="slider-text">
                                        <p class="slider-text-title">经典百家乐</p>
                                        <p class="slider-text-content">让您在何处都能体验真实赌场刺激愉快的感官享受。</p>
                                    </div>
                                </div>
                                <div class="slider-bottom clearfix">
                                    <div class="slider-number clearfix">
                                        <div class="slider-number-counter">
                                            <span id="js-countdown1">{{ countdown1 }}</span>
                                        </div>
                                        <a href="javascript:void(0)">快速入座</a>
                                    </div>
                                    <div class="slider-animate-a"></div>
                                </div>
                            </swiper-slide>
                            <!-- 2輪盤 -->
                            <swiper-slide class="slider-content slider2">
                                <div class="slider-top">
                                    <i class="slider-img01"></i>
                                    <i class="slider-img02"></i>
                                    <i class="slider-img03"></i>
                                    <div class="slider-text">
                                        <p class="slider-text-title">轮盘</p>
                                        <p class="slider-text-content">超越空间的限制带您玩转真人视讯轮盘游戏。</p>
                                    </div>
                                </div>
                                <div class="slider-bottom clearfix">
                                    <div class="slider-number clearfix">
                                        <div class="slider-number-counter">
                                            <span id="js-countdown2">{{ countdown2 }}</span>
                                        </div>
                                        <a href="javascript:void(0)">快速入座</a>
                                    </div>
                                    <div class="slider-animate-b"></div>
                                </div>
                            </swiper-slide>
                            <!-- 3龍虎 -->
                            <swiper-slide class="slider-content slider3">
                                <div class="slider-top">
                                    <i class="slider-img01"></i>
                                    <i class="slider-img02"></i>
                                    <i class="slider-img03"></i>
                                    <i class="slider-img04"></i>
                                    <i class="slider-img05"></i>
                                    <div class="slider-text">
                                        <p class="slider-text-title">龙虎</p>
                                        <p class="slider-text-content">给予玩家最火爆竞技快感，带领体验胜利方程式。</p>
                                    </div>
                                </div>
                                <div class="slider-bottom clearfix">
                                    <div class="slider-number clearfix">
                                        <div class="slider-number-counter">
                                            <span id="js-countdown3">{{ countdown3 }}</span>
                                        </div>
                                        <a href="javascript:void(0)">快速入座</a>
                                    </div>
                                    <div class="slider-animate-c"></div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <!-- 热门桌台推荐 -->
                    <div class="middle-right">
                        <p>热门桌台推荐</p>
                        <div class="middle-right-wrap">
                            <a class="middle-right-item-1" href="/live">
                                <span>百家乐 (比基尼厅)</span>
                                <div>快速入座</div>
                            </a>
                            <a class="middle-right-item-2" href="/live">
                                <span>区块链抢庄牛牛</span>
                                <div>快速入座</div>
                            </a>
                            <a class="middle-right-item-3" href="/live">
                                <span>21点百家乐</span>
                                <div>快速入座</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="first-tab-game-wrap">
                <div class="tab-content-wrap">
                    <!-- sports -->
                    <div class="tab-content is-active clearfix tab-sports">
                        <div class="tab-title">
                            <p>丰富多元的体育投注赛事</p>
                            <span>全世界主要的体育运动，提供最即时的赛事结果</span>
                        </div>
                        <div class="tab-game-wrap">
                            <a class="tab-sports-item1" href="javascript:void(0)" title="足球">
                                <i></i>
                                <span>足球</span>
                            </a>
                            <a class="tab-sports-item2" href="javascript:void(0)" title="篮球">
                                <i></i>
                                <span>篮球</span>
                            </a>
                            <a class="tab-sports-item3" href="javascript:void(0)" title="网球">
                                <i></i>
                                <span>网球</span>
                            </a>
                            <a class="tab-sports-item4" href="javascript:void(0)" title="英雄联盟">
                                <i></i>
                                <span>英雄联盟</span>
                            </a>
                            <a class="tab-sports-item5" href="javascript:void(0)" title="CS:GO">
                                <i></i>
                                <span>CS:GO</span>
                            </a>
                            <a class="tab-sports-item6" href="javascript:void(0)" title="刀塔2">
                                <i></i>
                                <span>刀塔2</span>
                            </a>
                        </div>
                        <div class="mobile-wrap">
                            <div class="mobile-img1"></div>
                            <div class="mobile-html5">
                                <p class="mobile-detail1">无需下载直接访问<br />web.bbinpartner.com</p>
                                <div class="mobile-detail2">
                                    <div class="mobile-qrcode"></div>
                                    <p>扫码下载APP<br />支持iOS & Android</p>
                                </div>
                            </div>
                            <div class="mobile-img3"></div>
                            <div class="mobile-img2"></div>
                            <div class="mobile-img4"></div>
                        </div>
                    </div>
                    <!-- casino -->
                    <div class="tab-content clearfix tab-casino">
                        <div class="tab-title">
                            <p>多种线数组合的老虎机，应有尽有</p>
                            <span>在家就可以等待从天而降的彩金，你还在等什么？</span>
                        </div>
                        <div class="tab-game-wrap">
                            <a class="tab-casino-item1" href="javascript:void(0)" title="糖果派对">
                                <i></i>
                                <span>糖果派对</span>
                            </a>
                            <a class="tab-casino-item2" href="javascript:void(0)" title="连环夺宝2">
                                <i></i>
                                <span>连环夺宝2</span>
                            </a>
                            <a class="tab-casino-item3" href="javascript:void(0)" title="开心消消乐">
                                <i></i>
                                <span>开心消消乐</span>
                            </a>
                            <a class="tab-casino-item4" href="javascript:void(0)" title="女娲补天">
                                <i></i>
                                <span>女娲补天</span>
                            </a>
                            <a class="tab-casino-item5" href="javascript:void(0)" title="疯狂水果盘">
                                <i></i>
                                <span>疯狂水果盘</span>
                            </a>
                            <a class="tab-casino-item6" href="javascript:void(0)" title="森林舞会">
                                <i></i>
                                <span>森林舞会</span>
                            </a>
                        </div>
                        <div class="mobile-wrap">
                            <div class="mobile-img1"></div>
                            <div class="mobile-html5">
                                <p class="mobile-detail1">无需下载直接访问<br />web.bbinpartner.com</p>
                                <div class="mobile-detail2">
                                    <div class="mobile-qrcode"></div>
                                    <p>扫码下载APP<br />支持iOS & Android</p>
                                </div>
                            </div>
                            <div class="mobile-img2"></div>
                            <div class="mobile-img3"></div>
                            <div class="mobile-img4"></div>
                            <div class="mobile-img5"></div>
                        </div>
                    </div>
                    <!-- live -->
                    <div class="tab-content tab-live clearfix">
                        <div class="tab-title">
                            <p>个性化定制 真人品项最齐</p>
                            <span>体验丰富有趣的百家乐游戏，更可以与美丽的荷官共同在牌桌上斗智力拼运气</span>
                        </div>
                        <div class="tab-game-wrap">
                            <a class="tab-live-item1" href="javascript:void(0)" title="21点百家乐">
                                <i></i>
                                <span>21点百家乐</span>
                            </a>
                            <a class="tab-live-item2" href="javascript:void(0)" title="百家乐 (中文荷官 1 厅)">
                                <i></i>
                                <span>百家乐 (中文荷官 1 厅)</span>
                            </a>
                            <a class="tab-live-item3" href="javascript:void(0)" title="百家乐 (比基尼厅)">
                                <i></i>
                                <span>百家乐 (比基尼厅)</span>
                            </a>
                            <a class="tab-live-item4" href="javascript:void(0)" title="区块链龙虎斗">
                                <i></i>
                                <span>区块链龙虎斗</span>
                            </a>
                            <a class="tab-live-item5" href="javascript:void(0)" title="区块链百家乐">
                                <i></i>
                                <span>区块链百家乐</span>
                            </a>
                            <a class="tab-live-item6" href="javascript:void(0)" title="轮盘">
                                <i></i>
                                <span>轮盘</span>
                            </a>
                        </div>
                        <div class="mobile-wrap">
                            <div class="mobile-img1"></div>
                            <div class="mobile-html5">
                                <p class="mobile-detail1">无需下载直接访问<br />web.bbinpartner.com</p>
                                <div class="mobile-detail2">
                                    <div class="mobile-qrcode"></div>
                                    <p>扫码下载APP<br />支持iOS & Android</p>
                                </div>
                            </div>
                            <div class="mobile-img2"></div>
                            <div class="mobile-img3"></div>
                            <div class="mobile-img4"></div>
                        </div>
                    </div>
                    <!-- lottery -->
                    <div class="tab-content tab-lottery clearfix">
                        <div class="tab-title">
                            <p>彩票抽奖即时开彩</p>
                            <span>历史悠久，时下最热门，最受欢迎的高端采种</span>
                        </div>
                        <div class="tab-game-wrap">
                            <a class="tab-lottery-item1" href="javascript:void(0)" title="BB竞速重庆时时彩">
                                <i></i>
                                <span>BB竞速重庆时时彩</span>
                            </a>
                            <a class="tab-lottery-item2" href="javascript:void(0)" title="BB竞速北京PK拾">
                                <i></i>
                                <span>BB竞速北京PK拾</span>
                            </a>
                            <a class="tab-lottery-item3" href="javascript:void(0)" title="BB番摊">
                                <i></i>
                                <span>BB番摊</span>
                            </a>
                            <a class="tab-lottery-item4" href="javascript:void(0)" title="BB深海派对">
                                <i></i>
                                <span>BB深海派对</span>
                            </a>
                            <a class="tab-lottery-item5" href="javascript:void(0)" title="BB鱿鱼游戏">
                                <i></i>
                                <span>BB鱿鱼游戏</span>
                            </a>
                            <a class="tab-lottery-item6" href="javascript:void(0)" title="BB宾果连线">
                                <i></i>
                                <span>BB宾果连线</span>
                            </a>
                        </div>
                        <div class="mobile-wrap">
                            <div class="mobile-img1"></div>
                            <div class="mobile-html5">
                                <p class="mobile-detail1">无需下载直接访问<br />web.bbinpartner.com</p>
                                <div class="mobile-detail2">
                                    <div class="mobile-qrcode"></div>
                                    <p>扫码下载APP<br />支持iOS & Android</p>
                                </div>
                            </div>
                            <div class="mobile-img2"></div>
                            <div class="mobile-img3"></div>
                            <div class="mobile-img4"></div>
                        </div>
                    </div>
                    <!-- card -->
                    <div class="tab-content tab-card clearfix">
                        <div class="tab-title">
                            <p>创新开发棋牌休闲游戏</p>
                            <span>棋牌对战 闯关大派送，开启您的棋牌之旅</span>
                        </div>
                        <div class="tab-game-wrap">
                            <a class="tab-card-item1" href="javascript:void(0)" title="大话骰">
                                <i></i>
                                <span>大话骰</span>
                            </a>
                            <a class="tab-card-item2" href="javascript:void(0)" title="二人麻将">
                                <i></i>
                                <span>二人麻将</span>
                            </a>
                            <a class="tab-card-item3" href="javascript:void(0)" title="龙虎斗">
                                <i></i>
                                <span>龙虎斗</span>
                            </a>
                            <a class="tab-card-item4" href="javascript:void(0)" title="BB深海派对">
                                <i></i>
                                <span>BB深海派对</span>
                            </a>
                            <a class="tab-card-item5" href="javascript:void(0)" title="红黑大战">
                                <i></i>
                                <span>红黑大战</span>
                            </a>
                            <a class="tab-card-item6" href="javascript:void(0)" title="百家乐">
                                <i></i>
                                <span>百家乐</span>
                            </a>
                        </div>
                        <div class="mobile-wrap">
                            <div class="mobile-img1"></div>
                            <div class="mobile-html5">
                                <p class="mobile-detail1">无需下载直接访问<br />web.bbinpartner.com</p>
                                <div class="mobile-detail2">
                                    <div class="mobile-qrcode"></div>
                                    <p>扫码下载APP<br />支持iOS & Android</p>
                                </div>
                            </div>
                            <div class="mobile-img2"></div>
                            <div class="mobile-img3"></div>
                            <div class="mobile-img4"></div>
                            <div class="mobile-img5"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-nav-wrap">
                    <div class="tab-nav tab-nav-1" :class="{ 'is-active': activeTabIndex === 0 }" @click="switchTab(0)">体育赛事</div>
                    <div class="tab-nav tab-nav-2" :class="{ 'is-active': activeTabIndex === 1 }" @click="switchTab(1)">电子游艺</div>
                    <div class="tab-nav tab-nav-3" :class="{ 'is-active': activeTabIndex === 2 }" @click="switchTab(2)">视讯直播</div>
                    <div class="tab-nav tab-nav-4" :class="{ 'is-active': activeTabIndex === 3 }" @click="switchTab(3)">彩票游戏</div>
                    <div class="tab-nav tab-nav-5" :class="{ 'is-active': activeTabIndex === 4 }" @click="switchTab(4)">棋牌游戏</div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, inject, computed } from "vue";
import { ref } from "vue";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import $ from "jquery";
import type { SharedState } from "../types/sharedState";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const sharedState = inject("sharedState") as { value: SharedState };
const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;

const slides = [
    {
        image: new URL("@/assets/image/not-use/slider03.png", import.meta.url).href,
        link: "javascript:void(0)",
        autoplayTime: 5000,
    },
    {
        image: new URL("@/assets/image/not-use/slider04.png", import.meta.url).href,
        link: "javascript:void(0)",
        autoplayTime: 5000,
    },
];

const currentIndex = ref(0);
let autoplayTimer: number | null = null;

// 倒數計時狀態
const countdown1 = ref("00:00");
const countdown2 = ref("00:00");
const countdown3 = ref("00:00");

type TimerKey = "timer1" | "timer2" | "timer3";

const timers: Record<TimerKey, { timeLeft: number; interval: any }> = {
    timer1: { timeLeft: 0, interval: null },
    timer2: { timeLeft: 0, interval: null },
    timer3: { timeLeft: 0, interval: null },
};

const isLogin = computed(() => sharedState.value.isLoggedIn);

const goToSlide = (index: number) => {
    if (index === currentIndex.value) return;
    animateSlide(currentIndex.value, index);
    currentIndex.value = index;
    $(".ele-slideshow-nav-dot").removeClass("active");
    $(".ele-slideshow-nav-dot").eq(index).addClass("active");
};

const animateSlide = (fromIndex: number, toIndex: number) => {
    const slideElements = document.querySelectorAll(".ele-slideshow-scroll2 li");

    gsap.to(slideElements[fromIndex], {
        opacity: 0,
        duration: 0.5,
    });

    gsap.fromTo(slideElements[toIndex], { opacity: 0 }, { opacity: 1, duration: 0.5 });
};

// 開始計時器
const startTimer = (timerNum: number, initialSeconds: number) => {
    const timerKey = `timer${timerNum}` as TimerKey;
    const timer = timers[timerKey];
    timer.timeLeft = initialSeconds;

    if (timer.interval) clearInterval(timer.interval);

    timer.interval = setInterval(() => {
        if (timer.timeLeft > 0) {
            timer.timeLeft--;
            updateDisplay(timerNum);
        } else {
            // 重置計時器
            timer.timeLeft = 180;
            updateDisplay(timerNum);
        }
    }, 1000);
};

// 更新顯示
const updateDisplay = (timerNum: number) => {
    const timer = timers[`timer${timerNum}` as TimerKey];
    const mins = Math.floor(timer.timeLeft / 60);
    const secs = timer.timeLeft % 60;
    const display = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    switch (timerNum) {
        case 1:
            countdown1.value = display;
            break;
        case 2:
            countdown2.value = display;
            break;
        case 3:
            countdown3.value = display;
            break;
    }
};

// Tab 相關
const activeTabIndex = ref(0);

const switchTab = (index: number) => {
    activeTabIndex.value = index;
};

const handleTabClick = () => {
    $(".tab-nav").click(function () {
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
        $(".tab-content").siblings().removeClass("is-active");
        $(".tab-content").eq($(this).index()).addClass("is-active");
    });
};

onMounted(() => {
    autoplayTimer = window.setInterval(() => {
        const nextIndex = (currentIndex.value + 1) % slides.length;
        goToSlide(nextIndex);
    }, slides[currentIndex.value].autoplayTime);

    // 啟動計時器
    startTimer(1, 10);
    startTimer(2, 65);
    startTimer(3, 158);

    handleTabClick();

    // 設置為首頁狀態
    updateSharedState({
        isHomePage: true,
        isLoggedIn: false,
    });
});

onUnmounted(() => {
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
    }

    // 清理計時器
    Object.values(timers).forEach(timer => {
        if (timer.interval) clearInterval(timer.interval);
    });

    // 重置狀態
    updateSharedState({
        isHomePage: false,
        isLoggedIn: false,
    });
});
</script>

<style lang="scss">
@use "@/assets/scss/base/mixins" as *;

// 幫助
.first-tip-wrap {
    padding: 36px 0 44px;
    .tip-item {
        display: inline-block;
        width: 240px;
        line-height: 120px;
        min-height: 120px;
        margin-right: 30px;
        position: relative;
        box-shadow: 0px 4px 15px 4px rgba(41, 43, 51, 0.2);
        border-radius: 20px;
        color: #000;
        background: url("@/assets/image/first_btn_tip_bg.png") no-repeat 0 0;
    }

    .first-tip-icon {
        vertical-align: middle;
        display: inline-block;
        width: 52px;
        height: 54px;
        margin: 0 15px 0 23px;
    }
    .first-tip-box {
        vertical-align: middle;
        display: inline-block;
        .first-tip-title {
            font-size: 24px;
            line-height: 28px;
            margin-bottom: 4px;
        }
        .first-tip-content {
            font-size: 16px;
            line-height: 20px;
        }
    }

    .first-tip-item-1 {
        .first-tip-icon {
            background: url("@/assets/image/first_btn_tip_icon01.png") no-repeat 0 0;
        }
        &:hover {
            background-position: 0 100%;
            .first-tip-icon {
                background-position: 0 100%;
            }
        }
    }

    .first-tip-item-2 {
        .first-tip-icon {
            background: url("@/assets/image/first_tip_icon04.png") no-repeat 0 0;
        }
    }

    .first-tip-item-3 {
        .first-tip-icon {
            background: url("@/assets/image/first_tip_icon05.png") no-repeat 0 0;
        }
    }

    .first-tip-item-4 {
        .first-tip-icon {
            background: url("@/assets/image/first_btn_tip_icon02.png") no-repeat 0 0;
        }
        &:hover {
            background-position: 0 100%;
            .first-tip-icon {
                background-position: 0 100%;
            }
        }
    }

    .first-tip-item-5 {
        margin-right: 0;
        .first-tip-icon {
            background: url("@/assets/image/first_btn_tip_icon03.png") no-repeat 0 0;
        }
        &:hover {
            background-position: 0 100%;
            .first-tip-icon {
                background-position: 0 100%;
            }
        }
    }
}

.first-middle-wrap {
    background: #eaeffa;
    padding-bottom: 80px;

    .first-wrap {
        width: 1320px;
        margin: 0 auto;
    }
}

.middle-left {
    float: left;
    width: 290px;
    margin-top: 80px;

    p {
        font-size: 24px;
        color: #292b33;
        line-height: 45px;
        padding-left: 40px;
        background: url("@/assets/image/first_discount_icon.png") no-repeat 0 4px;
    }

    .middle-discount-wrap {
        background: url("@/assets/image/first_middle_bg01.png") no-repeat 50% 15px;
    }
}

.middle-center {
    float: left;
    width: 700px;
    margin: 0 20px;
    background: url("@/assets/image/first_middle_bg02.png") no-repeat 50% 100%;
    .swiper-button-prev {
        width: 27px;
        height: 27px;
        background: url("@/assets/image/slider_arrow2.png") no-repeat 0 0;
        left: 30px;
        &:hover {
            background: url("@/assets/image/slider_arrow2.png") no-repeat 0 100%;
        }
    }

    .swiper-button-next {
        width: 27px;
        height: 27px;
        background: url("@/assets/image/slider_arrow2.png") no-repeat 100% 0;
        left: auto;
        right: 30px;
        &:hover {
            background: url("@/assets/image/slider_arrow2.png") no-repeat 100% 100%;
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        top: 61%;
        &::after {
            display: none; // 隐藏默认箭头
        }
    }
    // 共用
    .slider-content {
        .slider-top {
            position: relative;
            margin: 0 auto;
            padding: 140px 0 0 80px;
            width: 600px;
            height: 240px;
            overflow: hidden;
        }

        .slider-text {
            width: 260px;
            animation: moveUp 1s ease both;

            .slider-text-title {
                @include text-truncate;
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-size: 50px;
                font-weight: 500;
            }

            .slider-text-content {
                margin-top: 16px;
                margin-right: 10px;
                font-size: 14px;
                line-height: 20px;
            }
        }

        .slider-number {
            float: left;
            width: 150px;
            padding: 20px 100px 40px 80px;
            .slider-number-counter {
                height: 60px;
                text-align: center;
                font-size: 55px;
                line-height: 60px;
                margin-bottom: 10px;

                span {
                    display: block;
                }
            }

            a {
                text-align: center;
                line-height: 50px;
                display: block;
                height: 50px;
                font-size: 16px;
                border-radius: 10px;
                box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.2);
                background: linear-gradient(#fefefe 0, #f0f2ff 33%, #f0f2ff 66%, #fefefe 100%);
                &:hover {
                    background: linear-gradient(#e9cab3 0, #d3aa8f 100%);
                }
            }
        }
    }

    // 經典百家樂
    .slider1 {
        i {
            position: absolute;
            right: 0;
            bottom: 0;
        }
        .slider-img01 {
            z-index: 1;
            width: 470px;
            height: 350px;
            background: url("@/assets/image/first_slider_live_img01.png") no-repeat 0 0;
            animation: move-up 2s both;
        }
        .slider-img02 {
            z-index: 2;
            right: 280px;
            bottom: 216px;
            animation: fade-in 3s 1s ease both;
            &:before {
                content: "";
                display: block;
                width: 118px;
                height: 118px;
                background: url("@/assets/image/first_slider_live_img02.png") no-repeat 0 0;
                animation: up-down 5s 1s infinite ease both;
            }
        }
        .slider-img03 {
            z-index: 3;
            right: 10px;
            bottom: 90px;
            &:before {
                content: "";
                display: block;
                width: 145px;
                height: 145px;
                background: url("@/assets/image/first_slider_live_img03.png") no-repeat 0 0;
            }
        }
        .slider-img04 {
            z-index: 5;
            right: 10px;
            width: 680px;
            height: 85px;
            background: url("@/assets/image/first_slider_live_img04.png") no-repeat 0 0;
        }
        .slider-animate-a {
            float: left;
            margin-top: 10px;
            width: 340px;
            height: 148px;
            background: url("@/assets/image/first_slider_animate_bg01.jpg") no-repeat 0 50%;
        }
    }

    // 輪盤
    .slider2 {
        i {
            position: absolute;
            right: 0;
            bottom: 0;
        }
        .slider-img01 {
            z-index: 2;
            right: 2px;
            width: 420px;
            height: 350px;
            background: url("@/assets/image/first_slider_live_img05.png") no-repeat 0 0;
            animation: move-up 2s both;
        }
        .slider-img02 {
            z-index: 1;
            right: 10px;
            animation: fade-in 2s 1s both;
            &:before {
                display: block;
                content: "";
                width: 374px;
                height: 222px;
                background: url("@/assets/image/first_slider_live_img06.png") no-repeat 0 0;
                animation: rotate-obj 23s 1s infinite ease both;
            }
        }
        .slider-img03 {
            z-index: 3;
            right: 10px;
            width: 680px;
            height: 85px;
            background: url("@/assets/image/first_slider_live_img07.png") no-repeat 0 0;
        }
        .slider-animate-b {
            float: left;
            margin-top: 10px;
            width: 340px;
            height: 148px;
            background: url("@/assets/image/first_slider_animate_bg02.jpg") no-repeat 0 0;
        }
    }

    // 龍虎
    .slider3 {
        i {
            position: absolute;
            right: 0;
            bottom: 0;
        }
        .slider-img01 {
            z-index: 2;
            width: 450px;
            height: 346px;
            background: url("@/assets/image/first_slider_live_img08.png") no-repeat 0 0;
            animation: fade-in 2s both;
        }
        .slider-img02 {
            z-index: 1;
            right: 150px;
            animation: fade-in 2s 1s both;
            &:before {
                content: "";
                display: block;
                width: 270px;
                height: 150px;
                background: url("@/assets/image/first_slider_live_img09.png") no-repeat 0 0;
                animation: rotate-obj 17s 1s infinite ease both;
            }
        }
        .slider-img03 {
            z-index: 3;
            right: 280px;
            bottom: 215px;
            animation: fade-in 3s 1.5s both;
            &:before {
                content: "";
                display: block;
                width: 110px;
                height: 110px;
                background: url("@/assets/image/first_slider_live_img10.png") no-repeat 0 0;
                animation: up-down 5s 1.5s infinite ease both;
            }
        }
        .slider-img04 {
            z-index: 5;
            right: 10px;
            bottom: 64px;
            &:before {
                content: "";
                display: block;
                width: 140px;
                height: 150px;
                background: url("@/assets/image/first_slider_live_img11.png") no-repeat 0 0;
            }
        }
        .slider-img05 {
            z-index: 5;
            right: 10px;
            width: 680px;
            height: 85px;
            background: url("@/assets/image/first_slider_live_img12.png") no-repeat 0 0;
        }
        .slider-animate-c {
            float: left;
            margin-top: 10px;
            width: 340px;
            height: 148px;
            background: url("@/assets/image/first_slider_animate_bg03.jpg") no-repeat 0 0;
        }
    }
}

.middle-right {
    margin-top: 80px;
    float: left;
    width: 290px;

    p {
        height: 60px;
        font-size: 24px;
        color: #292b33;
        padding-left: 40px;
        background: url("@/assets/image/first_recommend_icon.png") no-repeat 0 4px;
    }

    .middle-right-wrap {
        background: url("@/assets/image/first_middle_bg01.png") no-repeat 50% 0;
        padding: 10px;
    }

    a {
        display: block;
        width: 250px;
        height: 90px;
        padding: 40px 0 0 20px;
        margin-bottom: 5px;

        span {
            display: inline-block;
            color: #292b33;
            font-size: 18px;
            line-height: 23px;
            padding-bottom: 5px;
            border-bottom: 1px solid #e2e5f1;
        }
        div {
            font-size: 14px;
            width: 80px;
            margin-top: 6px;
            line-height: 40px;
            text-align: center;
        }
    }

    .middle-right-item-1 {
        background: url("@/assets/image/first_recommend_btn01.png") no-repeat 0 0;
        &:hover {
            background-position: 0 100%;
        }
    }

    .middle-right-item-2 {
        background: url("@/assets/image/first_recommend_btn02.png") no-repeat 0 0;
        &:hover {
            background-position: 0 100%;
        }
    }

    .middle-right-item-3 {
        background: url("@/assets/image/first_recommend_btn03.png") no-repeat 0 0;
        &:hover {
            background-position: 0 100%;
        }
    }
}

// 首頁輪播2
.ele-slideshow-wrap2 {
    transform: translateY(-10px);
    height: 445px;
    .ele-slideshow-scroll2 {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        ul {
            li {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                a {
                    display: block;
                }
            }
        }
        .ele-slideshow-img {
            height: 445px;
            background-position: 50%;
            background-repeat: no-repeat;
        }
    }
    .ele-slideshow-control-wrap {
        text-align: center;
        width: 100%;
        position: absolute;
        z-index: 2;
        bottom: 20px;
        .ele-slideshow-nav {
            > a {
                display: inline-block;
                vertical-align: middle;
                width: 14px;
                height: 14px;
                background: url("@/assets/image/slider_ctrl2.png") no-repeat 0 0;
                margin: 0 1px;
                &.active {
                    background-position: 100% 0;
                }
            }
        }
    }
}

// 首頁tab
.first-tab-game-wrap {
    margin: 0 auto;
    max-width: 1400px;
    position: relative;
}

// tab按鈕
.tab-nav-wrap {
    padding: 0 40px 98px;
    font-size: 0;
    .tab-nav {
        @include text-truncate;
        cursor: pointer;
        display: inline-block;
        color: #14151a;
        width: 254px;
        text-align: center;
        margin-right: 10px;
        line-height: 64px;
        font-size: 20px;
    }
    .tab-nav-1 {
        margin-left: 5px;
    }
    .tab-nav-5 {
        margin-right: 5px;
    }

    .is-active {
        border-radius: 32px;
        box-shadow: 0px 10px 10px rgba(153, 99, 61, 0.9);
        background: url("@/assets/image/first_tab_bg02.png") no-repeat 50% 0;
    }
}

// tab內容
.tab-content-wrap {
    .tab-content {
        display: none;
        .tab-title {
            text-align: center;
            p {
                padding: 40px 0 20px;
                line-height: 60px;
                font-size: 44px;
                font-weight: bold;
                color: #b2896b;
                border-bottom: 1px solid #d8dae6;
            }
            span {
                display: block;
                padding: 10px 0;
                line-height: 20px;
                font-size: 18px;
            }
        }
    }

    // tab game
    .tab-game-wrap {
        width: 645px;
        float: left;
        padding: 40px 0 0 40px;
        text-align: center;
        animation-name: move-up;
        animation-duration: 0.2s;
        animation-timing-function: ease-in-out;

        a {
            display: inline-block;
            width: 200px;
            padding-top: 40px;
            margin: 0 15px 18px 0;
            height: 200px;
            background: url("@/assets/image/first_tab_item_bg.png") no-repeat 50% 0;

            &:hover {
                background-position: 50% 100%;
            }
        }

        span {
            display: block;
            padding: 10px;
            line-height: 20px;
            font-size: 16px;
            color: #292b33;
        }
    }

    .mobile-wrap {
        position: relative;
        float: left;
        width: 675px;
        height: 650px;
        animation-name: move-up;
        animation-duration: 0.2s;
        animation-timing-function: ease-in-out;

        .mobile-img1 {
            z-index: 1;
            position: absolute;
            right: -15px;
            top: 0;
            width: 550px;
            height: 650px;
            background: url("@/assets/image/first_tab_mobile01.png") no-repeat right top;
        }

        .mobile-html5 {
            z-index: 2;
            position: relative;
            margin: 40px 0 0;
            width: 210px;
            height: 498px;
            text-align: center;
            background: url("@/assets/image/first_tab_mobile02.png") no-repeat right top;

            p {
                line-height: 20px;
                font-size: 16px;
            }

            .mobile-detail1 {
                overflow: hidden;
                padding-top: 180px;
                margin-bottom: 53px;
                .is-login & {
                    margin-bottom: 63px;
                }
            }
        }
    }

    // sports -----
    .tab-sports .mobile-wrap {
        .mobile-img2 {
            z-index: 4;
            position: absolute;
            left: 185px;
            top: -65px;
            width: 272px;
            height: 706px;
            background: url("@/assets/image/first_tab_sports_img01.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: linear;
            animation-fill-mode: both;
        }
        .mobile-img3 {
            z-index: 3;
            position: absolute;
            right: -30px;
            top: 142px;
            width: 410px;
            height: 514px;
            background: url("@/assets/image/first_tab_sports_img02.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-timing-function: linear;
            animation-fill-mode: both;
        }
        .mobile-img4 {
            z-index: 2;
            position: absolute;
            left: 355px;
            top: -22px;
            animation-name: fade-in;
            animation-duration: 3s;
            animation-delay: 0.5s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;
                width: 100px;
                height: 100px;
                background: url("@/assets/image/first_tab_sports_img03.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 3s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
    }

    // casino -----
    .tab-casino .mobile-wrap {
        .mobile-img2 {
            z-index: 2;
            position: absolute;
            right: 95px;
            top: 260px;
            animation-name: fade-in;
            animation-duration: 1s;
            animation-delay: 0.3s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 196px;
                height: 248px;
                background: url("@/assets/image/first_tab_casino_img01.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 4.5s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img3 {
            z-index: 3;
            position: absolute;
            right: -80px;
            top: 70px;
            animation-name: fade-in;
            animation-duration: 1s;
            animation-delay: 0.6s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 210px;
                height: 230px;
                background: url("@/assets/image/first_tab_casino_img02.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 4s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img4 {
            z-index: 2;
            position: absolute;
            left: 84px;
            top: -18px;
            width: 422px;
            height: 678px;
            background: url("@/assets/image/first_tab_casino_img03.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.4s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
        .mobile-img5 {
            z-index: 3;
            position: absolute;
            right: 60px;
            top: 440px;
            width: 362px;
            height: 202px;
            background: url("@/assets/image/first_tab_casino_img04.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }

    // live -----
    .tab-live .mobile-wrap {
        .mobile-img2 {
            z-index: 0;
            position: absolute;
            right: -60px;
            top: 60px;
            animation-name: fade-in;
            animation-duration: 1s;
            animation-delay: 0.3s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 310px;
                height: 270px;
                background: url("@/assets/image/first_tab_live_img01.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 3s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img3 {
            z-index: 1;
            position: absolute;
            right: 140px;
            top: 405px;
            animation-name: fade-in;
            animation-duration: 1s;
            animation-delay: 0.6s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 360px;
                height: 246px;
                background: url("@/assets/image/first_tab_live_img02.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 4s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img4 {
            z-index: 2;
            position: absolute;
            left: 160px;
            top: -6px;
            width: 186px;
            height: 660px;
            background: url("@/assets/image/first_tab_live_img03.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }

    // lottery -----
    .tab-lottery .mobile-wrap {
        .mobile-img2 {
            z-index: 0;
            position: absolute;
            right: -20px;
            top: 50px;
            animation-name: fade-in;
            animation-duration: 2s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 260px;
                height: 260px;
                background: url("@/assets/image/first_tab_lottery_img01.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 3s;
                animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img3 {
            z-index: 1;
            position: absolute;
            right: 78px;
            top: 415px;
            animation-name: fade-in;
            animation-duration: 2s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 220px;
                height: 220px;
                background: url("@/assets/image/first_tab_lottery_img02.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 3s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img4 {
            z-index: 2;
            position: absolute;
            left: 130px;
            top: -6px;
            width: 245px;
            height: 640px;
            background: url("@/assets/image/first_tab_lottery_img03.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }

    // card -----
    .tab-card .mobile-wrap {
        .mobile-img2 {
            z-index: 0;
            position: absolute;
            right: -50px;
            top: 90px;
            animation-name: fade-in;
            animation-duration: 2s;
            animation-delay: 0.6s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 176px;
                height: 146px;
                background: url("@/assets/image/first_tab_card_img01.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 3s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img3 {
            z-index: 1;
            position: absolute;
            right: -110px;
            top: 350px;
            animation-name: fade-in;
            animation-duration: 1s;
            animation-delay: 0.6s;
            animation-fill-mode: both;
            &:before {
                content: "";
                display: block;
                width: 140px;
                height: 130px;
                background: url("@/assets/image/first_tab_card_img02.png") no-repeat 0 0;
                animation-name: up-down;
                animation-duration: 4s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
        .mobile-img4 {
            z-index: 3;
            position: absolute;
            left: 266px;
            top: 384px;
            width: 330px;
            height: 290px;
            background: url("@/assets/image/first_tab_card_img03.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.4s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
        .mobile-img5 {
            z-index: 2;
            position: absolute;
            left: 150px;
            top: -6px;
            width: 430px;
            height: 660px;
            background: url("@/assets/image/first_tab_card_img04.png") no-repeat 0 0;
            animation-name: move-up;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }

    // tab遊戲img
    i {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto 30px;
    }

    // sports
    .tab-sports-item1 i {
        background: url("@/assets/image/first_tab_sports_items.png") no-repeat 0 0;
    }
    .tab-sports-item2 i {
        background: url("@/assets/image/first_tab_sports_items.png") no-repeat 0 -120px;
    }
    .tab-sports-item3 i {
        background: url("@/assets/image/first_tab_sports_items.png") no-repeat 0 -240px;
    }
    .tab-sports-item4 i {
        background: url("@/assets/image/first_tab_sports_items.png") no-repeat 0 -360px;
    }
    .tab-sports-item5 i {
        background: url("@/assets/image/first_tab_sports_items.png") no-repeat 0 -480px;
    }
    .tab-sports-item6 i {
        background: url("@/assets/image/first_tab_sports_items.png") no-repeat 0 -600px;
    }

    // casino
    .tab-casino-item1 i {
        background: url("@/assets/image/first_tab_casino_items.png") no-repeat 0 0;
    }
    .tab-casino-item2 i {
        background: url("@/assets/image/first_tab_casino_items.png") no-repeat 0 -120px;
    }
    .tab-casino-item3 i {
        background: url("@/assets/image/first_tab_casino_items.png") no-repeat 0 -240px;
    }
    .tab-casino-item4 i {
        background: url("@/assets/image/first_tab_casino_items.png") no-repeat 0 -360px;
    }
    .tab-casino-item5 i {
        background: url("@/assets/image/first_tab_casino_items.png") no-repeat 0 -480px;
    }
    .tab-casino-item6 i {
        background: url("@/assets/image/first_tab_casino_items.png") no-repeat 0 -600px;
    }

    // live
    .tab-live-item1 i {
        background: url("@/assets/image/first_tab_live_items.png") no-repeat 0 0;
    }
    .tab-live-item2 i {
        background: url("@/assets/image/first_tab_live_items.png") no-repeat 0 -120px;
    }
    .tab-live-item3 i {
        background: url("@/assets/image/first_tab_live_items.png") no-repeat 0 -240px;
    }
    .tab-live-item4 i {
        background: url("@/assets/image/first_tab_live_items.png") no-repeat 0 -360px;
    }
    .tab-live-item5 i {
        background: url("@/assets/image/first_tab_live_items.png") no-repeat 0 -480px;
    }
    .tab-live-item6 i {
        background: url("@/assets/image/first_tab_live_items.png") no-repeat 0 -600px;
    }

    // lottery
    .tab-lottery-item1 i {
        background: url("@/assets/image/first_tab_lottery_items.png") no-repeat 0 0;
    }
    .tab-lottery-item2 i {
        background: url("@/assets/image/first_tab_lottery_items.png") no-repeat 0 -120px;
    }
    .tab-lottery-item3 i {
        background: url("@/assets/image/first_tab_lottery_items.png") no-repeat 0 -240px;
    }
    .tab-lottery-item4 i {
        background: url("@/assets/image/first_tab_lottery_items.png") no-repeat 0 -360px;
    }
    .tab-lottery-item5 i {
        background: url("@/assets/image/first_tab_lottery_items.png") no-repeat 0 -480px;
    }
    .tab-lottery-item6 i {
        background: url("@/assets/image/first_tab_lottery_items.png") no-repeat 0 -600px;
    }

    // card
    .tab-card-item1 i {
        background: url("@/assets/image/first_tab_card_items.png") no-repeat 0 0;
    }
    .tab-card-item2 i {
        background: url("@/assets/image/first_tab_card_items.png") no-repeat 0 -120px;
    }
    .tab-card-item3 i {
        background: url("@/assets/image/first_tab_card_items.png") no-repeat 0 -240px;
    }
    .tab-card-item4 i {
        background: url("@/assets/image/first_tab_card_items.png") no-repeat 0 -360px;
    }
    .tab-card-item5 i {
        background: url("@/assets/image/first_tab_card_items.png") no-repeat 0 -480px;
    }
    .tab-card-item6 i {
        background: url("@/assets/image/first_tab_card_items.png") no-repeat 0 -600px;
    }
}

// tab 動畫寫在這邊
.is-active {
    &.tab-sports {
        display: block;
    }
    &.tab-casino {
        display: block;
    }
    &.tab-live {
        display: block;
    }
    &.tab-lottery {
        display: block;
    }
    &.tab-card {
        display: block;
    }
}

// APP Scan QR-Code
.mobile-qrcode {
    width: 140px;
    height: 140px;
    margin: 0 35px 20px;
    background: url("@/assets/image/not-use/lang/zh-cn/qrcode_a.png") no-repeat 50% 50% / cover;
    .is-login & {
        // 登入後的qrcode
        width: 120px;
        height: 120px;
        background: url("@/assets/image/qrcode.jpg") no-repeat 50% 0 / cover;
        margin: 43px auto 20px !important;
    }
}
</style>
