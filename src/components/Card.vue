<template>
  <div>
    <div class="card">
      <div class="card_image">
        <slot name="imagem"></slot>
      </div>
      <div class="card_content">
        <h2 class="card_title">
          <slot name="titulo"></slot>
        </h2>
        <p class="card_text">
          <slot name="texto"></slot>
        </p>
        <slot name="botao"></slot>
      </div>
    </div>
</template>
<script>
export default {
  name: "Card"
}
</script>