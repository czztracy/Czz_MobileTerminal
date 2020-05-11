import router from "@/router";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  console.log(process.env.VUE_APP_BASE_API, "API");
  next();
  // const userInfo = sessionStorage.getItem("userInfo") || null;
  // if (!userInfo && to.meta.auth) {
  //   next("/login");
  // } else {
  //   next();
  // }
});
