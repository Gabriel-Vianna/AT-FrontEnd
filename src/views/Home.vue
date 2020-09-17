<template>
  <div class="main">
    <ul class="cards">
      <li v-for="card in cards" :key="card.title" class="cards_item">
        <div class="card">
          <div class="card_image">
            <img :src="card.src" />
          </div>
          <div class="card_content">
            <h2 class="card_title">{{card.title}}</h2>
            <p class="card_text">{{card.description}}</p>
            <button class="btn card_btn">Ver evento</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import router from "../router/";

export default {
  name: "Home",
  data() {
    return {
      cards: [
        {
          title: "Final Campeonato Carioca",
          src: "https://i.ytimg.com/vi/b4eHJqt-PNs/maxresdefault.jpg",
          flex: 6,
          place: "Estadio Maracanã",
          description: "Fla X Flu"
        },
        {
          title: "Apresentação Orquestra Sinfônica Brasileira",
          src:
            "https://www.hojeemdia.com.br/polopoly_fs/1.413655!/image/image.jpg_gen/derivatives/landscape_653/image.jpg",
          flex: 6,
          place: "Teatro Municipal RJ",
          description: "Apresentação inédita"
        },
        {
          title: "Rock in Rio",
          src:
            "https://s2.glbimg.com/Syw2x49Z10vsyVxu7_Rb6XGQvtI=/0x0:8265x4921/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/T/M/u5TbvYSCWAh2Q6URAzMA/02156-rockinrio-2019-003.jpg",
          flex: 6,
          place: "Parque Olímpico RJ",
          description: "Uoooo Uoooo Uooo Rock in Rio"
        },
        {
          title: "Campeonato de Surf",
          src:
            "https://i1.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2017/01/saiba-mais-sobre-as-principais-competicoes-de-surf-do-mundo.jpeg?fit=1000%2C667&ssl=1",
          flex: 6,
          place: "Praia da Barra RJ",
          description: "Gabriel Medina"
        },
        {
          title: "Campeonato de Surf 2",
          src:
            "https://i1.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2017/01/saiba-mais-sobre-as-principais-competicoes-de-surf-do-mundo.jpeg?fit=1000%2C667&ssl=1",
          flex: 6,
          place: "Praia da Barra RJ",
          description: "Gabriel Medina"
        },
        {
          title: "Campeonato de Surf 3",
          src:
            "https://i1.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2017/01/saiba-mais-sobre-as-principais-competicoes-de-surf-do-mundo.jpeg?fit=1000%2C667&ssl=1",
          flex: 6,
          place: "Praia da Barra RJ",
          description: "Maya Gabeira"
        }
      ]
    };
  },
  components: {},
  computed: {
    ...mapMutations[("SET_DESTINO", "SET_ORIGEM")]
  },
  methods: {
    buscarLocal(local, titulo) {
      local.toString();
      titulo.toString();
      this.$store.commit("SET_DESTINO", local);
      this.$store.commit("SET_EVENTO", titulo);
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