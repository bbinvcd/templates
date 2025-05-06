<template>
    <div class="news-wrap">
        <div class="news-title">最新消息</div>
        <div class="news-item">
            <marquee :scrollamount="scrollSpeed" :scrolldelay="scrollDelay" @mouseover="stop" @mouseout="start">
                <a :href="newsLink">{{ newsContent }}</a>
            </marquee>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    newsContent?: string;
    newsLink?: string;
    scrollSpeed?: number;
    scrollDelay?: number;
}

withDefaults(defineProps<Props>(), {
    newsContent: "两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？",
    newsLink: "javascript:void(0)",
    scrollSpeed: 3,
    scrollDelay: 100,
});

const stop = (event: Event) => {
    const marquee = event.target as HTMLMarqueeElement;
    marquee.stop();
};

const start = (event: Event) => {
    const marquee = event.target as HTMLMarqueeElement;
    marquee.start();
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *; // 使用 @ 別名
// 最新消息
.news-wrap {
    position: relative;
    font-size: 13px;
    color: #fff;
    padding-left: 100px;
    padding-bottom: 8px;
    line-height: 28px;
    .news-title {
        position: absolute;
        top: 0;
        left: 0;
        color: #292b33;
        padding-left: 40px;
        width: 100px;
        height: 32px;
        background: url("@/assets/image/news_bg.png") no-repeat left top;
    }

    .news-item {
        marquee {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            a {
                color: #999;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
