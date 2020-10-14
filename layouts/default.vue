<template>
  <div class="w-full h-full">
    <Navbar />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Roboto', sans-serif;
  background: url("../static/images/background.png");
}

body, html, #__nuxt, #__layout {
  @apply w-full h-full
}
</style>
