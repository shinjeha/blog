export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\nct\\Documents\\git\\blog\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    path: "/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\nct\\Documents\\git\\blog\\src\\templates\\Post.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\nct\\Documents\\git\\blog\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\nct\\Documents\\git\\blog\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

