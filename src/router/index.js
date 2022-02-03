import Vue from "vue";
import Router from "vue-router";
import main from "@/views/main";
import read from "@/views/read";
import create from "@/views/create";
import Edit from "@/views/Edit";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
    },
    {
      path: "/read/:id",
      name: "read",
      component: read,
    },
    {
      path: "/create",
      name: "create",
      component: create,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
    },
  ],
});
