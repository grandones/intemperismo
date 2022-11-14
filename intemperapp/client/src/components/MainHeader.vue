<template>
  <header :class="{change_color: scrollPosition > 50}" class="sticky-top">
    <nav class="nav">
      <router-link class="me-3" to="/intemperhome">Go Home, you are drunk</router-link> |
      <router-link class="me-3 ms-3" to="/about">About the biznatchos</router-link> |
      <router-link class="me-3 ms-3" to="/multimidia">Multimídia 145</router-link> |
      <router-link class="me-3 ms-3" to="/sensual">Contato sensual</router-link> |
      <a class="ms-3" href="https://www.chileneumaticos.cl/" target="_blank" rel="noopener noreferrer">Promoção de pneus</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style scoped>
nav {
  justify-content: center;
}
.nav a {
  font-weight: bold;
  color: #eed5b5;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
header {
  width: 90%;
  background-color: var(--background-black-60);
  padding: 1rem 30px 0.8rem;
  transition: background-color 0.2s ease;
}
.change_color {
  background-color: var(--background-black);
  transition: background-color 0.6s ease;
}
.sticky-top {
  transition: background-color 0.6s ease;
}
</style>
