<template>
  <div>
    <div>
      <!-- <h2>Search and add a pin</h2> -->
      <label>
        <h4>{{ nomeEvento }}</h4>
        <!-- <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button @click="addMarker">Add</button> -->
      </label>
      <!-- <br /> -->
    </div>
    <!-- <br /> -->
    <gmap-map :center="center" :zoom="15" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  computed: {
    lat() {
      return this.$store.state.evento.lat;
    },
    lng() {
      return this.$store.state.evento.lng;
    },
    nomeEvento(){
      return this.$store.state.evento.lugar;
    }
  },

  mounted() {
    // this.geolocate();
    this.addMarker();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
      console.log(JSON.parse(JSON.stringify(this.lat)));
    },
    addMarker() {
      // if (this.currentPlace) {
        // lat: -22.9121089, lng: -43.2301558
        const marker = {
          lat: this.lat,
          lng: this.lng
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      // }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>