<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <!-- <v-icon>mdi-view-dashboard</v-icon> -->
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <v-text-field v-model="origem" label="Origem"></v-text-field>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <!-- <v-icon>mdi-cog</v-icon> -->
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <v-text-field v-model="destino" label="Destino"></v-text-field>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ evento }}</v-toolbar-title>
      </v-app-bar>

      <!-- <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col class="shrink">
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn :href="source" icon large target="_blank" v-on="on">
                    <v-icon large>mdi-code-tags</v-icon>
                  </v-btn>
                  <div id="map"></div>
                </template>
                <span>Source</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
      </v-main>-->
      <google-map />
    </v-app>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";

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
  components: { GoogleMap }
};
</script>
