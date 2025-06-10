<template>
    <Header />
    <main class="page-container">
        <div class="page-body">
            <div class="page-img"></div>
            <!-- 優惠活動先用圖片替代 -->
            <img src="@/assets/image/not-use/promotions.png" width="1200" style="display: block; margin: 0 auto" />
        </div>
    </main>
    <Footer />
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import type { SharedState } from "../types/sharedState";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;

onMounted(() => {
    // 設置為未登入且非首頁
    updateSharedState({
        isHomePage: false, // 非首頁
        isLoggedIn: false // 未登入
    });
});
</script>

<style lang="scss" scoped></style>
