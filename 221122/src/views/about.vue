<template>
    <Header />
    <div id="page-container">
        <div id="page-body">
            <div class="page-main clearfix">
                <!-- content -->
                <div class="page-content clearfix">
                    <img src="@/assets/image/container_bg01.png" alt="" class="page-img" />
                    <div class="page-sidebar">
                        <div class="sidemenu-header"></div>
                        <div class="sidemenu-body">
                            <ul class="sidemenu">
                                <li><a href="javascript:void(0);" class="active">关于我们</a></li>
                                <li><a href="javascript:void(0);">联系我们</a></li>
                                <li><a href="javascript:void(0);">合作伙伴</a></li>
                                <li><a href="javascript:void(0);">存款帮助</a></li>
                                <li><a href="javascript:void(0);">取款帮助</a></li>
                                <li><a href="javascript:void(0);">常见问题</a></li>
                                <li><a href="javascript:void(0);">投诉建议</a></li>
                                <li><a href="javascript:void(0);">手机下注</a></li>
                                <li><a href="javascript:void(0);">加盟合作</a></li>
                                <li><a href="javascript:void(0);">充值中心</a></li>
                            </ul>
                        </div>
                        <div class="sidemenu-footer"></div>
                    </div>
                    <div class="page-right">
                        <div class="page-article">
                            <div class="case-article-title">关于我们</div>
                            <div class="case-article-content">
                                <p>威尼斯国际娱乐城与bbin进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。 威尼斯国际一切博彩营业行为皆遵从菲律宾政府博彩条约。 我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的創意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是 威尼斯国际的企业永恒宗旨。</p>
                                <p>威尼斯国际的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。视讯直播游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而威尼斯国际的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。 威尼斯国际娱乐城所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!</p>
                                <p>在市场上众多的博彩网站中，玩家选择 威尼斯国际娱乐城，除了多元化的产品，也是因为威尼斯国际良好的信誉，以及高品质的服务， 威尼斯国际的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 威尼斯国际娱乐城以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈 威尼斯国际的会员， 威尼斯国际娱乐城绝对是玩家最明智的选择!</p>
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
import { inject, onMounted } from "vue";
import type { SharedState } from "../types/sharedState";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;

onMounted(() => {
    updateSharedState({
        isHomePage: false, // 不是首頁
        isLoggedIn: false, // 未登入
    });
});
</script>

<style lang="scss" scoped>
// 有需要再解除註解
// @use "@/assets/scss/base/variables" as *;
// @use "@/assets/scss/base/mixins" as *;
//  文案頁側選單
.page-sidebar {
    position: relative;
    width: 220px;
    // background: #333;
    // color: #000;
    float: left;
    background: url("@/assets/image/sidebar_bg_y.jpg") repeat-y 180px top;
    padding-bottom: 40px;
}

.sidemenu {
    li {
        display: block;
        margin: 5px 0;
        text-align: center;
        font-size: 15px;
        a {
            display: block;
            color: #8a8f99;
            width: 220px;
            border-radius: 20px;
            line-height: 20px;
            padding: 10px 50px;
            &.active,
            &:hover {
                color: #000;
                box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.2);
                background: #f0f2ff;
                background-image: linear-gradient(#fefefe, #f0f2ff 70%, #fbfdff);
            }
        }
    }
}

// .sidemenu-header {}

// .sidemenu-footer {}

// 文案右側內容
.page-right {
    position: relative;
    width: 910px;
    float: right;
}

.page-article {
    text-align: justify;
}

.case-article-title {
    // font-weight: bold;
    font-size: 20px;
    color: #000;
    padding-bottom: 20px;
}

.case-article-content {
    color: #737780;
    line-height: 27px;
    font-size: 15px;
    p {
        margin-bottom: 30px;
    }
}
</style>
