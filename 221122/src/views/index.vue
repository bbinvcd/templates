<template>
    <Header />
    <div class="page-container">
        <div class="page-body">
            <div class="page-main">
                <!-- middle -->
                <div class="first-middle-wrap">
                    <div class="wrap clearfix">
                        <div class="first-tip-wrap">
                            <ul class="clearfix">
                                <li>
                                    <a v-if="!isLogin" href="javascript:void(0);">
                                        <div class="ft_icon"></div>
                                        <div class="ft_title">注册</div>
                                        <div class="ft_content">免费创建帐号</div>
                                    </a>
                                    <a v-else href="javascript:void(0);">
                                        <div class="ft_icon"></div>
                                        <div class="ft_title">欢迎光临</div>
                                        <div class="ft_content">挑战您的好运气</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="ft_icon"></div>
                                        <div class="ft_title">存款</div>
                                        <div class="ft_content">平均12秒快速存款</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="ft_icon"></div>
                                        <div class="ft_title">提款</div>
                                        <div class="ft_content">平均25秒快速到账</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="ft_icon"></div>
                                        <div class="ft_title">新手指南</div>
                                        <div class="ft_content">简单便捷轻松上手</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="ft_icon"></div>
                                        <div class="ft_title">代理</div>
                                        <div class="ft_content">加入代理行列</div>
                                    </a>
                                </li>
                            </ul>
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
                                                    <div class="img" :style="{ backgroundImage: `url(${slide.image})` }"></div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap-test"></div>
                                    </div>

                                    <!-- 導航點 -->
                                    <div id="js-ele-slideshow-control-wrap2" class="ele-slideshow-control-wrap" :style="{ left: '0px' }">
                                        <div id="js-ele-slideshow-nav2" class="ele-slideshow-nav">
                                            <a v-for="(_, index) in slides" :key="index" href="javascript:void(0)" :class="{ active: currentIndex === index }" @click="goToSlide(index)"> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 輪播 -->
                        <div class="middle-center">
                            <div class="slider-main">
                                <!-- 1經典百家樂 -->
                                <div>
                                    <div class="slider-content slider1">
                                        <div class="slider-top">
                                            <i class="slider-img01"></i>
                                            <i class="slider-img02"></i>
                                            <i class="slider-img03"></i>
                                            <i class="slider-img04"></i>
                                            <div class="slider-text">
                                                <p>经典百家乐</p>
                                                <p>让您在何处都能体验真实赌场刺激愉快的感官享受。</p>
                                            </div>
                                        </div>
                                        <div class="slider-bottom">
                                            <div class="slider-number clearfix">
                                                <div class="counter">
                                                    <span id="countdown1">{{ countdown1 }}</span>
                                                </div>
                                                <a href="javascript:void(0)">快速入座</a>
                                            </div>
                                            <div class="slider-animatea">
                                                <span class="slider-animate-obja"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 2輪盤 -->
                                <div>
                                    <div class="slider-content slider2">
                                        <div class="slider-top">
                                            <i class="slider-img01"></i>
                                            <i class="slider-img02"></i>
                                            <i class="slider-img03"></i>
                                            <div class="slider-text">
                                                <p>轮盘</p>
                                                <p>超越空间的限制带您玩转真人视讯轮盘游戏。</p>
                                            </div>
                                        </div>
                                        <div class="slider-bottom">
                                            <div class="slider-number clearfix">
                                                <div class="counter">
                                                    <span id="countdown2">{{ countdown2 }}</span>
                                                </div>
                                                <a href="javascript:void(0)">快速入座</a>
                                            </div>
                                            <div class="slider-animateb">
                                                <span class="slider-animate-objb"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 3龍虎 -->
                                <div>
                                    <div class="slider-content slider3">
                                        <div class="slider-top">
                                            <i class="slider-img01"></i>
                                            <i class="slider-img02"></i>
                                            <i class="slider-img03"></i>
                                            <i class="slider-img04"></i>
                                            <i class="slider-img05"></i>
                                            <div class="slider-text">
                                                <p>⻰⻁</p>
                                                <p>给予玩家最火爆竞技快感，带领体验胜利方程式。</p>
                                            </div>
                                        </div>
                                        <div class="slider-bottom">
                                            <div class="slider-number clearfix">
                                                <div class="counter">
                                                    <span id="countdown3">{{ countdown3 }}</span>
                                                </div>
                                                <a href="javascript:void(0)">快速入座</a>
                                            </div>
                                            <div class="slider-animatec">
                                                <span class="slider-animate-objc"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 热门桌台推荐 -->
                        <div class="middle-right">
                            <p>热门桌台推荐</p>
                            <ul class="clearfix">
                                <li>
                                    <a href="live.php"
                                        ><span>百家乐 (比基尼厅)</span>
                                        <div>快速入座</div></a
                                    >
                                </li>
                                <li>
                                    <a href="live.php"
                                        ><span>区块链抢庄牛牛</span>
                                        <div>快速入座</div></a
                                    >
                                </li>
                                <li>
                                    <a href="live.php"
                                        ><span>21点百家乐</span>
                                        <div>快速入座</div></a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- tab -->
                <div class="first-tab-game-wrap">
                    <div class="tab-nav-wrap">
                        <ul class="clearfix">
                            <li v-for="(tab, index) in tabs" :key="index" class="tab-nav" :class="{ 'is-active': activeTabIndex === index }" @click="switchTab(index)">
                                {{ tab }}
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content-wrap">
                        <!-- sports -->
                        <div class="tab-content is-active clearfix tab-sports">
                            <div class="tab-title">
                                <p>丰富多元的体育投注赛事</p>
                                <span>全世界主要的体育运动，提供最即时的赛事结果</span>
                            </div>
                            <div class="tab-game-wrap">
                                <ul class="clearfix">
                                    <li>
                                        <a href="javascript:void(0)" title="足球">
                                            <i></i>
                                            <span>足球</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="篮球">
                                            <i></i>
                                            <span>篮球</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="网球">
                                            <i></i>
                                            <span>网球</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="英雄联盟">
                                            <i></i>
                                            <span>英雄联盟</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="CS:GO">
                                            <i></i>
                                            <span>CS:GO</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="刀塔2">
                                            <i></i>
                                            <span>刀塔2</span>
                                        </a>
                                    </li>
                                </ul>
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
                                <ul class="clearfix">
                                    <li>
                                        <a href="javascript:void(0)" title="糖果派对">
                                            <i></i>
                                            <span>糖果派对</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="连环夺宝2">
                                            <i></i>
                                            <span>连环夺宝2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="开心消消乐">
                                            <i></i>
                                            <span>开心消消乐</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="女娲补天">
                                            <i></i>
                                            <span>女娲补天</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="疯狂水果盘">
                                            <i></i>
                                            <span>疯狂水果盘</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="森林舞会">
                                            <i></i>
                                            <span>森林舞会</span>
                                        </a>
                                    </li>
                                </ul>
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
                                <ul class="clearfix">
                                    <li>
                                        <a href="javascript:void(0)" title="21点百家乐">
                                            <i></i>
                                            <span>21点百家乐</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="百家乐 (中文荷官 1 厅)">
                                            <i></i>
                                            <span>百家乐 (中文荷官 1 厅)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="百家乐 (比基尼厅)">
                                            <i></i>
                                            <span>百家乐 (比基尼厅)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="区块链龙虎斗">
                                            <i></i>
                                            <span>区块链龙虎斗</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="区块链百家乐">
                                            <i></i>
                                            <span>区块链百家乐</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="轮盘">
                                            <i></i>
                                            <span>轮盘</span>
                                        </a>
                                    </li>
                                </ul>
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
                                <ul class="clearfix">
                                    <li>
                                        <a href="javascript:void(0)" title="BB竞速重庆时时彩">
                                            <i></i>
                                            <span>BB竞速重庆时时彩</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="BB竞速北京PK拾">
                                            <i></i>
                                            <span>BB竞速北京PK拾</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="BB番摊">
                                            <i></i>
                                            <span>BB番摊</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="BB深海派对">
                                            <i></i>
                                            <span>BB深海派对</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="BB鱿鱼游戏">
                                            <i></i>
                                            <span>BB鱿鱼游戏</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="BB宾果连线">
                                            <i></i>
                                            <span>BB宾果连线</span>
                                        </a>
                                    </li>
                                </ul>
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
                                <ul class="clearfix">
                                    <li>
                                        <a href="javascript:void(0)" title="大话骰">
                                            <i></i>
                                            <span>大话骰</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="二人麻将">
                                            <i></i>
                                            <span>二人麻将</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="龙虎斗">
                                            <i></i>
                                            <span>龙虎斗</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="BB深海派对">
                                            <i></i>
                                            <span>BB深海派对</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="红黑大战">
                                            <i></i>
                                            <span>红黑大战</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" title="百家乐">
                                            <i></i>
                                            <span>百家乐</span>
                                        </a>
                                    </li>
                                </ul>
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
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, inject, computed } from "vue";
import { ref } from "vue";
import { gsap } from "gsap";
import "slick-carousel";
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

            // 添加動畫效果
            const animateClass = `slider-animate-obj${["a", "b", "c"][timerNum - 1]}`;
            const activeClass = `slider-animate-active${["a", "b", "c"][timerNum - 1]}`;
            const animateWrap = `slider-animate${["a", "b", "c"][timerNum - 1]}`;

            $(`.${animateClass}`).addClass(activeClass);
            setTimeout(() => {
                $(`.${animateClass}`).removeClass(activeClass);
                $(`.${animateWrap}`).fadeOut().fadeIn();
            }, 3000);
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
const tabs = ["体育赛事", "电子游艺", "视讯直播", "彩票游戏", "棋牌游戏"];
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

    $(".slider-main").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        fade: true,
    });

    // 啟動計時器
    startTimer(1, 10); // 開始時間 10 秒
    startTimer(2, 65); // 開始時間 65 秒
    startTimer(3, 158); // 開始時間 158 秒

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
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;

// 幫助
.first-tip-wrap {
    width: 100%;
    float: left;

    ul {
        padding-top: 36px;
        display: block;
        height: 200px; //280
        // border: 1px solid #000;
    }

    li {
        display: inline-block;
        width: 240px;
        height: 120px;
        margin-right: 30px;
        a {
            position: relative;
            box-shadow: 0px 4px 15px 4px rgba(41, 43, 51, 0.2);
            border-radius: 20px;
            display: block;
            width: 240px;
            height: 120px;
            padding: 36px 0 36px 90px;
            color: #000;
            .ft_icon {
                position: absolute;
                left: 23px;
                top: 34px;
                width: 54px;
                height: 54px;
            }
            .ft_title {
                font-size: 24px;
                line-height: 24px;
                margin-bottom: 8px;
            }
            .ft_content {
                font-size: 16px;
                line-height: 16px;
            }
            background: url("@/assets/image/first_btn_tip_bg.png") no-repeat 0 0;

            &:hover {
                background-position: 0 -120px;
                .ft_icon {
                    background-position: 0 -54px;
                }
            }
        }
    }

    li:first-child {
        margin-left: 0;
        .ft_icon {
            background: url("@/assets/image/first_btn_tip_icon01.png") no-repeat 0 0;
        }
    }

    li:nth-child(2) a {
        pointer-events: none; // 取消所有滑鼠事件
        .ft_icon {
            background: url("@/assets/image/first_tip_icon04.png") no-repeat 0 0;
        }
    }

    li:nth-child(3) a {
        pointer-events: none; // 取消所有滑鼠事件
        .ft_icon {
            background: url("@/assets/image/first_tip_icon05.png") no-repeat 0 0;
        }
    }

    li:nth-child(4) {
        .ft_icon {
            background: url("@/assets/image/first_btn_tip_icon02.png") no-repeat 0 0;
        }
    }

    li:last-child {
        margin-right: 0;
        .ft_icon {
            background: url("@/assets/image/first_btn_tip_icon03.png") no-repeat 0 0;
        }
    }
}

.first-middle-wrap {
    background: #eaedfa;
    padding-bottom: 80px;
    min-height: 840px;

    .middle-left {
        position: relative;
        float: left;
        width: 290px;
        height: 480px;
        margin-top: 80px;

        p {
            font-size: 24px;
            color: #292b33;
            height: 45px;
            padding-left: 40px;
            background: url("@/assets/image/first_discount_icon.png") no-repeat left 4px;
        }

        .middle-discount-wrap {
            position: relative;
            background: url("@/assets/image/first_middle_bg01.png") no-repeat center 15px;
            height: 440px; //445
            width: 100%;

            .ele-slideshow-wrap2 {
                transform: translateY(-10px);
                height: 445px;

                ul {
                    position: relative;

                    li {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;

                        a {
                            display: block;

                            .img {
                                width: 100%;
                                height: 445px;
                                background-position: center;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                }

                // 圓點控制項的框架
                .ele-slideshow-control-wrap {
                    text-align: center;
                    width: 100%;
                    position: absolute;
                    z-index: 2;
                    bottom: 20px;
                    left: auto !important;
                    right: 0;

                    // 圓點控制項的按鈕風格
                    .ele-slideshow-nav {
                        > a {
                            display: inline-block;
                            vertical-align: middle;
                            width: 14px;
                            height: 14px;
                            background: url("@/assets/image/slider_ctrl2.png") no-repeat;
                            background-position: 0 0;
                            margin: 0 1px;

                            &.active {
                                background-position: -14px 0;
                            }
                        }
                    }
                }

                .ele-slideshow-scroll2 {
                    overflow: hidden;
                    position: absolute;
                    z-index: 1;
                    margin: 0 auto;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .middle-center {
        float: left;
        width: 700px;
        height: 560px;
        margin: 0 20px;
        background: url("@/assets/image/first_middle_bg02.png") no-repeat center 80px;

        .slider-main {
            width: 100%;
            position: relative;

            .slick-slide {
                height: 560px;
            }

            .slick-list {
            }

            // 共用
            .slider-content {
                .slider-top {
                    position: relative;
                    margin: 0 10px;
                    padding: 140px 0 0 80px;
                    width: 680px;
                    height: 380px;
                    overflow: hidden;
                }

                .slider-bottom {
                    // border: 1px solid #000;
                    height: 180px;
                }

                .slider-text {
                    width: 260px;

                    p:nth-child(1) {
                        @include text-truncate;
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        font-size: 50px;
                        font-weight: 500;
                    }

                    p:nth-child(2) {
                        margin-top: 16px;
                        margin-right: 10px;
                        font-size: 14px;
                        line-height: 20px;
                    }
                }

                .slider-number {
                    float: left;
                    padding: 20px 50px 0 80px;

                    // border: 1px solid #000;
                    .counter {
                        width: 100%;
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
                        width: 150px;
                        border-radius: 10px;
                        box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.2);
                        background: linear-gradient(to bottom, #fefefe 0%, #f0f2ff 33%, #f0f2ff 66%, #fefefe 100%);

                        &:hover {
                            background: linear-gradient(to bottom, #e9cab3 0%, #d3aa8f 100%);
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
                    // woman
                    z-index: 1;
                    right: 0px;
                    width: 470px;
                    height: 350px;
                    background: url("@/assets/image/first_slider_live_img01.png") no-repeat left top;
                }

                .slider-img02 {
                    z-index: 2;
                    right: 280px;
                    bottom: 216px;

                    &:before {
                        content: "";
                        display: block;
                        width: 118px;
                        height: 118px;
                        background: url("@/assets/image/first_slider_live_img02.png") no-repeat left top;
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
                        background: url("@/assets/image/first_slider_live_img03.png") no-repeat left top;
                    }
                }

                .slider-img04 {
                    // icon
                    z-index: 5;
                    right: 10px;
                    width: 680px;
                    height: 85px;
                    background: url("@/assets/image/first_slider_live_img04.png") no-repeat left top;
                }

                .slider-animatea {
                    position: relative;
                    float: left;
                    margin: 10px 0 0 50px;
                    width: 340px;
                    height: 148px;
                    background: url("@/assets/image/first_slider_animate_bg01.jpg") no-repeat left top;

                    .slider-animate-obja {
                        display: none;
                        position: absolute;
                        right: 29px;
                        top: 29px;
                        width: 17px;
                        height: 17px;
                        background: url("@/assets/image/first_slider_live_img13.jpg") no-repeat center;
                    }

                    .slider-animate-activea {
                        display: block;
                    }
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
                    // woman
                    z-index: 2;
                    right: 2px;
                    width: 420px;
                    height: 350px;
                    background: url("@/assets/image/first_slider_live_img05.png") no-repeat left top;
                }

                .slider-img02 {
                    // 輪盤
                    z-index: 1;
                    right: 10px;
                    bottom: 0px;

                    &:before {
                        display: block;
                        content: "";
                        width: 374px;
                        height: 222px;
                        background: url("@/assets/image/first_slider_live_img06.png") no-repeat left top;
                    }
                }

                .slider-img03 {
                    // icon
                    z-index: 3;
                    right: 10px;
                    width: 680px;
                    height: 85px;
                    background: url("@/assets/image/first_slider_live_img07.png") no-repeat left top;
                }

                .slider-animateb {
                    position: relative;
                    float: left;
                    margin: 10px 0 0 50px;
                    width: 340px;
                    height: 148px;
                    background: url("@/assets/image/first_slider_animate_bg02.jpg") no-repeat left top;

                    .slider-animate-objb {
                        display: none;
                        position: absolute;
                        left: 29px;
                        top: 53px;
                        width: 20px;
                        height: 20px;
                        background: url("@/assets/image/first_slider_live_img14.jpg") no-repeat center;
                    }

                    .slider-animate-activeb {
                        display: block;
                    }
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
                    // woman
                    z-index: 2;
                    right: 0px;
                    width: 450px;
                    height: 346px;
                    background: url("@/assets/image/first_slider_live_img08.png") no-repeat left top;
                }

                .slider-img02 {
                    // 底部chip
                    z-index: 1;
                    right: 150px;
                    bottom: 0px;

                    &:before {
                        content: "";
                        display: block;
                        width: 270px;
                        height: 150px;
                        background: url("@/assets/image/first_slider_live_img09.png") no-repeat left top;
                    }
                }

                .slider-img03 {
                    // 左上chip
                    z-index: 3;
                    right: 280px;
                    bottom: 215px;

                    &:before {
                        content: "";
                        display: block;
                        width: 110px;
                        height: 110px;
                        background: url("@/assets/image/first_slider_live_img10.png") no-repeat left top;
                    }
                }

                .slider-img04 {
                    // 右中chip
                    z-index: 5;
                    right: 10px;
                    bottom: 64px;

                    &:before {
                        content: "";
                        display: block;
                        width: 140px;
                        height: 150px;
                        background: url("@/assets/image/first_slider_live_img11.png") no-repeat left top;
                    }
                }

                .slider-img05 {
                    // icon
                    z-index: 5;
                    right: 10px;
                    width: 680px;
                    height: 85px;
                    background: url("@/assets/image/first_slider_live_img12.png") no-repeat left top;
                }

                .slider-animatec {
                    position: relative;
                    float: left;
                    margin: 10px 0 0 50px;
                    width: 340px;
                    height: 148px;
                    background: url("@/assets/image/first_slider_animate_bg03.jpg") no-repeat left top;

                    .slider-animate-objc {
                        display: none;
                        position: absolute;
                        left: 53px;
                        top: 52px;
                        width: 20px;
                        height: 20px;
                        background: url("@/assets/image/first_slider_live_img15.jpg") no-repeat center;
                    }

                    .slider-animate-activec {
                        display: block;
                    }
                }
            }

            // active 時的動畫在這兒 -----
            .slick-active .slider-content {
                // 共用動態
                .slider-text {
                    // 文字
                    animation-name: moveUp;
                    animation-duration: 1s;
                    animation-fill-mode: both;
                    animation-timing-function: ease;
                }
            }

            .slick-active .slider1 {
                // 經典百家樂
                .slider-img01 {
                    // woman animate
                    animation-name: moveUp;
                    animation-duration: 2s;
                    animation-fill-mode: both;
                }

                .slider-img02 {
                    // 骰子 animate
                    animation-name: fadeIn;
                    animation-duration: 3s;
                    animation-delay: 1s;
                    animation-fill-mode: both;

                    &:before {
                        content: "";
                        animation-name: upDown;
                        animation-duration: 5s;
                        animation-delay: 1s;
                        animation-fill-mode: both;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease;
                    }
                }

                .slider-img03 {
                    // 骰子 animate
                    animation-name: fadeIn;
                    animation-duration: 3s;
                    animation-delay: 1.5s;
                    animation-fill-mode: both;

                    &:before {
                        content: "";
                        animation-name: upDown;
                        animation-duration: 5s;
                        animation-delay: 1.5s;
                        animation-fill-mode: both;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease;
                    }
                }
            }

            .slick-active .slider2 {
                // 輪盤
                .slider-img01 {
                    // woman animate
                    animation-name: moveUp;
                    animation-duration: 2s;
                    animation-fill-mode: both;
                }

                .slider-img02 {
                    // 輪盤 animate
                    animation-name: fadeIn;
                    animation-duration: 2s;
                    animation-delay: 1s;
                    animation-fill-mode: both;

                    &:before {
                        content: "";
                        animation-name: rotateObj;
                        animation-duration: 23s;
                        animation-delay: 1s;
                        animation-fill-mode: both;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease;
                    }
                }
            }

            .slick-active .slider3 {
                // 龍虎
                .slider-img01 {
                    // woman animate
                    animation-name: moveUp;
                    animation-duration: 2s;
                    animation-fill-mode: both;
                }

                .slider-img02 {
                    // 底部chip
                    animation-name: fadeIn;
                    animation-duration: 2s;
                    animation-delay: 1s;
                    animation-fill-mode: both;

                    &:before {
                        content: "";
                        animation-name: rotateObj;
                        animation-duration: 17s;
                        animation-delay: 1s;
                        animation-fill-mode: both;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease;
                    }
                }

                .slider-img03 {
                    // 左上chip
                    animation-name: fadeIn;
                    animation-duration: 3s;
                    animation-delay: 1.5s;
                    animation-fill-mode: both;

                    &:before {
                        content: "";
                        animation-name: upDown;
                        animation-duration: 5s;
                        animation-delay: 1.5s;
                        animation-fill-mode: both;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease;
                    }
                }
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
            background: url("@/assets/image/first_recommend_icon.png") no-repeat left 4px;
        }

        ul {
            background: url("@/assets/image/first_middle_bg01.png") no-repeat center top;
            display: block;
            padding: 10px;
        }

        li {
            display: block;
            margin-bottom: 5px;

            a {
                background-repeat: no-repeat;
                background-position: left top;
                display: block;
                width: 270px;
                height: 130px;
                padding: 40px 0 0 20px;

                &:hover {
                    background-position: left bottom;
                }

                span {
                    display: inline-block;
                    color: #292b33;
                    font-size: 18px;
                    line-height: 20px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #e2e5f1;
                }
                div {
                    font-size: 14px;
                    width: 80px;
                    height: 40px;
                    margin-top: 6px;
                    line-height: 40px;
                    text-align: center;
                }
            }
        }

        li:nth-child(1) a {
            background-image: url("@/assets/image/first_recommend_btn01.png");
        }

        li:nth-child(2) a {
            background-image: url("@/assets/image/first_recommend_btn02.png");
        }

        li:nth-child(3) a {
            background-image: url("@/assets/image/first_recommend_btn03.png");
        }
    }
}

// 首頁tab
.first-tab-game-wrap {
    @include layout-max-width;
    max-width: 1400px;
    position: relative;
    // border: 1px solid #000;
}

// tab按鈕
.tab-nav-wrap {
    position: absolute;
    bottom: 70px;
    // bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;

    // background: grey;
    // border: 1px solid blue;
    .tab-nav {
        @include text-truncate;
        cursor: pointer;
        float: left;
        color: #14151a;
        width: 20%;
        height: 100px;
        text-align: center;
        padding: 30px 10px 10px;
        line-height: 20px;
        font-size: 20px;
    }

    .is-active {
        background: url("@/assets/image/first_tab_bg02.png") no-repeat center top;
    }
}

// tab內容
.tab-content-wrap {
    height: 955px;

    .tab-content {
        display: none;

        .tab-title {
            text-align: center;
            // height: 180px;
            height: 140px;

            p {
                padding: 40px 0 20px;
                line-height: 40px;
                font-size: 44px;
                font-weight: bold;
                color: #b2896b;
                border-bottom: 1px solid #d8dae6;
            }

            span {
                display: block;
                padding: 10px 0;
                line-height: 20px;
                color: #292b33;
                font-size: 18px;
            }
        }
    }

    // tab game
    .tab-game-wrap {
        float: left;
        padding-top: 40px;

        ul {
            text-align: center;
            display: block;
            width: 645px;
            margin-left: 40px;
        }

        li {
            display: block;
            float: left;
            margin: 0 15px 18px 0;
        }

        a {
            display: block;
            width: 200px;
            font-size: 16px;
            line-height: 20px;
            padding-top: 40px;
            height: 240px;
            background: url("@/assets/image/first_tab_item_bg.png") no-repeat center top;

            &:hover {
                background: url("@/assets/image/first_tab_item_bg.png") no-repeat center bottom;
            }
        }

        span {
            display: block;
            padding: 10px;
            width: 100%;
            height: 40px;
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

        .mobile-img1 {
            // mobile
            position: absolute;
            right: -15px;
            top: 0;
            width: 550px;
            height: 650px;
            background: url("@/assets/image/first_tab_mobile01.png") no-repeat right top;
        }

        .mobile-html5 {
            position: relative;
            margin: 40px 0 0;
            width: 210px;
            height: 498px;
            text-align: center;
            background: url("@/assets/image/first_tab_mobile02.png") no-repeat right top;

            p {
                line-height: 20px;
                font-size: 16px;
                color: #292b33;
            }

            .mobile-detail1 {
                overflow: hidden;
                height: 240px;
                padding-top: 180px;
            }

            .mobile-detail2 p {
                width: 100%;
                height: 60px;
                overflow: hidden;
            }

            .mobile-qrcode {
                margin: 33px 35px 20px;
            }
        }
    }

    // sports -----
    .tab-sports .mobile-wrap {
        // man
        .mobile-img2 {
            position: absolute;
            left: 185px;
            top: -65px;
            width: 272px;
            height: 706px;
            background: url("@/assets/image/first_tab_sports_img01.png") no-repeat left top;
        }

        // award
        .mobile-img3 {
            position: absolute;
            right: -30px;
            top: 142px; //138
            width: 410px;
            height: 514px;
            background: url("@/assets/image/first_tab_sports_img02.png") no-repeat left top;
        }

        // ball
        .mobile-img4 {
            position: absolute;
            left: 355px;
            top: -22px; //-62px

            &:before {
                content: "";
                display: block;
                width: 100px;
                height: 100px;
                background: url("@/assets/image/first_tab_sports_img03.png") no-repeat left top;
            }
        }
    }

    // casino -----
    .tab-casino .mobile-wrap {
        // 7
        .mobile-img2 {
            position: absolute;
            right: 95px;
            top: 260px;

            animation-name: fadeIn;
            animation-duration: 1s;
            animation-delay: 0.3s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;
                width: 196px;
                height: 248px;
                background: url("@/assets/image/first_tab_casino_img01.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 4.5s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        //  7
        .mobile-img3 {
            position: absolute;
            right: -80px;
            top: 70px;

            animation-name: fadeIn;
            animation-duration: 1s;
            animation-delay: 0.6s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;
                width: 210px;
                height: 230px;
                background: url("@/assets/image/first_tab_casino_img02.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 4s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        // woman
        .mobile-img4 {
            position: absolute;
            left: 84px;
            top: -18px;
            width: 422px;
            height: 678px;
            background: url("@/assets/image/first_tab_casino_img03.png") no-repeat left top;
        }

        // slot
        .mobile-img5 {
            position: absolute;
            right: 60px;
            top: 440px;
            width: 362px;
            height: 202px;
            background: url("@/assets/image/first_tab_casino_img04.png") no-repeat left top;
        }
    }

    // live -----
    .tab-live .mobile-wrap {
        // right chip
        .mobile-img2 {
            z-index: -1;
            position: absolute;
            right: -60px;
            top: 60px;

            animation-name: fadeIn;
            animation-duration: 1s;
            animation-delay: 0.3s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;
                width: 310px;
                height: 270px;
                background: url("@/assets/image/first_tab_live_img01.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 3s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        //  bottom chip
        .mobile-img3 {
            position: absolute;
            right: 140px;
            top: 405px;

            animation-name: fadeIn;
            animation-duration: 1s;
            animation-delay: 0.6s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;

                width: 360px;
                height: 246px;
                background: url("@/assets/image/first_tab_live_img02.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 4s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        // woman
        .mobile-img4 {
            position: absolute;
            left: 160px;
            top: -6px;
            width: 186px;
            height: 660px;
            background: url("@/assets/image/first_tab_live_img03.png") no-repeat left top;
        }
    }

    // lottery -----
    .tab-lottery .mobile-wrap {
        // right lottery
        .mobile-img2 {
            z-index: -1;
            position: absolute;
            right: -20px;
            top: 50px;

            animation-name: fadeIn;
            animation-duration: 2s;
            // animation-delay: .6s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;

                width: 260px;
                height: 260px;
                background: url("@/assets/image/first_tab_lottery_img01.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 3s;
                animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        // bottom lottery
        .mobile-img3 {
            position: absolute;
            right: 78px;
            top: 415px;

            animation-name: fadeIn;
            animation-duration: 2s;
            // animation-delay: .6s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;
                width: 220px;
                height: 220px;
                background: url("@/assets/image/first_tab_lottery_img02.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 3s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        // woman
        .mobile-img4 {
            position: absolute;
            left: 130px;
            top: -6px;
            width: 245px;
            height: 640px;
            background: url("@/assets/image/first_tab_lottery_img03.png") no-repeat left top;
        }
    }

    // card -----
    .tab-card .mobile-wrap {
        // 1
        .mobile-img2 {
            z-index: -1;
            position: absolute;
            right: -50px;
            top: 90px;

            animation-name: fadeIn;
            animation-duration: 2s;
            animation-delay: 0.6s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;

                width: 176px;
                height: 146px;
                background: url("@/assets/image/first_tab_card_img01.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 3s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        // 2
        .mobile-img3 {
            position: absolute;
            right: -110px;
            top: 350px;

            animation-name: fadeIn;
            animation-duration: 1s;
            animation-delay: 0.6s;
            animation-fill-mode: both;

            &:before {
                content: "";
                display: block;

                width: 140px;
                height: 130px;
                background: url("@/assets/image/first_tab_card_img02.png") no-repeat left top;

                animation-name: upDown;
                animation-duration: 4s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }

        // 3
        .mobile-img4 {
            z-index: 1;
            position: absolute;
            left: 266px;
            top: 384px;
            width: 330px;
            height: 290px;
            background: url("@/assets/image/first_tab_card_img03.png") no-repeat left top;
        }

        // woman
        .mobile-img5 {
            position: absolute;
            left: 150px;
            top: -6px;
            width: 430px;
            height: 660px;
            background: url("@/assets/image/first_tab_card_img04.png") no-repeat left top;
        }
    }

    // tab遊戲img
    i {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto 30px;
    }

    .tab-sports {
        @for $i from 1 through 6 {
            li:nth-child(#{$i}) i {
                background: url("@/assets/image/first_tab_sports_items.png") no-repeat left 120px - 120px * $i;
            }
        }
    }

    .tab-casino {
        @for $i from 1 through 6 {
            li:nth-child(#{$i}) i {
                background: url("@/assets/image/first_tab_casino_items.png") no-repeat left 120px - 120px * $i;
            }
        }
    }

    .tab-live {
        @for $i from 1 through 6 {
            li:nth-child(#{$i}) i {
                background: url("@/assets/image/first_tab_live_items.png") no-repeat left 120px - 120px * $i;
            }
        }
    }

    .tab-lottery {
        @for $i from 1 through 6 {
            li:nth-child(#{$i}) i {
                background: url("@/assets/image/first_tab_lottery_items.png") no-repeat left 120px - 120px * $i;
            }
        }
    }

    .tab-card {
        @for $i from 1 through 6 {
            li:nth-child(#{$i}) i {
                background: url("@/assets/image/first_tab_card_items.png") no-repeat left 120px - 120px * $i;
            }
        }
    }
}

// tab 動畫寫在這邊
.is-active {
    display: block !important;

    .tab-game-wrap {
        animation-name: moveUp;
        animation-duration: 0.2s;
        animation-timing-function: ease-in-out;
    }

    .mobile-wrap {
        // animation-delay: .5s;
        animation-name: moveUp;
        animation-duration: 0.2s;
        animation-timing-function: ease-in-out;
    }

    &.tab-sports {
        // 同時擁有這兩個classname
        .mobile-img2 {
            // man
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: linear;
            animation-fill-mode: both;
        }

        .mobile-img3 {
            // award
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-timing-function: linear;
            animation-fill-mode: both;
        }

        .mobile-img4 {
            // ball
            animation-name: fadeIn;
            animation-duration: 3s;
            animation-delay: 0.5s;
            animation-fill-mode: both;

            &:before {
                animation-name: upDown;
                animation-duration: 3s;
                // animation-delay: 1s;
                animation-fill-mode: both;
                animation-iteration-count: infinite;
                animation-timing-function: ease;
            }
        }
    }

    &.tab-casino {
        .mobile-img2 {
            // 7
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img3 {
            // 7
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img5 {
            // slot
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img4 {
            // woman
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.4s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }

    &.tab-live {
        .mobile-img4 {
            // woman
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img2 {
            // b chip
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img3 {
            // s chip
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }

    &.tab-lottery {
        .mobile-img4 {
            // woman
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img2 {
            // 上大球
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img3 {
            // 下小球
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }

    &.tab-card {
        .mobile-img5 {
            // woman
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img4 {
            // 主麻將
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.4s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img3 {
            // 右下麻將
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }

        .mobile-img2 {
            // 右上麻將
            animation-name: moveUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
        }
    }
}

// 首頁遊戲圖
@if $first-game-lang==true {
    .first-game-wrap {
        position: relative;
    }

    .first-game-main {
        @include layout-max-width;

        ul {
            display: block;
        }

        li {
            display: block;
            width: $first-game-width;
            height: $first-game-height;
            float: left;

            a {
                display: block;
                width: 100%;
                height: 100%;
            }

            @for $i from 1 through 4 {
                &.first-game0#{$i} {
                    a {
                        background-image: url("@/assets/image/lang/zh-cn/game0#{$i}.#{$first-game-format}");

                        &:hover {
                            background-image: url("@/assets/image/lang/zh-cn/game0#{$i}_over.#{$first-game-format}");
                        }
                    }
                }
            }
        }
    }
} @else {
}

// APP Scan QR-Code
@if $mobile==true {
    // .mobile {
    //     @include layout-max-width;
    // }
    .mobile-qrcode {
        width: 140px;
        height: 140px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        //選擇QR-Code樣式
        @if $mobile-image==1 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_a.png");
        } @else if $mobile-image==2 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_b.png");
        } @else if $mobile-image==3 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_c.png");
        } @else if $mobile-image==4 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_d.png");
        } @else if $mobile-image==5 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_e.png");
        } @else if $mobile-image==6 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_f.png");
        } @else if $mobile-image==7 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_g.png");
        } @else if $mobile-image==8 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_h.png");
        } @else if $mobile-image==9 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_i.png");
        } @else if $mobile-image==10 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_j.png");
        } @else if $mobile-image==11 {
            background-image: url("@/assets/image/not-use/lang/zh-cn/qrcode_k.png");
        }

        .is-login & {
            // 登入後的qrcode
            width: 120px;
            height: 120px;
            background: url("@/assets/image/qrcode.jpg") no-repeat center top;
            background-size: cover;
            margin: 43px auto 20px !important;
        }
    }
} @else {
}
</style>
