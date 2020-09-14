<template>
  <v-card class="mx-auto" height="400" width="256">
    <v-navigation-drawer class="accent-4" dark permanent>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
          </v-list-item-icon>

          <v-list-item-content>
            <v-text-field v-model="destino" label="Destino"></v-text-field>
            <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>-->
    </v-navigation-drawer>
  </v-card>
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