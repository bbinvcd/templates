<template>
    <Teleport to="body">
        <div class="nav-dropdowns" :class="{ 'is-fixed': isFixed }">
            <div v-for="category in ['balls', 'lives', 'games', 'lotterys', 'cards']" :key="category" :id="`nav-${category}`" class="ele-drop-group" :class="{ active: activeDropdown === category || hoverCategory === category }" @mouseenter="hoverCategory = category" @mouseleave="hoverCategory = null">
                <div class="lsub-inner-wrap">
                    <a v-for="platform in getPlatforms(category)" :key="platform.pn_link" href="javascript:void(0)" :class="platform.pn_class">
                        <span v-if="platform.pn_logo" :style="logoImage(category, platform.pn_logo)"></span>
                        {{ platform.pn_name }}
                    </a>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, inject, computed } from "vue";
import type { NavData } from "../types/nav";
import type { SharedState } from "../types/sharedState";

const sharedState = inject("sharedState") as { value: SharedState };

const isFixed = computed(() => {
    return sharedState.value.isFixed;
});

const props = defineProps<{
    navData: NavData | null;
}>();

const activeDropdown = ref<string | null>(null);
const hoverCategory = ref<string | null>(null);

// 根據類別獲取對應平台數據
const getPlatforms = (category: string) => {
    return props.navData?.[category as keyof NavData] || [];
};

// 修改logo圖片路徑
const logoImage = (category: string, logo: string) => {
    if (category === "balls") {
        return "background-image:url(https://web.bbinpartner.com/images/subnav/ball/" + logo + ")";
    } else if (category === "lives") {
        return "background-image:url(https://web.bbinpartner.com/images/subnav/live/" + logo + ")";
    } else if (category === "games") {
        return "background-image:url(https://web.bbinpartner.com/images/subnav/game/" + logo + ")";
    } else if (category === "lotterys") {
        return "background-image:url(https://web.bbinpartner.com/images/subnav/lottery/" + logo + ")";
    } else if (category === "cards") {
        return "background-image:url(https://web.bbinpartner.com/images/subnav/card/" + logo + ")";
    }
};

// 導出方法供父組件調用
defineExpose({
    showDropdown: (category: string) => {
        activeDropdown.value = category;
    },
    hideDropdown: () => {
        activeDropdown.value = null;
    }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *;
@use "@/assets/scss/base/mixins" as *;
.nav-dropdowns {
    position: absolute;
    top: 100px; // 導航列高度  也就是導覽列要設定的位置
    left: 0;
    width: 100%;
    z-index: 3333333;
    &.is-fixed {
        position: fixed;
    }
    .ele-drop-group {
        display: none;
        width: 100%;

        &.active {
            display: block;
        }
    }
}
// 下拉子選單
@if $subnav-type == 1 {
    .ele-drop-group {
        width: 130px;
    }

    .lsub-inner-wrap {
        width: 100%;
        border-width: 1px;
        border-style: solid;
        border: 1px solid $subnav-border;
        box-shadow: rgba( 16, 16, 16, 0.3) 2px 3px 3px;
        a {
            display: block;
            height: 38px;
            line-height: 38px;
            font-size: 12px;
            @include text-truncate;
            padding: 0 10px 0 37px;
            &:hover {
                color: $subnav-hover;
            }
        }
        @if $subnav-kind == 1 {
            background: rgba( 0, 0, 0, 0.95);
            a {
                color: #FFF;
            }
        } @else if $subnav-kind == 2 {
            background: rgba( 85, 85, 85, 0.95);
            a {
                color: #FFF;
            }
        } @else if $subnav-kind == 3 {
            background: rgba( 255, 255, 255, 0.8);
            a {
                color: #000;
            }
        } @else if $subnav-kind == 4 {
            background: rgba( 255, 255, 255, 0.8);
            a {
                color: #000;
            }
        }
    }

    #nav-games {
        &.ele-drop-group {
            width: 448px;
        }
        .lsub-inner-wrap {
            @include clearfix;
            a {
                width: 25%;
                float: left;
            }
        }
    }
} @else if $subnav-type == 2 {
    .ele-drop-group {
        top: 100%;
        width: 100vw;
        z-index: 100;
        min-width: $subnav-width;
        box-shadow: rgba( 16, 16, 16, 0.3) 2px 3px 3px;
        padding: 30px 0;
        box-sizing: content-box;
        opacity: 0.95;
        @if $subnav-kind == 1 {
            background: rgba( 18, 18, 18, 0.95);
            a {
                color: #FFF;
            }
        } @else if $subnav-kind == 2 {
            background: rgba( 85, 85, 85, 0.95);
            a {
                color: #FFF;
            }
        } @else if $subnav-kind == 3 {
            background: rgba( 249, 249, 249, 0.95);
            a {
                color: #333;
            }
        } @else if $subnav-kind == 4 {
            background: rgba( 255, 255, 255, 0.95);
            a {
                color: #333;
            }
        }
        &#nav-mores {
            width: 130px !important;
            min-width: unset;
        }
    }

    .lsub-inner-wrap {
        @include clearfix;
        width: 1095px;
        min-height: 200px;
        margin: 0 auto;
        padding-left: 225px;
        background-repeat: no-repeat;
        background-position: 0 0;
        $ele-drop-nav: ball, live, game, card;
        @each $var in $ele-drop-nav {
            #nav-#{$var}s & {
                background-image: url("@/assets/image/not-use/lang/zh-cn/subnav_#{$var}_title.png");
            }
        }
        #nav-lotterys & {
            background-image: url("@/assets/image/not-use/lang/zh-cn/subnav_ltlottery_title.png");
        }
        #nav-mores & {
            width: 130px;
            min-height: auto;
            padding: 0;
            margin: 0;
        }
        a {
            span {
                display: block;
                height: 40px;
                background-repeat: no-repeat;
            }

            float: left;
            @if $subnav-width < 1065px {
                width: calc(100% / 6);
            } @else if $subnav-width < 1185px {
                width: calc(100% / 7);
            } @else if $subnav-width < 1305px {
                width: calc(100% / 8);
            } @else if $subnav-width < 1425px {
                width: calc(100% / 9);
            } @else {
                width: 120px;
            }
            padding-bottom: 25px;
            font-size: 14px;
            text-align: center;
            @include text-truncate;
            &:hover {
                color: $subnav-hover;
            }
            #nav-mores & {
                background: none;
                width: 130px;
                height: 38px;
                line-height: 38px;
                padding: 0 10px 0 37px;
                font-size: 12px;
                text-align: left;
                &:before {
                    display: none;
                }
            }
        }
    }
}
</style>
