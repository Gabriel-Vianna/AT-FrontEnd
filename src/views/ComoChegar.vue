<template>
  <div>
    <div class="principal">
      <h1>{{nome}}</h1>
      <div class="image" v-bind:style="{ backgroundImage: 'url(' + src + ')' }"></div>
      <div class="content">
        <div class="div-section">
          <section>
            <div class="section-item">
              <h2>Sobre</h2>
              <p>{{descricao}}</p>
            </div>
            <div class="section-item">
              <h2>Quando</h2>
              <p>Sed ut perspiciatis unde</p>
              <p>Sed ut perspiciatis unde</p>
              <p>Sed ut perspiciatis unde</p>
            </div>
            <div class="section-item">
              <h2>Ingressos</h2>
              <p>Sed ut perspiciatis unde</p>
              <p>Sed ut perspiciatis unde</p>
              <p>Sed ut perspiciatis unde</p>
            </div>
          </section>
          <section>
            <h2>Local</h2>
            <!-- <img src="../assets/rectangle.png" alt /> -->
            <div>
              <google-map />
            </div>
          </section>
        </div>
        <h3>Onde comer:</h3>
        <div class="main">
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">draco dormiens nunquam titillandus</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=5" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p
                    class="card_text"
                  >Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=11" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">draco dormiens nunquam titillandus</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=14" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">draco dormiens nunquam titillandus</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=17" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">draco dormiens nunquam titillandus</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=2" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">draco dormiens nunquam titillandus</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";

export default {
  computed: {
    nome() {
      return this.$store.state.evento.nome;
    },
    src() {
      return this.$store.state.evento.src;
    },
    lugar() {
      return this.$store.state.evento.lugar;
    },
    descricao() {
      return this.$store.state.evento.descricao;
    }
  },
  components: {
    GoogleMap
  }
};
</script>

<style scoped>
.principal {
  margin: 80px auto;
}

.principal h1 {
  margin: 0 6% 20px;
}
.image {
  height: 45vh;
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
}

.section-item {
  margin-bottom: 30px;
}

h1,
h2,
h3 {
  font-family: "Lato", sans-serif;
}
.content {
  margin: 6%;
  text-align: left;
  font-family: "Quicksand", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.section-item p {
  margin-bottom: 5px;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
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

p {
  color: #828282;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 25%;
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
  background: #ffffff;
}

.card_title {
  color: #000000;
  font-family: "Lato", sans-serif;
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
  margin-bottom: 0.75rem;
  font-weight: 400;
}

.div-section {
  margin-bottom: 60px;
}

h1 {
  text-align: center;
}

@media (min-width: 56rem) {
  .div-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
}
</style>