<script setup lang="ts">
import { provide, ref } from "vue";
import type { SharedState } from "./types/sharedState";

// 確保使用 ref 包裝初始狀態
const sharedState = ref<SharedState>({
    isLoggedIn: false, // 登入狀態
    isHomePage: false, // 是否為首頁
    isFixed: false, // 添加缺少的屬性
	isLang: 'zh' // 添加缺少的屬性
});

// 更新方法
const updateSharedState = (newState: Partial<SharedState>) => {
    sharedState.value = { ...sharedState.value, ...newState };
};

// 提供給子組件
provide("sharedState", sharedState);
provide("updateSharedState", updateSharedState);
</script>

<template>
    <div class="page-wrap">
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
</style>
