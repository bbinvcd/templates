<template>
    <footer class="page-footer">
        <div class="footer">
            <div class="footer-logo-wrap">
                <div class="footer-wrap-box clearfix">
                    <div class="bblogo"></div>
                    <a class="browser-logo" href="javascript:void(0)"></a>
                    <div class="footer-logo-animate">
                        <i></i>
                    </div>
                </div>
            </div>
            <div class="footer-content-wrap">
                <div class="footer-wrap-box clearfix">
                    <div class="footer-help">
                        <p class="footer-help-title">新手帮助</p>
                        <ul v-if="isLang === 'zh'" class="footer-help">
                            <li>
                                <a href="javascript:void(0)">合营计画</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">快速存款</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">取款帮助</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">隐私保护</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">备用网址</a>
                            </li>
                        </ul>
                        <ul v-else-if="isLang === 'tw'" class="footer-help">
                            <li>
                                <a href="javascript:void(0)">合营計畫</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">快速存款</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">取款幫助</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">隱私保護</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">備用網址</a>
                            </li>
                        </ul>
                        <ul v-else-if="isLang === 'en'" class="footer-help">
                            <li>
                                <a href="javascript:void(0)">Cooperative Plan</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Quick Deposit</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Withdrawal Help</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Privacy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Backup URL</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-map">
                        <p class="footer-map-title">网站地图</p>
                        <ul v-if="isLang === 'zh'">
                            <li>
                                <router-link to="/about">关于我们</router-link>
                            </li>
                            <li>
                                <a href="javascript:void(0)">联系我们</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">合作伙伴</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">存款帮助</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">取款帮助</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">常见问题</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">投诉建议</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">手机下注</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">加盟合作</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">充值中心</a>
                            </li>
                        </ul>
                        <ul v-else-if="isLang === 'tw'">
                            <li>
                                <router-link to="/about">關於我們</router-link>
                            </li>
                            <li>
                                <a href="javascript:void(0)">聯絡我們</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">合作伙伴</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">存款幫助</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">取款幫助</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">常見問題</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">投訴建議</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">手機下注</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">加盟合作</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">充值中心</a>
                            </li>
                        </ul>
                        <ul v-else-if="isLang === 'en'">
                            <li>
                                <router-link to="/about">About Us</router-link>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Contact Us</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Partners</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Deposit Help</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Withdrawal Help</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">FAQ</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Feedback</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Mobile Betting</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Join Us</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Recharge Center</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-contact">
                        <p class="footer-contact-title">联系我们</p>
                        <ul>
                            <li class="footer-contact-item-1"></li>
                            <li class="footer-contact-item-2"></li>
                            <li class="footer-contact-item-3"></li>
                        </ul>
                    </div>
                    <div class="footer-agency">
                        <p class="footer-agency-title">监管机构</p>
                        <ul>
                            <li class="footer-agency-item-1">
                                <div class="img-wrap footer-agency-img-1"></div>
                                <span>英国GC监督委员会</span>
                            </li>
                            <li class="footer-agency-item-2">
                                <div class="img-wrap footer-agency-img-2"></div>
                                <span>马耳他牌照（MGA）认证</span>
                            </li>
                            <li class="footer-agency-item-3">
                                <div class="img-wrap footer-agency-img-3"></div>
                                <span>英属维尔京群岛（BVI）认证</span>
                            </li>
                            <li class="footer-agency-item-4">
                                <div class="img-wrap footer-agency-img-4"></div>
                                <span>菲律宾（PAGCOR）监督牌照</span>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-browser">
                        <p class="footer-browser-title">浏览器推荐</p>
                        <ul>
                            <li class="footer-browser-item-1">
                                <div class="img-wrap footer-browser-img-1"></div>
                                <span>寰宇浏览器</span>
                            </li>
                            <li class="footer-browser-item-2">
                                <div class="img-wrap footer-browser-img-2"></div>
                                <span>UC浏览器</span>
                            </li>
                            <li class="footer-browser-item-3">
                                <div class="img-wrap footer-browser-img-3"></div>
                                <span>QQ浏览器</span>
                            </li>
                            <li class="footer-browser-item-4">
                                <div class="img-wrap footer-browser-img-4"></div>
                                <span>谷歌浏览器</span>
                            </li>
                            <li class="footer-browser-item-5">
                                <div class="img-wrap footer-browser-img-5"></div>
                                <span>百度浏览器</span>
                            </li>
                            <li class="footer-browser-item-6">
                                <div class="img-wrap footer-browser-img-6"></div>
                                <span>搜狗浏览器</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">Copyright © BBIN Reserved</div>
                <div class="footer-info"></div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { inject, watch, ref } from "vue";
import type { SharedState } from "../types/sharedState";

const sharedState = inject<{ value: SharedState }>("sharedState");
const isLang = ref(sharedState?.value?.isLang);

watch(
    () => sharedState?.value?.isLang,
    newLang => {
        isLang.value = newLang;
    },
    { immediate: true }
);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
// Footer
.page-footer {
    position: relative;
    z-index: 1;
}

.footer-logo-wrap {
    background: #9f9fa4;
    .bblogo,
    .browser-logo {
        float: left;
        margin: 30px 30px 0 0;
    }
    .bblogo {
        background: url("@/assets/image/not-use/white.png") no-repeat 0 0 / 104px 40px;
        width: 104px;
        height: 40px;
    }
    .browser-logo {
        background: url("@/assets/image/not-use/ublogo/ublogo_a.png") no-repeat 0 0;
        width: 135px;
        height: 45px;
    }
    .footer-wrap-box {
        max-width: 1320px;
        margin: 0 auto;
        .footer-logo-animate {
            float: left;
            overflow: hidden;
            width: 1010px;
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
            background: url("@/assets/image/footer_logo_img.png") no-repeat 0 0;
        }
    }
}

.footer-content-wrap {
    background: url("@/assets/image/footer_bg02_y.jpg") repeat-y 50% 0 #391f0f;
    & > .footer-wrap-box {
        background: url("@/assets/image/footer_bg01.jpg") no-repeat 50% 0;
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px 60px 30px;
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

.footer-help {
    width: 140px;
    float: left;
    line-height: 30px;
    .footer-help-title {
        font-size: 18px;
        color: #e5dacf;
        padding-bottom: 20px;
    }
    li {
        padding-right: 20px;
    }
    a {
        font-size: 14px;
        color: #897669;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        &:hover {
            color: #fff;
        }
    }
}

.footer-map {
    width: 215px;
    float: left;
    line-height: 30px;
    .footer-map-title {
        font-size: 18px;
        color: #e5dacf;
        padding-bottom: 20px;
    }
    li {
        float: left;
        width: calc(50% - 10px);
		padding-right: 10px;
        a {
            font-size: 14px;
            color: #897669;
			text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
            &:hover {
                color: #fff;
            }
        }
    }
}

.footer-contact {
    width: 140px;
    float: left;
    padding-left: 24px;
    .footer-contact-title {
        font-size: 18px;
        color: #e5dacf;
        padding-bottom: 20px;
    }
    li {
        margin-bottom: 10px;
    }
    .footer-contact-item-1,
    .footer-contact-item-2,
    .footer-contact-item-3 {
        display: block;
        width: 42px;
        height: 45px;
        border-radius: 100%;
        box-shadow: 0 5px 10px 0 rgba(41, 43, 51, 0.15);
    }
    .footer-contact-item-1 {
        background: url("@/assets/image/footer_btn_contact_tel.png") no-repeat 0 0;
        &:hover {
            background: url("@/assets/image/footer_btn_contact_tel.png") no-repeat 0 100%;
        }
    }
    .footer-contact-item-2 {
        background: url("@/assets/image/footer_btn_contact_mail.png") no-repeat 0 0;
        &:hover {
            background: url("@/assets/image/footer_btn_contact_mail.png") no-repeat 0 100%;
        }
    }
    .footer-contact-item-3 {
        background: url("@/assets/image/footer_contact_24h_img.png") no-repeat 0 0;
    }
}

.footer-agency {
    float: left;
    width: 391px;
    .footer-agency-title {
        font-size: 18px;
        color: #e5dacf;
        padding-bottom: 20px;
    }
    li {
        vertical-align: top;
        display: inline-block;
        font-size: 14px;
        width: 190px;
        margin-bottom: 12px;
        .img-wrap {
            width: 168px;
            height: 40px;
            margin-bottom: 7px;
        }
        span {
            color: rgba(255, 255, 255, 0.3);
        }
        .footer-agency-img-1 {
            background: url("@/assets/image/footer_agency_img.png") no-repeat 0 0;
        }
        .footer-agency-img-2 {
            background: url("@/assets/image/footer_agency_img.png") no-repeat -168px 0;
        }
        .footer-agency-img-3 {
            background: url("@/assets/image/footer_agency_img.png") no-repeat -336px 0;
        }
        .footer-agency-img-4 {
            background: url("@/assets/image/footer_agency_img.png") no-repeat -504px 0;
        }
    }
}

.footer-browser {
    float: left;
    padding-left: 40px;
    width: 250px;
    .footer-browser-title {
        font-size: 18px;
        color: #e5dacf;
        padding-bottom: 20px;
    }
    li {
        display: inline-block;
        width: calc(100% / 3);
        text-align: center;
        margin-bottom: 15px;
        .img-wrap {
            width: 44px;
            height: 38px;
            margin: 0 auto 7px;
        }
        span {
            color: rgba($color: #fff, $alpha: 0.3);
            font-size: 14px;
        }
    }
    .footer-browser-img-1 {
        background: url("@/assets/image/footer_browser_img.png") no-repeat 0 0;
    }
    .footer-browser-img-2 {
        background: url("@/assets/image/footer_browser_img.png") no-repeat -44px 0;
    }
    .footer-browser-img-3 {
        background: url("@/assets/image/footer_browser_img.png") no-repeat -88px 0;
    }
    .footer-browser-img-4 {
        background: url("@/assets/image/footer_browser_img.png") no-repeat -132px 0;
    }
    .footer-browser-img-5 {
        background: url("@/assets/image/footer_browser_img.png") no-repeat -176px 0;
    }
    .footer-browser-img-6 {
        background: url("@/assets/image/footer_browser_img.png") no-repeat -220px 0;
    }
}
</style>
