<template>
    <Header />
    <div id="page-container">
        <div id="page-body">
            <div class="page-main clearfix">
                <div class="page-content game-wrap">
                    <img src="@/assets/image/container_bg01.png" alt="" class="page-img" />
                    <!-- 遊戲大廳先用圖片替代 -->
                    <img src="@/assets/image/not-use/hall_casino_960.png" width="960" style="display: block" />
                    <!-- <GameWrap /> -->
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
// import GameWrap from "@/features/GameWrap.vue";

const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;

onMounted(() => {
    // 設置為未登入且非首頁
    updateSharedState({
        isHomePage: false, // 非首頁
        isLoggedIn: true, // 未登入
    });
});
</script>

<style lang="scss" scoped>
// 有需要再解除註解
// @use "@/assets/scss/base/variables" as *;
// @use "@/assets/scss/base/mixins" as *;
.game-wrap {
    width: 960px;
    margin: 0 auto;
}
</style>
