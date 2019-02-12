import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/layouts/layout-one",
      name: "layout-one",
      component: () => import("./views/LayoutOne.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/layouts/layout-two",
      name: "layout-two",
      component: () => import("./views/LayoutTwo.vue")
    },
    {
      path: "/layouts/layout-three",
      name: "layout-three",
      component: () => import("./views/LayoutThree.vue")
    },
    {
      path: "/layouts/layout-four",
      name: "layout-four",
      component: () => import("./views/LayoutFour.vue")
    },
    {
      path: "/help",
      name: "help",
      component: () => import("./views/Help.vue"),
      children: [
        {
          path: "date",
          name: "date",
          components: {
            helper: () => import("./components/DateDisplay.vue")
          }
        },
        {
          path: "dumb",
          name: "dumb",
          components: {
            default: () => import("./views/Help.vue"),
            helper: () => import("./views/Dumb.vue")
          }
        }
      ]
    }
  ]
});
