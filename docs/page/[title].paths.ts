import { pages } from "./pages"

export default {
  paths() {
    return pages
      .map((item) => {
        return { params: { title: item.text } }
      })
  }
}