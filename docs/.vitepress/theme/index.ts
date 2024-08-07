// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MyLayout from './MyLayout.vue'
import Loading from './Loading.vue'
import Loading2 from './Loading2.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,// 使用注入插槽的包装组件覆盖 Layout
  enhanceApp({ app, router, siteData }) {
    app.component("Loading",Loading)
    app.component("Loading2",Loading2)
  }
} satisfies Theme
