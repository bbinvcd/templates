<template>
    <div class="sport-wrap">
        <div id="menu-wrap" class="sport-menu">
            <ul class="clearfix">
                <li v-for="(item, index) in ballData" :key="index">
                    <a href="javascript:void(0)" :class="['ballhall', { current: index === 0 }]">{{ item.pn_name }}</a>
                </li>
            </ul>
        </div>
        <div class="sport-middle-wrap">
            <div class="sport-today-live">
                <div v-for="item in todayLive" class="today-live-wrap">
                    <div :class="'today-live-left today-live-left-' + item.class">
                        <div class="today-live-left-top">
                            <div class="today-live-icon"></div>
                            <div class="today-live-enter">进入</div>
                            <div class="today-live-top">{{ item.title }}</div>
                        </div>
                    </div>
                    <div class="today-live-even">
                        <div class="today-live-even-wrap">
                            <div class="today-live-date">{{ item.date }}</div>
                            <div class="today-live-category">{{ item.category }}</div>
                            <div class="today-live-home">
                                <div class="today-live-name">{{ item.teamh }}</div>
                                <div class="today-live-handica">{{ item.handica }}</div>
                                <div class="today-live-odds">{{ item.oddsh }}</div>
                            </div>
                            <div class="today-live-away">
                                <div class="today-live-name">{{ item.teama }}</div>
                                <div class="today-live-odds">{{ item.oddsa }}</div>
                            </div>
                        </div>
                        <div class="today-live-even-wrap">
                            <div class="today-live-date">{{ item.date }}</div>
                            <div class="today-live-category">{{ item.category }}</div>
                            <div class="today-live-home">
                                <div class="today-live-name">{{ item.teamh }}</div>
                                <div class="today-live-handica">{{ item.handica }}</div>
                                <div class="today-live-odds">{{ item.oddsh }}</div>
                            </div>
                            <div class="today-live-away">
                                <div class="today-live-name">{{ item.teama }}</div>
                                <div class="today-live-odds">{{ item.oddsa }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sport-right-wrap">
                <div class="sport-event-wrap">
                    <div class="event-top">最新赛果</div>
                    <div class="event-container-wrap">
                        <div v-for="item in sportEvent" class="event-list">
                            <div class="event-left">
                                <div class="event-time">{{ item.time }}</div>
                                <div class="event-score">{{ item.score }}</div>
                            </div>
                            <div class="event-right">
                                <div class="event-league">{{ item.league }}</div>
                                <div class="event-team-home">
                                    <div class="team-name home">{{ item.nameh }}</div>
                                </div>
                                <div class="event-team-away">
                                    <div class="team-name">{{ item.namea }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sport-vendor-wrap">
            <div v-for="item in vendorList" :class="'vendor-list ' + item.pn_class" v-bind:style="'background-image:url(https://web.bbinpartner.com/images/card/ball/' + item.pn_card + ')'" @mouseover="changeBackground(item.pn_class, item.pn_card_hover)" @mouseleave="changeBackground(item.pn_class, item.pn_card)">
                <div class="vendor-name-wrap">
                    <span class="vendor-name">{{ item.pn_name }}</span>
                    <i class="arrow"></i>
                </div>
                <div class="vendor-desc" :style="item.pn_class === 'tgpball' ? { paddingLeft: '20px', paddingRight: '20px' } : {}">
                    <template v-if="item.pn_class !== 'tgpball'">
                        <div class="vendor-title">
                            <div class="vendor-league">{{ item.pn_content }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { PlatformItem } from "../types/nav";
import "slick-carousel";
import $ from "jquery";

const ballData = ref<PlatformItem[] | []>([]);
// 取得體育資料
const fetchBallData = async () => {
    try {
        const response = await fetch("https://wms.bbinpartner.com/api/menu?type=ball"); // 你的 API 端點
        ballData.value = await response.json();
    } catch (error) {
        console.error("Error fetching nav data:", error);
    }
};
const fetchVendorData = async () => {
    try {
        const response = await fetch("https://wms.bbinpartner.com/api/nav?target=nav&type=1"); // 你的 API 端點
        vendorList.value = await response.json();
    } catch (error) {
        console.error("Error fetching nav data:", error);
    }
};

const changeBackground = (name: string, url: string) => {
    $(".sport-vendor-wrap ." + name).css("background-image", "url(https://web.bbinpartner.com/images/card/ball/" + url + ")");
};

const todayLive = ref<any[]>([
    {
        class: "0",
        title: "今日-足球",
        date: "11/07 16:00",
        category: "墨西哥女子超级联赛",
        teamh: "蒙特瑞(女)",
        handica: "0.5",
        oddsh: "0.96",
        teama: "普马斯(女)",
        oddsa: "0.88",
    },
    {
        class: "1",
        title: "今日-篮球",
        date: "11/07 16:00",
        category: "NBA",
        teamh: "新奥尔良鹈鹕",
        handica: "6.5",
        oddsh: "0.93",
        teama: "波特兰开拓者",
        oddsa: "0.97",
    },
    {
        class: "2",
        title: "滚球-足球",
        date: "04:30 滚球",
        category: "亚洲-ASIAN SCHOOLS CHAMPIONSHIP",
        teamh: "中国学校",
        handica: "1",
        oddsh: "0.85",
        teama: "Sri Lanka School",
        oddsa: "0.85",
    },
]);

const sportEvent = ref<any[]>([
    {
        time: "2022-12-31 18:00:00",
        score: "0:1",
        league: "NBA 2K21 1x1",
        nameh: "Napoli [中]",
        namea: "James Harden",
    },
    {
        time: "2023-01-01 12:45:00",
        score: "4:12",
        league: "FIFA 21 4x4 England Championship",
        nameh: "Phoenix Suns 2K22 3x3 [中]",
        namea: "Norwich City 4x4",
    },
    {
        time: "2022-08-31 11:20:00",
        score: "1:1",
        league: "Wimbledon 2021	",
        nameh: "Stan Wawrinka (c) [中]",
        namea: "Marin Cilic (c)",
    },
    {
        time: "2022-07-31 02:50:00",
        score: "0:4",
        league: "FIFA 22 5x5 Superleague 2022",
        nameh: "Internazionale [中]",
        namea: "Liverpool",
    },
    {
        time: "2022-09-30 06:10:00",
        score: "6:5",
        league: "FIFA 21 Germany Championship",
        nameh: "VfB Stuttgart [中]",
        namea: "FC Koln",
    },
    {
        time: "2022-10-31 08:00:00",
        score: "9:1",
        league: "Roland Garros 2021",
        nameh: "KT Rolster Challengers [中]",
        namea: "Marin Cilic (c)",
    },
    {
        time: "2022-11-01 02:35:00",
        score: "0:2",
        league: "FIFA 22 3x3 Copa Libertadores 2022",
        nameh: "Boca Juniors [中]",
        namea: "Atletico Paranaense",
    },
    {
        time: "2022-12-31 18:00:00",
        score: "4:3",
        league: "英雄联盟 - 韩国冠军挑战者联赛",
        nameh: "KT Rolster Challengers [中]",
        namea: "Hanwha Life Esports Challengers",
    },
]);

const vendorList = ref<any[]>([]);

onMounted(() => {
    fetchBallData();
    fetchVendorData();
    $(".event-container-wrap").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3200,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        speed: 1000,
        infinite: true,
    });
    $(".today-live-even").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        speed: 1000,
    });
});
</script>

<style lang="scss" scoped>
// 有需要再解除註解
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
.ball-wrap {
    width: 1200px;
    margin: 0 auto;
    .ele-slideshow-wrap {
        position: relative;
        width: 100%;
        height: 172px;
        ul {
            position: relative;
            height: 100%;
            li {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                a {
                    display: block;
                    font-size: 0;
                    height: 100%;
                    background-position: center top;
                    background-repeat: no-repeat;
                }
            }
        }
    }
    .ele-slideshow-scroll {
        overflow: hidden;
        position: relative;
        z-index: 1;
        margin: 0 auto;
        top: 0;
        width: 100%;
        height: 100%;
    }
    // 圓點控制項的框架
    .ele-slideshow-control-wrap {
        position: absolute;
        width: auto;
        height: 26px;
        line-height: 26px;
        bottom: 8px;
        right: 8px;
        z-index: 2;
        background: #000;
        opacity: 0.35;
        border-radius: 3px;
        padding: 0 6px;
    }
    // 圓點控制項的按鈕風格
    .ele-slideshow-nav {
        > a {
            display: inline-block;
            vertical-align: middle;
            width: 8px;
            height: 8px;
            background: #fff;
            margin: 0 4px;
            opacity: 0.4;
            border-radius: 50%;
            &.active {
                opacity: 1;
            }
        }
    }
    .sport-wrap {
        max-width: 1200px;
        min-width: 960px;
        margin: 0 auto;
    }
    .sport-menu {
        background: #1f1f1f;
        li {
            position: relative;
            float: left;
            width: 16.6%;
            height: 42px;
            font-size: 15px;
            text-align: center;
            a {
                display: block;
                color: #bababa;
                line-height: 42px;
                &:hover,
                &.current {
                    color: #fff;
                }
            }
        }
    }
    .sport-login {
        @include clearfix;
        background: url("@/assets/image/not-use/ball/sport_bbin_bg.png") no-repeat left top;
        height: 120px;
    }
    .sport-logo {
        float: left;
        @include bg("bbin_logo.png");
        width: 100px;
        height: 38px;
        margin: 41px 0 0 32px;
    }
    .sport-info {
        float: left;
        padding: 13px 0 0 44px;
    }
    .sport-time {
        font-size: 12px;
        line-height: 21px;
        color: #afafaf;
        p {
            display: inline-block;
        }
    }
    .bet-slip {
        font-size: 14px;
        line-height: 25px;
        margin: 0 0 9px 0;
        a {
            color: #fff;
            padding: 0 18px 0 0;
            background: url("@/assets/image/not-use/ball/sport_arrow_w.png") no-repeat right center;
            margin: 0 32px 0 0;
            @include trans(color);
            &:hover {
                color: #afafaf;
            }
        }
    }
    .sport-login-btn {
        display: block;
        width: 130px;
        height: 34px;
        font-size: 16px;
        text-align: center;
        line-height: 34px;
        background: #e33d52;
        border-radius: 4px;
        color: #fff;
        @include trans(background);
        &:hover {
            background: #4489dd;
            color: #fff;
        }
    }
    .sport-middle-wrap {
        @include clearfix;
        background: #1e212f;
        padding: 6px;
    }
    .sport-today-live {
        float: left;
        width: 47.7%;
        padding: 0 6px 0 0;
    }
    .today-live-wrap {
        @include clearfix;
        margin: 0 0 9px 0;
        background: #252b41;
    }
    .today-live-left {
        float: left;
        background-image: url("@/assets/image/not-use/ball/sport_hall_bbin_first.png");
        background-repeat: no-repeat;
        width: 154px;
        height: 96px;
        cursor: pointer;
        font-size: 14px;
        color: #fff;
        $today-live-left: 0, 1, 2, 3, 4;
        $picW: -96px;
        @each $var in $today-live-left {
            &.today-live-left-#{$var} {
                background-position: 0 $var * $picW;
                &:hover {
                    background-position: -154px $var * $picW;
                    .today-live-left-top {
                        background: rgba(226, 183, 31, 0.8);
                    }
                    .today-live-icon {
                        display: none;
                    }
                    .today-live-enter {
                        display: block;
                    }
                }
                .today-live-icon {
                    float: left;
                    margin: 9px 0 0 13px;
                    width: 20px;
                    height: 20px;
                    background-image: url("@/assets/image/not-use/ball/sport_bbin_icon.png");
                    background-repeat: no-repeat;
                    background-position: $var * -20px 0;
                }
            }
        }
        &.today-live-left-3,
        &.today-live-left-4 {
            .today-live-icon {
                background-position: -40px 0;
            }
        }
    }
    .today-live-left-top {
        position: relative;
        background: rgba(18, 19, 28, 0.5);
        height: 38px;
    }
    .today-live-enter {
        display: none;
        float: left;
        margin: 0 0 0 13px;
        height: 38px;
        line-height: 38px;
    }
    .today-live-top {
        width: 100%;
        position: absolute;
        padding: 0 0 0 45px;
        line-height: 38px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .today-live-even {
        float: left;
        width: calc(100% - 154px);
        font-size: 12px;
        padding: 12px 11px 12px 10px;
        line-height: 14px;
        height: 96px;
        overflow: hidden;
    }
    .today-live-even-wrap {
        height: 84px;
        &:focus {
            outline: 0;
        }
    }
    .today-live-date {
        color: #fff;
        padding: 0 0 0 4px;
    }
    .today-live-category {
        color: #afafaf;
        padding: 0 0 7px 4px;
    }
    .today-live-home {
        @include clearfix;
        position: relative;
        color: #edc12c;
        padding: 2px 4px;
        cursor: pointer;
        &:hover {
            background: #1e212f;
        }
    }
    .today-live-away {
        @extend .today-live-home;
        color: #fff;
    }
    .today-live-name {
        float: left;
    }
    .today-live-handica {
        position: absolute;
        right: 79px;
    }
    .today-live-odds {
        float: right;
        color: #fff;
    }
    .sport-right-wrap {
        float: left;
        width: 52.3%;
    }
    .sport-event-wrap {
        margin: 0 0 6px 0;
    }
    .event-top {
        padding: 0 0 0 15px;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        color: #fff;
        background: #464e6f;
        span {
            color: #ed6a75;
        }
    }
    .event-container-wrap {
        @include clearfix;
        width: 100%;
        height: 272px;
        overflow: hidden;
    }
    .event-list {
        width: 100%;
        margin-bottom: 1px;
        cursor: pointer;
        color: #fff;
        line-height: 1.15;
        @include clearfix;
    }
    .event-left {
        float: left;
        margin-right: 0.2%;
        padding: 2%;
        width: 19.5%;
        height: 67px;
        font-size: 14px;
        text-align: center;
        background: #282d3e;
    }
    .event-time {
        margin-bottom: 6px;
    }
    .event-right {
        float: left;
        padding: 7px 10px;
        width: 80.3%;
        height: 67px;
        font-size: 12px;
        background: #282d3e;
    }
    .event-league {
        margin: 0 0 4px 10px;
        color: #afafaf;
    }
    .event-team-home,
    .event-team-away {
        margin-bottom: 2px;
        height: 18px;
        line-height: 18px;
    }
    .team-name {
        float: left;
        padding: 0 30% 0 10px;
        width: 100%;
        height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        &:hover {
            background: #1e212f;
        }
    }
    .home {
        color: #edc12c;
    }
    .sport-vendor-wrap {
        padding: 0 6px;
        background: url("@/assets/image/not-use/ball/sport_hall_bg.png") no-repeat center bottom #1e212f;
        @include clearfix;
    }
    .vendor-list {
        float: left;
        position: relative;
        margin: 0 0.6% 0.6% 0;
        width: 32.9%;
        height: 138px;
        background-repeat: no-repeat;
        background-position: left top;
        background-size: cover;
        cursor: pointer;
        @include trans(background);
        $vendor-bg: bbball, nbbball, nbbesport, csball, sababall, boball, tgpball, sabaesport, asia365, imesport, v2gvirtuals;
        @each $var in $vendor-bg {
            &.#{$var} {
                background: no-repeat center top;
                &:hover {
                    background: no-repeat center top;
                    .vendor-desc {
                        color: #fff;
                    }
                }
            }
        }
        &:nth-child(3n) {
            margin-right: 0;
        }
    }
    .vendor-name-wrap {
        padding: 0 0 0 20px;
        height: 56px;
        line-height: 56px;
        font-size: 16px;
        .arrow {
            display: inline-block;
            @include bg("sport_arrow_w.png");
            width: 6px;
            height: 12px;
        }
    }
    .vendor-name {
        color: #fff;
        margin: 0 10px 0 0;
    }
    .vendor-desc {
        height: 82px;
        padding: 10px 0;
        background: #282d3e;
        background: linear-gradient(90deg, #282d3e 0, rgba(40, 45, 62, 0.2));
        font-size: 12px;
        color: #bdbec3;
        @include trans(color);
    }
    .vendor-title {
        @include clearfix;
        padding: 0 20px 5px 20px;
    }
    .vendor-time {
        float: left;
        color: #fff;
        margin: 0 10px 0 0;
    }
    .vendor-league {
        float: left;
        color: #afafaf;
    }
    .vendor-home {
        @include clearfix;
        position: relative;
        color: #edc12c;
        padding: 0 20px;
        &:hover {
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%);
        }
    }
    .vendor-team {
        float: left;
    }
    .vendor-handica {
        position: absolute;
        right: 60px;
    }
    .vendor-odds {
        float: right;
        color: #fff;
    }
    .vendor-away {
        @extend .vendor-home;
        color: #fff;
    }
}
</style>
