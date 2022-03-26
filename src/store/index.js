import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async GET(context) {
      const response = await api.Product.get();
      console.log('get is work');
      context.commit('get', response); // Рабоает
      return response;
    },
  },
  getters: {
  }
})
