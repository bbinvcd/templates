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
    newsContent ?: string;
    newsLink ?: string;
    scrollSpeed ?: number;
    scrollDelay ?: number;
}

withDefaults(defineProps<Props>(), {
    newsContent: "两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？",
    newsLink: "javascript:void(0)",
    scrollSpeed: 3,
    scrollDelay: 100
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
@use "@/assets/scss/base/variables" as *;
// 最新消息
.news-wrap {
    font-size: 13px;
    margin-bottom: 7px;
    line-height: 32px;
    .news-title {
        display: inline-block;
        vertical-align: middle;
        color: $text-color;
        padding-left: 40px;
        width: 60px;
        background: url("@/assets/image/news_bg.png") no-repeat 0 0;
    }

    .news-item {
        display: inline-block;
        vertical-align: middle;
        marquee {
            display: block;
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
