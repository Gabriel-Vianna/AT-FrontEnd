<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <v-text-field v-model="origem" label="Origem"></v-text-field>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <v-text-field v-model="destino" label="Destino"></v-text-field>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Account", icon: "account_box" },
        { title: "Admin", icon: "gavel" }
      ]
    };
  },
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
  }
};
</script>