import { defineConfig } from 'vitepress'
import { notFoundTitle, pages,pagesSrc,siteBase } from "../page/pages"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "共建人间天堂",
  description: "世界人民大团结，共建人间天堂",
  base: siteBase,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  appearance:false,

  async transformHtml(code, id, context) {
    if(id.includes('404')){
      console.log("-----------404page changed-------------------")
      return code.replace("404",notFoundTitle)
    }
    
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:{ src: '/logo.png'},
    aside:false,
    outline:false,
    returnToTopLabel:"回到顶部",
    sidebarMenuLabel:"目录",
    nav: [
      { text: '主页', link: '/' },
      // { text: '开始阅读', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '共建人间天堂',
        collapsed: false,
        items: pages
      },
      // {
      //   text: '共建人间天堂 (直链)',
      //   collapsed: true,
      //   items: pagesSrc
      // }
    ],

    docFooter:{
      prev:"上一页",
      next:"下一页"
    },

    notFound:{
      title:"一朝悟道见真我，昔日枷锁皆云烟",
      quote:"本来无一物，何处惹尘埃？万物之始，大道至简，衍化至繁。吾生也有涯，而知也无涯。以有涯随无涯，殆已。千岩万转路不定，迷花倚石忽已暝。山重水复疑无路，柳暗花明又一村。世间行乐亦如此，古来万事东流水。回首向来萧瑟处，归去，也无风雨也无晴。",
      linkLabel:"本源",
      linkText:"归去来兮",
      code:"大道本常在"
    },
    
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    // footer: {
    //   message: '本站使用 <a href="https://vitepress.dev/zh/">VitePress</a> 生成',
    //   copyright: `制作——晨曦`,
    // }
  }
})
