<template>
    <!-- 首頁、已登入 -->
    <div v-if="isFirstLoginWrap" class="first-login-wrap">
        <div class="login-wrap">
            <p><i></i><span>会员资料</span></p>
            <div id="meminfo-wrap" class="meminfo-wrap">
                <div class="mem-info clearfix">
                    <div class="ele-accinfo ele-acc-name">
                        <span>账号：</span>
                        <strong>{{ memAccount }}</strong>
                    </div>
                    <div class="ele-acc-unit">
                        <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
                            <span>BBIN余额：</span>
                            <strong>{{ memTotal }}</strong>
                        </div>
                        <div id="js-ele-obalance-wrap" class="ele-obalance-wrap" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                            <div class="ele-accinfo ele-other-balance">
                                <i ref="triggerIcon" class="fa fa-plus-square"></i>
                            </div>
                        </div>
                        <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap" :class="{ show: shouldShowDropdown }" @mouseenter="isDropdownHovered = true" @mouseleave="isDropdownHovered = false">
                            <div class="ele-obalance-item">
                                <div class="ele-obalance" v-for="membalance in membalances">
                                    <span>{{ membalance.name }}</span>
                                    <strong>{{ membalance.balance }}</strong>
                                </div>
                            </div>
                            <div class="ele-balance-tool">
                                <a href="javascript:void(0)">额度转换</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="SU-Menual clearfix">
                    <ul class="login-Menual">
                        <li><a href="javascript:void(0)">会员中心</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">线上存款</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">线上取款</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">一键归户</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">未读讯息(1)</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)" @click="handleLogout">登出</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- 首頁、未登入 -->
    <div v-else-if="isFirstWrap" class="first-login-wrap">
        <div class="login-wrap">
            <p><i></i><span>会员登入</span></p>
            <form id="LoginForm">
                <p class="login-unit login-unit-user">
                    <!-- <label name="username" for="username" class="login-placeholder">账号</label> -->
                    <input v-model="username" name="username" type="text" class="login-input" placeholder="账号" />
                    <span id="js-acc-unicode" class="acc-unicode">@bin</span>
                </p>
                <p class="login-unit login-unit-pwd">
                    <!-- <label name="passwd" for="passwd" class="login-placeholder">密码</label> -->
                    <input v-model="password" name="passwd" type="password" class="login-input" placeholder="密码" />
                    <span class="login-pwd-icon"></span>
                </p>
            </form>
            <div class="login-btn-wrap">
                <a class="login-join" href="javascript:void(0)">免费加入</a>
                <a class="login-forgetpw" href="javascript:void(0)">忘记密码</a>
                <a class="login-submit" @click.prevent="handleLogin" title="登入">登入</a>
            </div>
        </div>
    </div>

    <!-- 非首頁、已登入 -->
    <div v-else-if="isLoggedInWrap" class="page-login-wrap">
        <div class="login-wrap clearfix">
            <!-- meminfo -->
            <div id="meminfo-wrap" class="meminfo-wrap">
                <div class="mem-info clearfix">
                    <div class="ele-accinfo ele-acc-name">
                        <span>账号：</span>
                        <strong>{{ memAccount }}</strong>
                    </div>
                    <div class="ele-acc-unit">
                        <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
                            <span>BBIN余额：</span>
                            <strong>{{ memTotal }}</strong>
                        </div>
                        <div id="js-ele-obalance-wrap" class="ele-obalance-wrap" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                            <div class="ele-accinfo ele-other-balance">
                                <i ref="triggerIcon" class="fa fa-plus-square"></i>
                            </div>
                        </div>
                        <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap" :class="{ show: shouldShowDropdown }" @mouseenter="isDropdownHovered = true" @mouseleave="isDropdownHovered = false">
                            <div class="ele-obalance-item">
                                <div class="ele-obalance" v-for="membalance in membalances">
                                    <span>{{ membalance.name }}</span>
                                    <strong>{{ membalance.balance }}</strong>
                                </div>
                            </div>
                            <div class="ele-balance-tool">
                                <a href="javascript:void(0)">额度转换</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="SU-Menual clearfix">
                    <ul class="login-Menual">
                        <li><a href="javascript:void(0)">下注记录</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">会员中心</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">线上存款</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">线上取款</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">额度转换</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)">规则说明</a></li>
                        <li>|</li>
                        <li><router-link to="/">登出</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- 非首頁、未登入 -->
    <div v-else-if="isOtherLoginWrap" class="page-login-wrap">
        <div class="login-wrap clearfix">
            <form id="LoginForm" class="clearfix">
                <p class="login-unit login-unit-user">
                    <!-- <label name="username" for="username" class="login-placeholder">账号</label> -->
                    <input name="username" type="text" class="login-input" placeholder="账号" />
                    <span id="js-acc-unicode" class="acc-unicode">@bin</span>
                </p>
                <p class="login-unit login-unit-pwd">
                    <!-- <label name="passwd" for="passwd" class="login-placeholder">密码</label> -->
                    <input name="passwd" type="password" class="login-input" placeholder="密码" />
                    <span class="login-pwd-icon"></span>
                </p>
            </form>
            <div class="login-btn-wrap">
                <a class="login-submit" href="javascript:void(0)" title="登入">登入</a>
                <a class="login-forgetpw" href="javascript:void(0)" title="忘记密码">忘记密码</a>
                <a class="login-join" href="javascript:void(0)" title="免费加入">免费加入</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, computed, onMounted, watch, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import type { SharedState } from "../types/sharedState";
import "@fortawesome/fontawesome-free/css/all.css";

const route = useRoute();
const sharedState = inject("sharedState") as { value: SharedState };
const updateSharedState = inject("updateSharedState") as (newState: Partial<SharedState>) => void;

const username = ref("");
const password = ref("");
const memAccount = ref("admin");
const memTotal = ref("168.08");
const membalances = ref([
    {
        name: "AG视讯余额",
        balance: "---",
    },
    {
        name: "欧博视讯余额",
        balance: "68.00",
    },
    {
        name: "BG视讯余额",
        balance: "---",
    },
]);

const isHovered = ref(false);
const isDropdownHovered = ref(false);
const triggerIcon = ref<HTMLElement | null>(null);

// 使用 URL 路徑來判斷要顯示哪種區塊
const isHomePage = computed(() => {
    return route.path === "/";
});

// 登入處理函數
const handleLogin = () => {
    updateSharedState({ isLoggedIn: true });

    // 如果是首頁，添加 is-login class
    if (sharedState.value.isHomePage) {
        document.documentElement.classList.add("is-login");
    }
};

// 登出處理函數
const handleLogout = () => {
    updateSharedState({ isLoggedIn: false });

    // 如果是首頁，移除 is-login class
    if (sharedState.value.isHomePage) {
        document.documentElement.classList.remove("is-login");
    }
};

// 使用計算屬性來處理條件
const isFirstLoginWrap = computed(() => isHomePage.value && sharedState.value.isLoggedIn);
const isFirstWrap = computed(() => isHomePage.value && !sharedState.value.isLoggedIn);
const isLoggedInWrap = computed(() => !isHomePage.value && sharedState.value.isLoggedIn);
const isOtherLoginWrap = computed(() => !isHomePage.value && !sharedState.value.isLoggedIn);

const setDropdownPosition = () => {
    const iconEl = triggerIcon.value;
    const dropdownEl = document.getElementById('js-ele-obalance-item-wrap');
    if (!iconEl || !dropdownEl) return;

    // 獲取圖標的位置
    const iconRect = iconEl.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const dropdownWidth = dropdownEl.offsetWidth;

    // 計算位置
    const distanceToRight = windowWidth - iconRect.right;
    const distanceToLeft = iconRect.left;

    // 設置下拉框位置
    dropdownEl.style.position = 'fixed';
    dropdownEl.style.top = `${iconRect.bottom}px`;

    if (distanceToRight > distanceToLeft) {
        dropdownEl.style.left = `${iconRect.left}px`;
        dropdownEl.style.right = 'auto';
    } else {
        dropdownEl.style.left = `${iconRect.right - dropdownWidth}px`;
        dropdownEl.style.right = 'auto';
    }
};

// 計算是否應該顯示下拉框
const shouldShowDropdown = computed(() => {
    return isHovered.value || isDropdownHovered.value;
});

const updatePosition = () => {
    if (shouldShowDropdown.value) {
        requestAnimationFrame(setDropdownPosition);
    }
};

// 監聽顯示狀態
watch(shouldShowDropdown, (newValue) => {
    if (newValue) {
        updatePosition();
    }
});

onMounted(() => {
    // 監聽滾動和調整大小事件
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updatePosition);
    window.removeEventListener('resize', updatePosition);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/base/variables" as *; // 使用 @ 別名
@use "@/assets/scss/base/mixins" as *;
// meminfo i 下拉選單設定
@include meminfo(
    $mem-color: #fff,
    // 1 文字顏色
    $mem-bg: #d9ac8d,
    // 2 背景顏色
    $mem-tool-bg: #bf8d69,
    // 3 餘額轉換背景顏色
    $mem-tool-color: #4c4c4c,
    // 4 餘額轉換按鈕文字顏色
    $mem-tool-btn-bg: #fff,
    // 5 餘額轉換按鈕背景顏色
    $mem-line-color: #0030ff // 6 餘額轉換上線條顏色
) {
}

.login-wrap,
.meminfo-wrap {
    // padding: 10px;
    a {
        @include trans(color);
        &:hover {
            // text-decoration: underline;
            @include trans(color);
        }
    }
}

// 首頁 登入
.first-login-wrap {
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1320px;
    .isfixed &{
        margin-top: 110px;
    }
    .login-wrap {
        position: absolute;
        z-index: 9;
        top: 230px; //360
        right: 0;
        width: 390px;
        min-height: 300px;
        border: 1px solid #fff;
        background: url("@/assets/image/login_bg01.png") repeat-x left top rgba(241, 243, 252, 0.9);
        // background: url("@/assets/image/login_bg01.png") repeat-x left top;
        box-shadow: rgba(112, 122, 140, 0.2) 0px 0px 10px;

        .is-login & {
            min-height: 225px;
            padding-bottom: 10px;
        }

        > p {
            position: relative;
            width: 100%;
            text-align: center;
            font-size: 24px;
            color: #292b33;
            line-height: 30px;
            padding: 20px 0 10px;

            i {
                position: absolute;
                left: 0;
                top: -131px;
                display: block;
                width: 390px;
                height: 130px;
                background: url("@/assets/image/login_bg02.png") no-repeat center top;
            }
        }
    }
}

.page-login-wrap {
    // 內頁
    border-radius: 24px 24px 0 0;
    box-shadow: 0 0 10px 0 rgba(41, 43, 51, 0.3); //.2
    width: 1400px;
    background: url("@/assets/image/container_bg02_y.png") repeat-y center top;
    margin: 310px auto 0; //top:420
    .isfixed &{
        margin: 442px auto 0;
    }
    min-height: 108px;

    // 內頁
    .login-wrap {
        background: url("@/assets/image/container_bg03.png") no-repeat center top;
        padding: 38px 20px 30px;
        min-height: 118px; //108
        text-align: center;

        #LoginForm {
            vertical-align: middle;
            display: inline-block;
            // float: left;
        }
    }
}

.login-unit {
    position: relative;
    float: left;
    // 首頁
    .first & {
        float: none;
    }
}

// .login-placeholder {
//     position: absolute;
//     top: 0;
//     left: 20px;
//     line-height: 50px;
//     color: #000;
//     .first & {
//         line-height: 60px;
//     }
// }

.login-input {
    // 內頁
    display: block;
    width: 300px;
    height: 50px;
    background: url("@/assets/image/input.png") no-repeat left top; // 如果帳號、密碼、驗證碼背景不一樣，取名 input_bg01、input_bg02、input_bg03
    font-size: 16px;
    border: 0;
    margin: 0 5px;
    padding-left: 13px;
    box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.1); //.2
    border-radius: 10px;

    // 首頁
    .first & {
        background: none;
        width: 100%;
        height: 60px;
        border-radius: 0px;
        margin: 0;
        box-shadow: none;
        // border-bottom: 1px solid #fff;
        padding-left: 18px;
    }

    .login-unit-user & {
        padding-right: 52px;
    }
    .login-unit-pwd & {
        padding-right: 32px;
    }
}

.login-unit-pwd .login-input {
    border-top: 1px solid #fff;
}

.acc-unicode {
    position: absolute;
    right: 15px;
    top: 0;
    line-height: 50px;
    .first & {
        right: 20px;
        line-height: 60px;
    }
}
.login-pwd-icon {
    position: absolute;
    width: 17px;
    height: 12px;
    cursor: pointer;
    right: 15px;
    top: 50%;
    margin-top: -6px;
    background-position: left top;
    .first & {
        right: 20px;
    }

    //選擇密碼顯示眼睛顏色
    @if $login-pwd-icon==1 {
        background: url("@/assets/image/not-use/password_icon/black.png");
    } @else if $login-pwd-icon==2 {
        background: url("@/assets/image/not-use/password_icon/blue.png");
    } @else if $login-pwd-icon==3 {
        background: url("@/assets/image/not-use/password_icon/brown.png");
    } @else if $login-pwd-icon==4 {
        background: url("@/assets/image/not-use/password_icon/gold.png");
    } @else if $login-pwd-icon==5 {
        background: url("@/assets/image/not-use/password_icon/green.png");
    } @else if $login-pwd-icon==6 {
        background: url("@/assets/image/not-use/password_icon/grey_dark.png");
    } @else if $login-pwd-icon==7 {
        background: url("@/assets/image/not-use/password_icon/grey_light.png");
    } @else if $login-pwd-icon==8 {
        background: url("@/assets/image/not-use/password_icon/purple.png");
    } @else if $login-pwd-icon==9 {
        background: url("@/assets/image/not-use/password_icon/red.png");
    } @else if $login-pwd-icon==10 {
        background: url("@/assets/image/not-use/password_icon/white.png");
    } @else if $login-pwd-icon==11 {
        background: url("@/assets/image/not-use/password_icon/yellow.png");
    }
    &.is-show {
        background-position: left bottom;
    }
}

.login-btn-wrap {
    vertical-align: middle;
    display: inline-block;
    .first & {
        padding-top: 5px;
        text-align: right;
    }
}

.login-join {
    width: 140px;
    height: 50px;
    margin: 0 5px;
    padding-left: 26px;
    vertical-align: middle;
    display: inline-block;
    border-radius: 25px;
    box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.1);
    background: rgba( #f1f3fc, .5);
    line-height: 48px;
    border: 1px solid rgba( #f1f3fc, .7);
    background: url("@/assets/image/first_join_icon.png") no-repeat 24px 50%;
    &:hover {
        background: url("@/assets/image/first_join_icon.png") no-repeat 24px 50%,rgba( #f1f3fc, .8);
        border: 1px solid rgba( #f1f3fc, 1);
        color: #000;
    }
    .first & {
        background: url("@/assets/image/first_join_icon.png") no-repeat left center;
        color: #292b33;
        font-size: 16px;
        line-height: 20px;
        width: auto;
        height: auto;
        padding-left: 24px;
        box-shadow: none;
        margin: 0 20px 0 5px;
    }
}

.login-forgetpw {
    width: 140px;
    height: 50px;
    vertical-align: middle;
    padding-left: 26px;
    display: inline-block;
    border-radius: 25px;
    box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.1);
    background: rgba( #f1f3fc, .5);
    line-height: 48px;
    border: 1px solid rgba( #f1f3fc, .7);
    background: url("@/assets/image/first_forgetpw_icon.png") no-repeat 24px 50%;
    &:hover {
        background: url("@/assets/image/first_forgetpw_icon.png") no-repeat 24px 50%,rgba( #f1f3fc, .8);
        border: 1px solid rgba( #f1f3fc, 1);
        color: #000;
    }
    .first & {
        background: url("@/assets/image/first_forgetpw_icon.png") no-repeat left center;
        color: #292b33;
        font-size: 16px;
        line-height: 20px;
        width: auto;
        height: auto;
        padding-left: 24px;
        box-shadow: none;
        padding-right: 20px;
    }
}

.login-submit {
    font-size: 18px;
    vertical-align: middle;
    display: inline-block;
    margin: 0 10px 0 10px;
    width: 200px;
    height: 50px;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0,0,0,.25);
    color: #292b33;
    line-height: 50px;
    border-radius: 10px;
    box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.1);
    background: linear-gradient(to bottom, #fefefe 0%, #f0f2ff 33%, #f0f2ff 66%, #fefefe 100%);
    &:hover {
        transition: all .3s;
        background: linear-gradient(to bottom, #e9cab3 0%, #d3aa8f 100%);
        color: #fff;
        text-shadow: 0 2px 5px rgba(#bf8b68,1);
        text-decoration: none;
    }
    .first & {
        width: 388px;
        height: 70px;
        margin: 20px 0 0;
        border-radius: 0px;
        line-height: 70px;
    }
}

// 登入後
.meminfo-wrap {
    color: #292b33;
    font-size: 16px;
    width: 960px;
    margin: 0 auto;
    text-align: left;
    .first & {
        line-height: 22px;
    }
    .mem-info {
        width: 100%;
        .first & {
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            padding-bottom: 10px;
        }
    }
    .ele-acc-name,
    .ele-acc-unit {
        float: left;
    }
    .ele-acc-name {
        margin-right: 20px;
        .first & {
            width: 100%;
            margin-right: 0;
        }
    }
    .first & .ele-acc-unit {
        width: 100%;
    }
    .fa-plus-square,
    .ele-first-balance strong {
        color: #4560e5;
    }

    // 首頁登入後
    .first & {
        font-size: 13px;
        color: #292b33;
        width: auto;
        margin: 0 15px;
        background: #fff;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 5px 15px 0 rgba(64, 76, 128, 0.1);
    }
}

.ele-accinfo,
.ele-obalance-wrap {
    display: inline-block;
}

.login-Menual {
    .first & {
        padding-top: 10px;
    }
    li {
        margin-right: 4px;
        display: inline-block;
    }
    li a {
        color: #292b33;
    }
    li:last-child a {
        color: #4560e5;
    }
}

.login-input {
    &::placeholder {
        color: #000; // 未輸入時的顏色
        opacity: 1; // 完全不透明
        transition: all 0.3s ease; // 添加過渡效果，0.3秒
        padding-left: 2px;
    }

    &:focus::placeholder {
        color: rgba(0, 0, 0, 0.5); // 輸入時變半透明
        opacity: 0.5;
        transition: all 0.3s ease; // 添加過渡效果，0.3秒
    }
}

.ele-obalance-item-wrap {
    position: fixed;
    display: none;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1000;

    &.show {
        display: block;
        opacity: 1;
    }
}

.ele-obalance-wrap {
    margin-left: 5px;
    cursor: pointer;
}

.fa-plus-square {
    position: relative;
}
</style>
