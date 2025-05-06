<template>
    <div class="lang-wrap">
        <div id="ele-lang-wrap" class="ele-lang-wrap" @click="toggleLang">
            <div class="ele-lang-title">
                <div class="icon-wrap">
                    <i></i>
                </div>
                <a href="javascript:void(0)" class="link" :class="currentLang.flag"> </a>
                <span>{{ currentLang.name }}</span>
            </div>
            <div id="ele-lang-group" class="ele-lang-group" :class="{ 'is-open': isOpen }">
                <a v-for="lang in languages" :key="lang.flag" href="javascript:void(0)" class="ele-lang-option" :class="[lang.flag, { 'ele-lang-current': lang.flag === currentLang.flag }]" @click.prevent="selectLang(lang)"></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Language {
    name: string;
    flag: string;
}

const languages: Language[] = [
    { name: "繁體中文", flag: "flag01" },
    { name: "简体中文", flag: "flag02" },
    { name: "English", flag: "flag03" },
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
};

const emit = defineEmits<{
    (e: "change", lang: Language): void;
}>();
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *; // 使用 @ 別名
.ele-lang-group {
    transform-origin: top; // 設置變形的原點在頂部
    transform: scaleY(0); // 初始狀態完全收起
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); // 使用 cubic-bezier 讓動畫更自然

    &.is-open {
        transform: scaleY(1); // 完全展開
        max-height: 300px;
        opacity: 1;
    }
}
// 並排風格
@if $lang-kind==Flag {
    //首頁
    .ele-lang-wrap {
        a {
            display: inline-block;
            vertical-align: top;
            background-repeat: no-repeat;
            // 選擇國旗圖片樣式要用1矩形 or 2圓形
            @if $lang-img==1 {
                background-image: url("@/assets/image/not-use/lang_rect_a.png");
            } @else if $lang-img==2 {
                background-image: url("@/assets/image/not-use/lang_circle_a.png");
            }
        }
        a {
            display: inline-block;
            width: 22px;
            height: 18px;
            text-align: left;
            @for $i from 1 through 3 {
                &.flag0#{$i} {
                    background-position: 0 40px - 40px * $i;
                }
            }
        }
    }
}

//下拉式
@if $lang-kind==Dropmenu {
    .lang-wrap {
        float: left;
    }
    .ele-lang-wrap {
        .ele-lang-title {
            .icon-wrap {
                display: block;
                position: absolute;
                width: 40px;
                height: 40px;
                left: 0;
                right: 0;
                margin: 0 auto;
                transition: all 0.3s;
                background: translate;
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
                    background: linear-gradient(to bottom, #fefefe 0, #f0f2ff 50%, #fefefe 100%);
                    border-radius: 100%;
                    width: 100%;
                    height: 100%;
                    box-shadow: 0 5px 10px 0 rgba(41, 43, 51, 0.15);
                }
            }
        }
    }
    .ele-lang-title {
        cursor: pointer;
        display: block;
        width: 70px;
        height: 58px;
        border: 1px solid transparent;
        // background: url("@/assets/image/header_lang_bg.png") no-repeat center top;
        a.link {
            display: block;
            position: relative;
            z-index: 222;
            width: 22px;
            height: 20px;
            padding: 10px 10px 14px;
        }
        span {
            display: block;
            color: #737580;
        }
    }
    .ele-lang-title:hover,
    .ele-lang-wrap .is-active {
        .icon-wrap {
            height: 44px;
            padding-bottom: 4px;
            //金色背景底圖
            background: linear-gradient(to right, #ddb59c 0, #fee2c8 50%, #ddb59c 100%);
            box-shadow: 0 5px 10px 0 rgba(41, 43, 51, 0.2);
            &:after {
                background: linear-gradient(to right, #ddb59c 0, #fee2c8 50%, #ddb59c 100%);
            }
            i {
                filter: drop-shadow(0 4px 8px rgba(41, 43, 51, 0.2));
            }
        }
    }

    .ele-lang-wrap {
        font-size: 13px;
        position: absolute;
        top: 10px;
        right: 0;
        z-index: 999;
        // width: 36px;
        // height: 36px;
        // border: 1px solid red;
        text-align: center;
        a {
            display: block;
            width: 22px;
            line-height: 22px;
            background-repeat: no-repeat;
            margin: 12px auto;
            padding: 0 0 0 24px;
            @for $i from 1 through 3 {
                &.flag0#{$i} {
                    background-position: 0 39px - 40px * $i;
                }
            }
            // 選擇國旗圖片樣式要用1矩形 or 2圓形
            @if $lang-img==1 {
                background-image: url("@/assets/image/not-use/lang_rect_a.png");
            } @else if $lang-img==2 {
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
            @if $lang-arrow==1 {
                background-position: 0 0;
            } @else if $lang-arrow==2 {
                background-position: -10px 0;
            }
        }
    }
    .ele-lang-group {
        position: absolute;
        left: 16px;
        top: 46px; //80px
        // border: 1px solid blue;
        // display: none;
        width: 40px;
        background: #fff;
        border-radius: 70px;
    }
    .ele-lang-option {
        display: block;
        // border: 1px solid yellow;
        height: 20px;
    }
}

//彈窗
$list: tw cn vi ug th ko ja id es en;
@if $lang-kind==popupFlag {
    @each $author in $list {
        .icon-#{$author} {
            background: url("@/assets/image/not-use/#{$author}.png") no-repeat;
        }
    }
    .ele-lang-wrap {
        .btn-icon {
            float: left;
            width: 32px;
            height: 32px;
        }
    }
    .ele-lang-wrap {
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        vertical-align: middle;
    }
    .icon-lang {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-size: 100%;
        cursor: pointer;
    }
    .ele-popup-group {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: rgba(0, 0, 0, 0.8);
        visibility: hidden;
        backface-visibility: hidden;
        transition: all 0.3s ease-in;
        &.active {
            opacity: 1;
            visibility: visible;
        }
        &:before {
            content: "";
            position: fixed;
            top: 16px;
            right: 16px;
            width: 32px;
            height: 32px;
            background: url("@/assets/image/btn_close.png") center no-repeat;
            cursor: pointer;
        }
    }
    .popup-lang-wrap {
        text-align: center;
        .icon-lang {
            width: 48px;
            height: 48px;
        }
        a {
            display: inline-block;
            line-height: 1;
            width: 68px;
            height: 68px;
            margin: 0 16px 16px 16px;
            padding: 10px;
            span {
                display: none;
            }
            &.popup-lang-current,
            &:hover {
                background: url("@/assets/image/not-use/lang_circle_a.png") no-repeat 0 50%;
            }
        }
    }
    .popup-group-inner {
        max-width: 656px;
        text-align: center;
        margin: 160px auto 0;
        // margin: ($header-height + 50px) auto 0;
        p {
            color: #fff;
            font-size: 1.2rem;
            padding: 16px 0 3rem;
            &:after {
                display: block;
                width: 2.5rem;
                height: 1px;
                content: "";
                background-color: #fff;
                margin: 1em auto 0;
            }
        }
    }
}
</style>
