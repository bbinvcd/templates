<template>
    <div class="lang-wrap">
        <div id="ele-lang-wrap" class="ele-lang-wrap" @click="toggleLang">
            <div class="ele-lang-title">
                <div class="icon-wrap"></div>
                <a href="javascript:void(0)" class="lang-link" :class="currentLang.flag"></a>
                <span>{{ currentLang.name }}</span>
            </div>
            <div id="ele-lang-group" class="ele-lang-group" :class="{ 'is-open': isOpen }">
                <a v-for="lang in languages" :key="lang.flag" href="javascript:void(0)" class="ele-lang-option" :class="[lang.flag, { 'ele-lang-current': lang.flag === currentLang.flag }]" @click.prevent="selectLang(lang)"></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import type { SharedState } from "../types/sharedState";

interface Language {
    name: string;
    flag: string;
}

const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;

const languages: Language[] = [
    { name: "繁體中文", flag: "lang-flag01" },
    { name: "简体中文", flag: "lang-flag02" },
    { name: "English", flag: "lang-flag03" }
];

const currentLang = ref(languages[1]); // 預設簡體中文
const isOpen = ref(false);

const toggleLang = () => {
    isOpen.value = !isOpen.value;
};

const selectLang = (lang: Language) => {
    currentLang.value = lang;
    isOpen.value = false;
    // 這裡可以發出事件通知父元件語言變更
    emit("change", lang);
    // 更新 sharedState 中的語系
    updateSharedState({
        isLang: lang.flag === "lang-flag01" ? "tw" : lang.flag === "lang-flag02" ? "zh" : "en"
    });
};

const emit = defineEmits<{
    (e: "change", lang: Language): void;
}>();
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
.ele-lang-group {
    transform-origin: top; // 設置變形的原點在頂部
    transform: scaleY(0); // 初始狀態完全收起
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); // 使用 cubic-bezier 讓動畫更自然
	position: absolute;
    left: 16px;
    top: 46px;
    width: 40px;
    background: #fff;
    border-radius: 70px;
    &.is-open {
        transform: scaleY(1); // 完全展開
        max-height: 300px;
        opacity: 1;
    }
}

//下拉式

.lang-wrap {
    margin-top: 10px;
    position: relative;
    float: left;
}
.ele-lang-wrap {
    font-size: 13px;
    text-align: center;
    .ele-lang-title {
        .icon-wrap {
            position: absolute;
            left: 0;
            right: 0;
            width: 40px;
            height: 40px;
            margin: 0 auto;
            transition: all 0.3s;
            border-radius: 100%;
            i {
                display: block;
                width: 22px;
                height: 22px;
                position: absolute;
                left: 9px;
                top: 9px;
            }
            &:after {
                content: "";
                display: block;
                background: linear-gradient(#fefefe 0, #f0f2ff 50%, #fefefe 100%);
                border-radius: 100%;
                width: 100%;
                height: 100%;
                box-shadow: 0 5px 10px 0 rgba( 41, 43, 51, 0.15);
            }
        }
    }
    a {
        display: block;
        width: 22px;
        background-repeat: no-repeat;
        margin: 12px auto 20px;
        @for $i from 1 through 3 {
            &.lang-flag0#{$i} {
                background-position: 0 39px - 40px * $i;
            }
        }
        // 選擇國旗圖片樣式要用1矩形 or 2圓形
        @if $lang-img == 1 {
            background-image: url("@/assets/image/not-use/lang_rect_a.png");
        } @else if $lang-img == 2 {
            background-image: url("@/assets/image/not-use/lang_circle_a.png");
        }
    }
    i {
        display: inline-block;
        vertical-align: middle;
        width: 10px;
        height: 7px;
        background-repeat: no-repeat;
        background-position: 0 0;
        margin: 0 0 0 8px;
        // 選擇箭頭的色彩樣式 1白 2黑
        @if $lang-arrow == 1 {
            background-position: 0 0;
        } @else if $lang-arrow == 2 {
            background-position: -10px 0;
        }
    }
}
.ele-lang-title {
    cursor: pointer;
    width: 70px;
    overflow: hidden;
    a.lang-link {
        display: block;
        position: relative;
        z-index: 5;
        height: 18px;
    }
    span {
        display: block;
        color: #737580;
        line-height: 22px;
    }
}
.ele-lang-title:hover,
.ele-lang-wrap .is-active {
    .icon-wrap {
        padding-bottom: 4px;
        //金色背景底圖
        background: linear-gradient(to right, #ddb59c 0, #fee2c8 50%, #ddb59c 100%);
        box-shadow: 0 5px 10px 0 rgba( 41, 43, 51, 0.2);
        &:after {
            background: linear-gradient(to right, #ddb59c 0, #fee2c8 50%, #ddb59c 100%);
        }
        i {
            filter: drop-shadow(0 4px 8px rgba( 41, 43, 51, 0.2));
        }
    }
}
.ele-lang-option {
    height: 20px;
}
</style>
