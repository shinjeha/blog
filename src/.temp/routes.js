const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-blog-page-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\templates\\BlogPage.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\templates\\Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-category-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\templates\\Category.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-tags-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\pages\\Tags.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-categories-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\pages\\Categories.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-archives-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\pages\\Archives.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\pages\\404.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/pages/:fileInfo__name/",
    component: c2
  },
  {
    path: "/post/:fileInfo__name/",
    component: c3
  },
  {
    path: "/category/:title/",
    component: c4
  },
  {
    path: "/tags/",
    component: c5
  },
  {
    path: "/categories/",
    component: c6
  },
  {
    path: "/archives/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
