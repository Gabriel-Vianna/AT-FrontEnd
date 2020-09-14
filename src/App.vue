<template>
  <v-app>
    <Cabecalho />
    <router-view></router-view>
    <Rodape />
  </v-app>
</template>

<script>
import Cabecalho from "./components/Cabecalho.vue";
import Rodape from "./components/Rodape.vue";

export default {
  name: "App",

  components: {
    Cabecalho,
    Rodape
  }
};
</script>
