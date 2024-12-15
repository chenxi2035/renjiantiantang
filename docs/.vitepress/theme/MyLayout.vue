<!--.vitepress/theme/MyLayout.vue-->
<template>
    <Layout>
        <template #home-hero-info-before>
            <div class="biao-yu">
                全世界人民联合起来
            </div>
        </template>
        <template #layout-bottom>
            <div class="bottom-info">
                <div class="vitepress">
                    阅读创造们的讯息，请自行下载：<a href="https://www.ilanzou.com/s/6YNp11M" style="color: #1764ff;">蓝奏云</a>，<a href="https://drive.google.com/drive/folders/1k9wFKt1ins9GeHTnkwT_rahPrpOZKtkA?usp=sharing" style="color: #1764ff;">Google Drive</a>
                </div>
                <div class="vitepress">
                    本文档使用 <a href="https://vitepress.dev/zh/" style="color: #1764ff;">VitePress</a> 生成
                </div>
                <div class="author">制作——晨曦</div>
                <div class="tip" v-if="showTip" style="margin-top: 10px;">
                    该页面有缩进问题，可访问此站：<a href="https://chenxi2035.great-site.net" style="color: #1764ff;">共建人间天堂</a>
                </div>
                <div class="extra" v-html="extra" v-if="extra"></div>
            </div>
        </template>
    </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted,ref,reactive } from 'vue'
import { useData } from 'vitepress'
import { notFoundTitle } from '../../page/pages';

const { page } = useData()
const { Layout } = DefaultTheme

const extra = ref()
const showTip = ref(false)
onMounted(() => {
    let currentUrl = window.location.href;
    if(!currentUrl.startsWith("http")){
        currentUrl = window.fullUrl;
    }
    console.log(currentUrl);
    console.log(typeof(currentUrl))
    showTip.value = currentUrl.includes("git") || currentUrl.includes("vercel");
    // showTip.value = showTip.value || currentUrl.includes("localhost");
})
let pageData = page.value;
console.log(pageData)
if(pageData.isNotFound){
    pageData.title = notFoundTitle
}

</script>

<style lang="less">
.biao-yu {
    color: #222222;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    text-align: center;
    margin-bottom: 10px;

    @media (min-width: 640px) {
        font-size: 30px;
        line-height: 40px;
    }

    @media (min-width: 960px) {
        font-size: 40px;
        line-height: 50px;
    }
}

.bottom-info{
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
}
</style>