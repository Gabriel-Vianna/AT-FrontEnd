<template>
  <router-link to="/" class="router-link">
    <header class="showcase">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Sistema de Apoio ao Visitante</h1>
          </div>
        </div>
      </div>
    </header>
  </router-link>
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

h1 {
  color: #1993df;
  font-size: 20px;
}

.router-link {
  text-decoration: none;
}

.showcase {
  overflow: hidden;
  color: #fff;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 14vh;
  text-align: center;
  margin: auto;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}
</style>