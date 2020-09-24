import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    origem: "",
    destino: "",
    lat: "",
    lng: "",
    // evento: {
    //   nome: "",
    //   src: "",
    //   lugar: "",
    //   descricao: ""
    // },
    eventoAtual: {},
    eventos: []
  },
  getters: {
    getOrigem(state) {
      return state.origem;
    },
    getDestino(state) {
      return state.destino;
    },
    getEvento(state) {
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
    // SET_NOME(state, payload) {
    //   state.evento.nome = payload;
    // },
    // SET_SRC(state, payload) {
    //   state.evento.src = payload;
    // },
    // SET_LUGAR(state, payload) {
    //   state.evento.lugar = payload;
    // },
    // SET_DESCRICAO(state, payload) {
    //   state.evento.descricao = payload;
    // },
    SET_LAT(state, payload) {
      state.lat = payload;
    },
    SET_LNG(state, payload) {
      state.lng = payload;
    },
    SET_EVENTOS(state, payload) {
      state.eventos = payload;
    },
    SET_EVENTO(state, id) {
      for (let evento of state.eventos) {
        if (evento.id === id) {
          state.eventoAtual = evento
        }
      }
    }
  },
  actions: {
    setEvento(context, payload) {
      context.commit("SET_EVENTO", payload);
    },
    setEventos(context, payload) {
      context.commit("SET_EVENTOS", payload);
    },
    setOrigem(context, payload) {
      context.commit("SET_ORIGEM", payload);
    },
    setDestino(context, payload) {
      context.commit("SET_DESTINO", payload);
    },
    setLat(context, payload) {
      context.commit("SET_LAT", payload);
    },
    setLng(context, payload) {
      context.commit("SET_LNG", payload);
    }
  },
  modules: {
  }
})