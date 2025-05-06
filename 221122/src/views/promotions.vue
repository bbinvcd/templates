<template>
    <Header />
    <div id="page-container">
        <div id="page-body">
            <div class="page-main clearfix">
                <div class="page-content memberexclusiveii-wrap">
                    <img src="@/assets/image/container_bg01.png" alt="" class="page-img" />
                    <!-- 優惠活動先用圖片替代 -->
                    <img src="@/assets/image/not-use/promotions.png" width="1200" style="display: block" />
                    <!-- <PromotionWrap /> -->
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
// import PromotionWrap from "@/features/PromotionWrap.vue";

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
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
.memberexclusiveii-wrap {
    width: 1200px;
    margin: 0 auto;
}

//優惠樣式
@if $promotions-type==light {
    .promotions-member {
        background: url(../../template/promotions/image/image_gift.png) 25% bottom no-repeat, linear-gradient(90deg, #f97a4b, #fa8f31);
    }
    .promotions-container {
        background: #fff;
        border: 2px solid #e7e7e7;
    }
    .tag-tab {
        button {
            color: #707070;
            &.current,
            &:hover {
                color: #202020;
                border-color: #f98c34;
            }
        }
    }
} @else if $promotions-type==dark {
    .promotions-member {
        background: url(../../template/promotions/image/image_gift.png) 25% bottom no-repeat, linear-gradient(90deg, #dca649, #e9c14e);
    }
    .promotions-container {
        background: #191919;
    }
    .tag-tab {
        button {
            color: #d8d8d8;
            &.current,
            &:hover {
                color: #fff;
                border-color: #f8be45;
            }
        }
    }
}
</style>
