import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import HttpService from './services/HttpService';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.prototype.$appHttp = new HttpService();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
