<template>
    <div class="logo-wrap">
        <div class="logo-content">
            <a href="index.php"></a>
        </div>
    </div>
</template>

<script setup lang="ts">
// 如果需要的話可以定義 props
defineProps<{
    // 例如：是否要連結到首頁
    linkable?: boolean;
}>();
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
.logo-wrap {
    position: relative;
    width: 1320px;
    margin: 0 auto;
    .isfixed &{
        z-index: 22222222;
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
        background: url("@/assets/image/logo_bg.png") no-repeat left top;
        padding: 28px 0 0 72px;
        // display: inline-block;
        a {
            display: block;
            width: $logo-width;
            height: $logo-height;
            @include bg("logo.png");
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>
