import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    helpPage: {
      subRoute: "/help/date"
    }
  },
  mutations: {
    changeHelpRoute(state, newRoute) {
      state.helpPage.subRoute = newRoute;
    }
  },
  actions: {
    changeHelpRoute({ commit }, url) {
      commit("changeHelpRoute", url.newRoute);
    }
  }
});
