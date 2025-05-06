<template>
    <ul class="header-links-wrap">
        <li v-for="link in links" :key="link.url">
            <div class="icon-wrap">
                <i></i>
            </div>
            <a :href="link.url">
                {{ link.text }}
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
interface HeaderLink {
    text: string;
    url: string;
}

const links: HeaderLink[] = [
    { text: "加入代理", url: "javascript:void(0)" },
    { text: "在线客服", url: "javascript:void(0)" },
    { text: "帮助中心", url: "javascript:void(0)" },
    { text: "备用地址", url: "javascript:void(0)" },
];
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *; // 使用 @ 別名
.header-links-wrap {
    float: left;
    display: block;
    font-size: 13px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        position: relative;
        text-align: center;
        float: left;
        display: block;
        margin: 0 5px;
        cursor: pointer;
        &:hover {
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
        a {
            display: block;
            width: 70px;
            height: 50px;
            overflow: hidden;
            line-height: 22px;
            color: #737580;
            margin-top: 50px;
        }
    }
    li {
        @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
                .icon-wrap {
                    i {
                        background: url("@/assets/image/header_btn_links0#{$i}.png") no-repeat 0 0;
                    }
                }
                &:hover {
                    .icon-wrap {
                        i {
                            background: url("@/assets/image/header_btn_links0#{$i}.png") no-repeat 0 -22px;
                        }
                    }
                }
            }
        }
    }
}
</style>
