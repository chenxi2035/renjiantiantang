---
layout: doc
---

<div style="width:100%;display:flex;align-items:center;flex-direction:column">
  <div v-if="!loaded" class="loading-info">
    <Loading2/>
  </div>
  <iframe id="outerPage" :src="pageLink" @load="iframeload" scrolling="auto" frameborder="0"   :style="frameStyle"></iframe>
</div>

<script setup>
import { useData } from 'vitepress'
import { ref, onMounted,reactive,watch } from 'vue'
import * as pages from './pages.ts'

const { site, theme, page, frontmatter,params } = useData()

const pageLink = ref(null)
const loaded = ref(false)
const frameStyle=reactive({
  opacity: 0,
  width:'100%',
  'min-width':'100%',
  'min-height':'200px',
})
console.log(params.value)
let title = params.value.title
let src = pages.findPageSrc(title)
console.log(`src=${src}`)
pageLink.value = src

function handleUrlClick(e){
  console.log(e)
  e.preventDefault()
  window.open(e.target.href,'_blank')
}

function handleAllInnerLinks(){
  const cIframe = document.getElementById("outerPage");
  let frameDoc = cIframe.contentWindow.document
  // console.log(frameDoc)
  let links =  Array.from(frameDoc.getElementsByTagName("a"))
  // console.log(links)
  links.forEach((link)=>{
    link.onclick = handleUrlClick
  })
}

watch(loaded,async(n,o)=>{
  console.log(`loaded=${loaded.value}`)
  frameStyle.opacity = 1
  handleAllInnerLinks()
})

onMounted(()=>{
  document.title=`${title}-共建人间天堂`
})

function iframeload() {
  setTimeout(() => {
        try {
          const cIframe = document.getElementById("outerPage");
          let aWindow = cIframe.contentWindow;
          let aWindowHeight =
            aWindow .document.documentElement.scrollHeight ||
            aWindow .document.body.scrollHeight;
      
          let doc = cIframe.contentDocument || cIframe.document;
          let cHeight = Math.max(
            doc.body.clientHeight,
            doc.documentElement.clientHeight
          );
          let sHeight = Math.max(
            doc.body. scrollHeight,
            doc.documentElement.scrollHeight
          );
          let lheight = Math.max(cHeight, sHeight);
          let finalHeight = Math.max(lheight, aWindowHeight );
          // this.iframeHeight = finalHeight + "px";
          let h = (finalHeight+50) + "px";//多加一点高度，免得出现纵向滚动条
          cIframe.height = h;
          console.log(`frame height=${h}`)
          loaded.value = true
        } catch (e) {
          //跨域获取不到
          console.log(e);
          throw new Error("自定义错误setIframeHeight Error");
        }
      }, 1500);
}
</script>

<style>

.loading-info {
  display:flex;
  width:100%;
  height:200px;
  align-items: center;
  justify-content: center;
  flex-direction:row
}


</style>
