<template>
  <header :class="{change_color: scrollPosition > 50}" class="sticky-top">
    <nav class="nav">
      <router-link to="/intemperhome">Go Home, you are drunk</router-link> |
      <router-link to="/about">About the biznatchos</router-link> |
      <a href="https://www.chileneumaticos.cl/" target="_blank" rel="noopener noreferrer">Neumáticos</a>
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
.nav a {
  font-weight: bold;
  color: #eed5b5;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
header {
  width: 90%;
  background-color: var(--background-black-40);
  padding: 1rem 30px 0.8rem;
  transition: background-color 0.2s ease;
}
.change_color {
  background-color: var(--background-black)
}
</style>
