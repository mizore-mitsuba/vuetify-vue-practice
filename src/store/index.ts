//import { createApp } from 'vue';
import { createStore } from 'vuex';

// Components
//import App from '../App.vue';

//const app = createApp(App);
const store = createStore({
  state() {
    return {
      isLogin: false,
      userId: '',
    };
  },
  mutations: {
    auth(state, user) {
      state.isLogin = true;
      state.userId = user;
    },
  },
  actions: {
    fetch(context, user) {
      context.commit('auth', user);
    },
  },
  modules: {},
});

export default store