const c1 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\templates\\Post.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\cocad\\Documents\\git\\blog\\src\\pages\\Index.vue")

export default [
  {
    path: "/:category/:title/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
