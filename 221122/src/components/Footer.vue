<template>
    <footer id="page-footer">
        <div class="footer-main clearfix">
            <div class="footer-logo-wrap">
                <div class="wrap">
                    <div class="bblogo">
                        <img src="@/assets/image/not-use/white.png" width="104" />
                    </div>
                    <a class="browser-logo" href="javascript:void(0)">
                        <img src="@/assets/image/not-use/ublogo/ublogo_a.png" width="135" />
                    </a>
                    <div class="footer-logo-animate">
                        <i></i>
                    </div>
                </div>
            </div>
            <div class="footer-content-wrap">
                <div class="wrap clearfix">
                    <div class="article-menu">
                        <ul class="footer-help">
                            <li v-for="(item, index) in helpItems" :key="index">
                                <p v-if="item.isTitle">{{ item.title }}</p>
                                <a v-else :href="item.link">{{ item.text }}</a>
                            </li>
                        </ul>
                        <ul class="footer-map">
                            <li v-for="(item, index) in siteMapItems" :key="index">
                                <p v-if="item.isTitle">{{ item.title }}</p>
                                <router-link v-else-if="item.isRouter" :to="item.to">{{ item.text }}</router-link>
                                <a v-else :href="item.link">{{ item.text }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-middle">
                        <ul class="footer-contact">
                            <li>
                                <p>联系我们</p>
                            </li>
                            <li><a href="javascript:void(0)"></a></li>
                            <li><a href="javascript:void(0)"></a></li>
                            <li></li>
                        </ul>
                        <ul class="footer-agency">
                            <li v-for="agency in supervisoryAgencies" :key="agency.id">
                                <template v-if="agency.isHeader">
                                    <p>{{ agency.title }}</p>
                                </template>
                                <template v-else>
                                    <div class="img"></div>
                                    <span>{{ agency.text }}</span>
                                </template>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-right">
                        <ul class="footer-browser">
                            <li v-for="browser in browsers" :key="browser.id">
                                <template v-if="browser.isHeader">
                                    <p>{{ browser.title }}</p>
                                </template>
                                <template v-else>
                                    <div class="img"></div>
                                    <span>{{ browser.text }}</span>
                                </template>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">COPYRIGHT © BBIN RESERVED</div>
                <div class="footer-info"></div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// footer 新手幫助
const helpItems = [
    { title: "新手帮助", isTitle: true },
    { text: "合营计画", link: "javascript:void(0)" },
    { text: "快速存款", link: "javascript:void(0)" },
    { text: "取款帮助", link: "javascript:void(0)" },
    { text: "隐私保护", link: "javascript:void(0)" },
    { text: "备用网址", link: "javascript:void(0)" },
];
// footer 網站地圖
const siteMapItems = [
    { title: "网站地图", isTitle: true },
    { text: "关于我们", to: "/about", isRouter: true },
    { text: "联系我们", link: "javascript:void(0)" },
    { text: "合作伙伴", link: "javascript:void(0)" },
    { text: "存款帮助", link: "javascript:void(0)" },
    { text: "取款帮助", link: "javascript:void(0)" },
    { text: "常见问题", link: "javascript:void(0)" },
    { text: "投诉建议", link: "javascript:void(0)" },
    { text: "手机下注", link: "javascript:void(0)" },
    { text: "加盟合作", link: "javascript:void(0)" },
    { text: "充值中心", link: "javascript:void(0)" },
];
// footer 監管機構
const supervisoryAgencies = [
    {
        id: 1,
        title: "监管机构",
        isHeader: true,
    },
    {
        id: 2,
        text: "英国GC监督委员会",
    },
    {
        id: 3,
        text: "马耳他牌照（MGA）认证",
    },
    {
        id: 4,
        text: "英属维尔京群岛（BVI）认证",
    },
    {
        id: 5,
        text: "菲律宾（PAGCOR）监督牌照",
    },
];
// footer 瀏覽器推薦
const browsers = [
    {
        id: 1,
        title: "浏览器推荐",
        isHeader: true,
    },
    {
        id: 2,
        text: "寰宇浏览器",
    },
    {
        id: 3,
        text: "UC浏览器",
    },
    {
        id: 4,
        text: "QQ浏览器",
    },
    {
        id: 5,
        text: "谷歌浏览器",
    },
    {
        id: 6,
        text: "百度浏览器",
    },
    {
        id: 7,
        text: "搜狗浏览器",
    },
];
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *; // 使用 @ 別名
// Footer
#page-footer {
    position: relative;
    z-index: 1;
    color: #fff;
}

.footer-logo-wrap {
    background: #9f9fa4;
    .bblogo,
    .browser-logo {
        float: left;
        margin: 30px 30px 0 0;
    }
    .wrap {
        height: 100px;
        .footer-logo-animate {
            overflow: hidden;
            margin-left: 300px;
            width: 1010px;
            height: 100px;
        }
        i {
            display: block;
            animation-name: marqueeEffect;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-duration: 17s;
            animation-fill-mode: both;

            width: 2020px;
            height: 100px;
            background: url("@/assets/image/footer_logo_img.png") no-repeat left top;
        }
    }
}

.footer-content-wrap {
    background: url("@/assets/image/footer_bg02_y.jpg") repeat-y center top #391f0f;
    & > .wrap {
        background: url("@/assets/image/footer_bg01.jpg") no-repeat center top;
        min-height: 280px;
        padding: 50px 60px 30px;
        .article-menu {
            float: left;
            width: 355px;
            .footer-help {
                width: 140px;
                float: left;
                line-height: 30px;
                a {
                    font-size: 14px;
                    color: #897669;
                    &:hover {
                        color: #fff;
                    }
                }
                li:nth-child(1) {
                    width: 100%;
                }
            }
            .footer-map {
                width: 215px;
                float: left;
                line-height: 30px;
                li {
                    float: left;
                    width: 50%;
                    a {
                        font-size: 14px;
                        color: #897669;
                        &:hover {
                            color: #fff;
                        }
                    }
                    &:nth-child(1) {
                        width: 100%;
                    }
                }
            }
        }

        .footer-middle {
            float: left;
            width: 555px;
            .footer-contact {
                width: 164px;
                float: left;
                padding-left: 24px;
                li:nth-child(2) a,
                li:nth-child(3) a,
                li:nth-child(4) {
                    display: block;
                    width: 42px;
                    height: 45px;
                    margin: 10px 15px;
                    &:after {
                        content: "";
                        display: block;
                        background: transparent;
                        border-radius: 100%;
                        width: 100%;
                        height: 100%;
                        box-shadow: 0 5px 10px 0 rgba(41, 43, 51, 0.15);
                        z-index: -1;
                    }
                }
                li:nth-child(2) a {
                    background: url("@/assets/image/footer_btn_contact_tel.png") no-repeat 0 0;
                    &:hover {
                        background: url("@/assets/image/footer_btn_contact_tel.png") no-repeat 0 -45px;
                    }
                }
                li:nth-child(3) a {
                    background: url("@/assets/image/footer_btn_contact_mail.png") no-repeat 0 0;
                    &:hover {
                        background: url("@/assets/image/footer_btn_contact_mail.png") no-repeat 0 -45px;
                    }
                }
                li:nth-child(4) {
                    background: url("@/assets/image/footer_contact_24h_img.png") no-repeat 0 0;
                }
            }
            .footer-agency {
                float: left;
                width: 391px;
                font-size: 0;
                li {
                    display: inline-block;
                    font-size: 14px;
                    width: 190px;
                    height: 80px;
                    .img {
                        width: 168px;
                        height: 40px;
                    }
                    span {
                        color: rgba($color: #fff, $alpha: 0.3);
                    }
                    &:first-child {
                        display: block;
                        width: auto;
                        height: auto;
                        padding-top: 0;
                        background: unset;
                        padding-bottom: 10px;
                    }
                    &:nth-child(2) {
                        .img {
                            background: url("@/assets/image/footer_agency_img.png") no-repeat 0 0;
                        }
                    }
                    &:nth-child(3) {
                        .img {
                            background: url("@/assets/image/footer_agency_img.png") no-repeat -168px 0;
                        }
                    }
                    &:nth-child(4) {
                        .img {
                            background: url("@/assets/image/footer_agency_img.png") no-repeat -336px 0;
                        }
                    }
                    &:nth-child(5) {
                        .img {
                            background: url("@/assets/image/footer_agency_img.png") no-repeat -504px 0;
                        }
                    }
                }
            }
        }

        .footer-right {
            float: left;
            .footer-browser {
                padding-left: 40px;
                font-size: 0;
                width: 290px;
                li {
                    display: inline-block;
                    width: calc(250px / 3);
                    height: 88px;
                    text-align: center;
                    .img {
                        width: 44px;
                        height: 38px;
                        margin: 0 auto;
                    }
                    span {
                        color: rgba($color: #fff, $alpha: 0.3);
                        font-size: 14px;

                    }
                }
                li:first-child {
                    text-align: left;
                    display: block;
                    width: auto;
                    height: auto;
                    padding-top: 0;
                    background: unset;
                    padding-bottom: 10px;
                }
                li:nth-child(2) .img{
                    background: url("@/assets/image/footer_browser_img.png") no-repeat 0 0;
                }
                li:nth-child(3) .img{
                    background: url("@/assets/image/footer_browser_img.png") no-repeat -44px 0;
                }
                li:nth-child(4) .img{
                    background: url("@/assets/image/footer_browser_img.png") no-repeat -88px 0;
                }
                li:nth-child(5) .img{
                    background: url("@/assets/image/footer_browser_img.png") no-repeat -132px 0;
                }
                li:nth-child(6) .img{
                    background: url("@/assets/image/footer_browser_img.png") no-repeat -176px 0;
                }
                li:nth-child(7) .img{
                    background: url("@/assets/image/footer_browser_img.png") no-repeat -220px 0;
                }
            }
        }
    }
    ul,
    li {
        display: block;
    }
    li:nth-child(1) p {
        padding-bottom: 20px;
        color: #e5dacf;
        font-size: 18px;
    }
    .copyright {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px 0;
        line-height: 20px;
        color: #e5dacf;
        font-size: 12px;
        text-align: center;
    }
}
</style>
