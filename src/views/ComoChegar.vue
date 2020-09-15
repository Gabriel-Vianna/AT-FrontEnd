<template>
  <div>
    <MenuLateral />
    <v-main>
      <v-container>
        <google-map />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";
import MenuLateral from "../components/MenuLateral";

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    origem: {
      get() {
        return this.$store.state.origem;
      },
      set(value) {
        this.$store.commit("SET_ORIGEM", value);
      }
    },
    destino: {
      get() {
        return this.$store.state.destino;
      },
      set(value) {
        this.$store.commit("SET_DESTINO", value);
      }
    },
    evento: {
      get() {
        return "Informações sobre " + this.$store.state.evento;
      },
      set(value) {
        this.$store.commit("SET_EVENTO", value);
      }
    }
  },
  components: {
    GoogleMap,
    MenuLateral
  }
};
</script>
