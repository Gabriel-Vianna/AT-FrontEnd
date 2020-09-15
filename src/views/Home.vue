<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card @click="buscarLocal(card.place, card.title)">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
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
          place: "Estadio Maracanã"
        },
        {
          title: "Apresentação Orquestra Sinfônica Brasileira",
          src:
            "https://www.hojeemdia.com.br/polopoly_fs/1.413655!/image/image.jpg_gen/derivatives/landscape_653/image.jpg",
          flex: 6,
          place: "Teatro Municipal RJ"
        },
        {
          title: "Rock in Rio",
          src:
            "https://s2.glbimg.com/Syw2x49Z10vsyVxu7_Rb6XGQvtI=/0x0:8265x4921/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/T/M/u5TbvYSCWAh2Q6URAzMA/02156-rockinrio-2019-003.jpg",
          flex: 6,
          place: "Parque Olímpico RJ"
        },
        {
          title: "Campeonat de Surf",
          src:
            "https://i1.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2017/01/saiba-mais-sobre-as-principais-competicoes-de-surf-do-mundo.jpeg?fit=1000%2C667&ssl=1",
          flex: 6,
          place: "Praia da Barra RJ"
        },
        {
          title: "Campeonat de Surf",
          src:
            "https://i1.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2017/01/saiba-mais-sobre-as-principais-competicoes-de-surf-do-mundo.jpeg?fit=1000%2C667&ssl=1",
          flex: 6,
          place: "Praia da Barra RJ"
        },
        {
          title: "Campeonat de Surf",
          src:
            "https://i1.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2017/01/saiba-mais-sobre-as-principais-competicoes-de-surf-do-mundo.jpeg?fit=1000%2C667&ssl=1",
          flex: 6,
          place: "Praia da Barra RJ"
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
</style>