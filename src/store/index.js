import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    POST_CATEGORY_LIST(state, payload) {
      state.categories = payload;
      // console.log('mutatins is done', state.categories);
    }
  },
  actions: {
    async POST_CATEGORY(context, data) {
      const response = await api.Product.postCategory(data);
      context.commit('POST_CATEGORY_LIST', response); // Рабоает
      return response;
    },
  },
  getters: {
    CATEGORY_STATE(state) {
      return state;
    },
  },
})