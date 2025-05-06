<template>
    <Header />
    <div id="page-container">
        <div id="page-body">
            <div class="page-main clearfix">
                <div class="page-content ltlottery-wrap">
                    <img src="@/assets/image/container_bg01.png" alt="" class="page-img" />
                    <!-- 彩票遊戲先用圖片替代 -->
                    <img src="@/assets/image/not-use/hall_lottery_1200.jpg" width="1200" style="display: block" />
                    <!-- <LotteryWrap /> -->
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
// import LotteryWrap from "@/features/LotteryWrap.vue";
const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;

onMounted(() => {
    // 設置為未登入且非首頁
    updateSharedState({
        isHomePage: false, // 非首頁
        isLoggedIn: false, // 未登入
    });
});
</script>

<style lang="scss" scoped>
// 有需要再解除註解
// @use "@/assets/scss/base/variables" as *;
// @use "@/assets/scss/base/mixins" as *;
.ltlottery-wrap {
    width: 960px;
    margin: 0 auto;
}
</style>
