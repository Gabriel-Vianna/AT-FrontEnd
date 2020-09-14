import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    origem: "",
    destino: "",
    evento: ""
  },
  getters: {
    getOrigem(state) {
      return state.origem;
    },
    getDestino(state) {
      return state.destino;
    },
    getEvento(state){
      return state.evento;
    }
  },
  mutations: {
    SET_ORIGEM(state, payload) {
      state.origem = payload;
    },
    SET_DESTINO(state, payload) {
      state.destino = payload;
    },
    SET_EVENTO(state, payload) {
      state.evento = payload;
    }
  },
  actions: {
    setOrigem(context, payload) {
      context.commit("SET_ORIGEM", payload);
    },
    setDestino(context, payload) {
      context.commit("SET_DESTINO", payload);
    },
    setEvento(context, payload) {
      context.commit("SET_EVENTO", payload);
    }
  },
  modules: {
  }
})