<template>
  <div class="main">
    <ul class="cards">
      <li v-for="card in cards" :key="card.titulo" class="cards_item">
        <div class="card">
          <div class="card_image" v-bind:style="{ backgroundImage: 'url(' + card.src + ')' }">
            <img :src="card.src" />
          </div>
          <div class="card_content">
            <h2 class="card_title">{{card.titulo}}</h2>
            <p class="card_text">{{card.descricao | formatDescription}}</p>
            <button
              class="btn card_btn"
              @click="buscarLocal(card.titulo, card.src, card.lugar, card.descricao, card.lat, card.lng)"
            >Ver evento</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import router from "../router/";

const events = require("../eventos");

export default {
  name: "Home",
  data() {
    return {
      cards: events
    };
  },
  components: {},
  computed: {
    ...mapMutations[("SET_DESTINO", "SET_EVENTO")]
  },
  methods: {
    buscarLocal(titulo, src, lugar, descricao, lat, lng) {
      lugar.toString();
      titulo.toString();
      this.$store.commit("SET_DESTINO", lugar);
      this.$store.commit("SET_NOME", titulo);
      this.$store.commit("SET_SRC", src);
      this.$store.commit("SET_LUGAR", lugar);
      this.$store.commit("SET_DESCRICAO", descricao);
      this.$store.commit("SET_LAT", lat);
      this.$store.commit("SET_LNG", lng);
      router.push({ path: "como-chegar" });
    }
  }
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.card_image {
  overflow: hidden;
  background-size: cover;
  background-position: center;
  height: 55%;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main {
  max-width: 1200px;
  margin: 80px auto;
}

h1 {
  font-size: 24px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

h2 {
  font-family: "Open Sans", sans-serif;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(to bottom left, #df3650 40%, #ff0553 100%);
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
}

.card_title {
  color: #000000;
  font-family: "Open Sans", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0 0 10px 0;
}

.card_text {
  color: #828282;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>