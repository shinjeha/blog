const c1 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\nct\\Documents\\git\\blog\\node_modules\\gridsome\\app\\pages\\404.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\nct\\Documents\\git\\blog\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\nct\\Documents\\git\\blog\\src\\pages\\Index.vue")

export default [
  {
    name: "404",
    path: "/404/",
    component: c1
  },
  {
    path: "/:title/",
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
    component: c1
  }
]
