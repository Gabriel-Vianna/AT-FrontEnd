<template>
  <header class="showcase">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Sistema de Apoio ao Visitante</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Cabecalho"
};
</script>

<style scoped>
* {
  font-family: "Open Sans", sans-serif;
}

.showcase {
  overflow: hidden;
  color: #fff;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 20vh;
  text-align: center;
  margin: auto;
  background: linear-gradient(
      to bottom,
      rgba(43, 25, 25, 0.7) 0%,
      rgba(37, 29, 29, 0.7) 100%
    ),
    url("../assets/gig_crowd.jpg");
  background-size: cover;
  background-position: center center;
}
</style>