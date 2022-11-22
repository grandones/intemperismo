<template>
  <div id="about">
    <h1>This is the crew of the Intempirates, YARRR</h1>
    <Splide
      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      :options="thumbsOptions"
      ref="thumbs"
      class="thumbnail"
    >
      <SplideSlide>
        <img src="@/assets/crew/fern/fern.jpg" alt="FERNANDELAS">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/mangusto/marcelo.jpg" alt="MÆNGÜST">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/vit/vitor.jpg" alt="CITOR">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/marco/marco.jpg" alt="BARCO">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/fafis/fafis.jpg" alt="BATERRIST">
      </SplideSlide>
    </Splide>
    <Splide
      :options="mainOptions"
      aria-label="My Favorite Biznatchos"
      ref="main"
      :has-track="false"
      class="splide"
      @splide:active="onActive"
    >
      <SplideTrack>
        <div class="overlay">
          <i v-if="houve" class="icon bi bi-play-fill"></i>
          <i v-else class="icon bi bi-pause-fill"></i>
        </div>
        <SplideSlide key="FERNANDELAS">
          <img src="@/assets/crew/fern/fern.jpg" alt="FERNANDELAS">
        </SplideSlide>
        <SplideSlide key="MÆNGÜST">
          <img src="@/assets/crew/mangusto/marcelo.jpg" alt="MÆNGÜST">
        </SplideSlide>
        <SplideSlide key="CITOR">
        <img src="@/assets/crew/vit/vitor.jpg" alt="CITOR">
        </SplideSlide>
        <SplideSlide key="BARCO">
          <img src="@/assets/crew/marco/marco.jpg" alt="BARCO">
        </SplideSlide>
        <SplideSlide key="BATERRIST">
          <img src="@/assets/crew/fafis/fafis.jpg" alt="BATERRIST">
        </SplideSlide>
      </SplideTrack>
      <div class="button-wrapper">
        <button @click="showPlayPause" class="play-pause splide__toggle">
          <span class="splide__toggle__play">NÃO HOUVE</span>
          <span class="splide__toggle__pause">HOUVE</span>
        </button>
      </div>
    </Splide>
    <div v-if="!houve"
      class="about-biznatcho">
      <h3>{{banda[selectedSlide].cognome}}</h3>
      <p>
        {{banda[selectedSlide].descrição}}
      </p>
      <span>fOTOS: {{banda[selectedSlide].fotos}}</span>
      <div v-for="photo in photos[selectedSlide]" :key="photo">
        <img :src="imagePath(banda[selectedSlide].fotos, photo)" :alt="photo">
      </div>
    </div>
  </div>
</template>

<script>
import banda from '@/data/band-info.json';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { ref, onMounted } from 'vue';

export default {
  name: 'AboutPage',
  components: {
    Splide,
    SplideSlide,
    SplideTrack,
  },
  setup() {
    const main = ref();
    const thumbs = ref();
    onMounted(() => {
      const thumbsSplide = thumbs.value?.splide;
      if (thumbsSplide) {
        // eslint-disable-next-line no-unused-expressions
        main.value?.sync(thumbsSplide);
      }
    });
    return {
      main,
      thumbs,
    };
  },
  data() {
    return {
      mainOptions: {
        type: 'fade',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        speed: 800,
        arrows: true,
        autoplay: true,
        interval: 2500,
        rewind: true,
        rewindSpeed: 800,
        pauseOnHover: false,
      },
      thumbsOptions: {
        type: 'slide',
        rewind: true,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 90,
        focus: 'center',
        cover: true,
        isNavigation: true,
        updateOnMove: true,
        arrows: false,
      },
      houve: true,
      selectedSlide: 0,
      banda,
      photos: [],
    };
  },
  methods: {
    showPlayPause() {
      this.houve = !this.houve;
    },
    onActive(slide) {
      this.selectedSlide = slide.index;
    },
    loadPhotos() {
      let fern = require.context('@/assets/crew/fern', true, /\.(jpg|JPG)$/).keys();
      fern = fern.map((item) => item.replace('.', ''));
      let mangusto = require.context('@/assets/crew/mangusto', true, /\.(jpg|JPG)$/).keys();
      mangusto = mangusto.map((item) => item.replace('.', ''));
      let vit = require.context('@/assets/crew/vit', true, /\.(jpg|JPG)$/).keys();
      vit = vit.map((item) => item.replace('.', ''));
      let marco = require.context('@/assets/crew/marco', true, /\.(jpg|JPG)$/).keys();
      marco = marco.map((item) => item.replace('.', ''));
      let fafis = require.context('@/assets/crew/fafis', true, /\.(jpg|JPG)$/).keys();
      fafis = fafis.map((item) => item.replace('.', ''));
      this.photos = [fern, mangusto, vit, marco, fafis];
    },
    getImgUrl(folder, photo) {
      console.log(folder + photo);
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(folder + photo);
    },
  },
  computed: {
    imagePath() {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return (folder, photo) => require(`${folder}${photo}`);
    },
  },
  mounted() {
    this.loadPhotos();
  },
};
</script>

<style scoped>
.splide {
  width: 100%;
  height: 100%;
}
.splide__slide img {
  width: 35vh;
  object-fit: cover;
}
.splide__slide:not(.is-active) {
  opacity: 0.5;
}
.splide__slide.is-active {
  border: none !important;
}
.thumbnail {
  margin-bottom: 5px;
}
.button-wrapper {
  margin-top: 0.4rem;
}
.play-pause {
  border: 1px solid rgb(195, 100, 27);
  border-radius: 5px;
  background-image: url("@/assets/btn-bgd.png");
  color: white;
  width: 35vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: initial;
  transition: all 1.5s ease-in-out;
}
.play-pause:hover {
  border: 1px solid rgba(255, 255, 255, 0);
  background-image: url("@/assets/intemperismo.jpg");
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 1000;
}
.icon {
  font-size: 40vh;
}
.overlay i {
  opacity: 0;
  -webkit-animation: flash 1.2s ease;
  animation: flash 1.2s ease;
}
@-webkit-keyframes flash {
 0% { opacity: 1; }
 100% { opacity: 0; }
}
@keyframes flash {
 0% { opacity: 1; }
 100% { opacity: 0; }
}
.about-biznatcho {
  margin-top: 0.4rem;
  text-align: center;
}
</style>
