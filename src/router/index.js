import Vue from "vue";
import Router from "vue-router";
import main from "@/page/main";
import read from "@/page/read";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: main
    },
    {
      path: "/read/:id",
      name: "read",
      component: read
    }
  ]
});
