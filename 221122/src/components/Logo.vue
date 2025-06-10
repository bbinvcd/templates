<template>
    <div class="logo-wrap">
        <div class="logo-content">
            <a href="/"></a>
        </div>
    </div>
</template>

<script setup lang="ts">
// 如果需要的話可以定義 props
defineProps<{
    // 例如：是否要連結到首頁
    linkable ?: boolean;
}>();
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
.logo-wrap {
    position: relative;
    width: 1320px;
    margin: 0 auto;
    .isfixed & {
        .logo-content {
            top: 100px;
        }
    }
    .logo-content {
        z-index: 2;
        position: absolute;
        left: 120px;
        top: -10px;
        width: 300px;
        height: 200px;
        background: url("@/assets/image/logo_bg.png") no-repeat 0 0;
        padding: 28px 0 0 72px;
        a {
            display: block;
            width: $logo-width;
            height: $logo-height;
			background-image: url(@/assets/image/logo.png);
            background-position: 50%;
            background-repeat: no-repeat;
        }
    }
}
</style>
