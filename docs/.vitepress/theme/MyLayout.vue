<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted,ref,reactive } from 'vue'
import { useData } from 'vitepress'
import { notFoundTitle } from '../../page/pages';

const { page } = useData()
const { Layout } = DefaultTheme

const extra = ref()
onMounted(() => {

})
let pageData = page.value;
console.log(pageData)
if(pageData.isNotFound){
    pageData.title = notFoundTitle
}

</script>

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
                    本文档使用 <a href="https://vitepress.dev/zh/" style="color: #1764ff;">VitePress</a> 生成
                </div>
                <div class="author">制作——晨曦</div>
                <div class="extra" v-html="extra" v-if="extra"></div>
            </div>
        </template>
    </Layout>
</template>

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
}
</style>