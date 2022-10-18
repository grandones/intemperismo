<template>
  <div id="main-wrapper">
    <MainHeader />
    <main>
      <router-view v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
  },
  beforeCreate() {
    const favicon = document.getElementById('favicon');
    const picNum = Math.floor((Math.random() * 5) + 1);
    favicon.href = `${window.location.origin}/${picNum}.jpg`;
  },
};
</script>

<style>
@import '~@/assets/styles/variables.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eed5b5;
}

body {
  background-image: url("~@/assets/intemperismo.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<style scoped>
main {
  padding: 2rem 30px 10vh;
  background-color: var(--background-black-40);
  width: 90%;
  min-height: 90vh;
}
#main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
