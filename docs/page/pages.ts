export const siteBase = "/"
export const notFoundTitle = "迷时师度，悟了自度"
//触发vercel部署

class Page {
    text: string = ""
    link?: string = ""
    ext?: string = ".html"
    target?: string
    
    get src(){
        return `${siteBase}wenzhang/${this.text}${this.ext}`
    }
}

export const titles:string[]=[
    '1.当今的世界现状',
    '2.人间天堂——将美好憧憬变成现实',
    '3.生命起源的真相——智能设计',
    '4.宇宙的无限性与宏观生物学',
    '5.彻底的唯物论和科学观',
    '6.大同世界、共产主义与天道',
    '7.发展新时代的精神文明',
    '8.人间天堂的过渡之路',
    '9.人间天堂中社会生活的畅想',
    '10.迎接创造者们',
]

export const pages: Page[] = titles.map<Page>((title)=>{
    let page = new Page()
    page.text = title
    page.link =  `/page/${title}`
    return page
})


export const pagesSrc: Page[] = titles.map<Page>((title)=>{
    let page = new Page()
    page.text = title
    page.link =  `/wenzhang/${title}${page.ext}`
    page.target = "_blank"
    return page
})

export function findPageSrc(title: string): string {
    return pages.find(page => {
       return page.text == title
    })?.src || ''
}