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
        <img src="@/assets/crew/fern/1-fern.jpg" alt="FERNANDELAS">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/mangusto/1-marcelo.jpg" alt="MÆNGÜST">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/vit/1-vitor.jpg" alt="CITOR">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/marco/1-marco.jpg" alt="BARCO">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/fafis/1-fafis.jpg" alt="BATERRIST">
      </SplideSlide>
    </Splide>
    <div class="row justify-content-center">
      <div class="col-6">
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
              <img src="@/assets/crew/fern/1-fern.jpg" alt="FERNANDELAS">
            </SplideSlide>
            <SplideSlide key="MÆNGÜST">
              <img src="@/assets/crew/mangusto/1-marcelo.jpg" alt="MÆNGÜST">
            </SplideSlide>
            <SplideSlide key="CITOR">
            <img src="@/assets/crew/vit/1-vitor.jpg" alt="CITOR">
            </SplideSlide>
            <SplideSlide key="BARCO">
              <img src="@/assets/crew/marco/1-marco.jpg" alt="BARCO">
            </SplideSlide>
            <SplideSlide key="BATERRIST">
              <img src="@/assets/crew/fafis/1-fafis.jpg" alt="BATERRIST">
            </SplideSlide>
          </SplideTrack>
          <div class="button-wrapper">
            <button @click="showPlayPause" class="play-pause splide__toggle">
              <span class="splide__toggle__play">NÃO HOUVE</span>
              <span class="splide__toggle__pause">HOUVE</span>
            </button>
          </div>
        </Splide>
      </div>
    </div>
    <div v-if="!houve"
      class="about-biznatcho row">
      <h3>{{banda[selectedSlide].cognome}}</h3>
      <h4>
        {{banda[selectedSlide].descrição}}
      </h4>
      <div v-for="photo in photos[selectedSlide]" :key="photo" class="col">
        <img :src="getImgUrl(photo.name)" :alt="photo">
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
      let fern = import.meta.glob('/src/assets/crew/fern/*');
      let mangusto = import.meta.glob('/src/assets/crew/mangusto/*');
      let vit = import.meta.glob('/src/assets/crew/vit/*');
      let marco = import.meta.glob('/src/assets/crew/marco/*');
      let fafis = import.meta.glob('/src/assets/crew/fafis/*');
      this.photos = [fern, mangusto, vit, marco, fafis];
    },
    getImgUrl(photo) {
      const imageUrl = new URL(`${photo}`, import.meta.url).href
      return imageUrl
    },
  },
  mounted() {
    this.loadPhotos();
  },
};
</script>

<style lang="scss" scoped>
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
  -webkit-animation: flash 1.3s ease;
  animation: flash 1.3s ease;
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
  margin-top: 0.8rem;
  text-align: center;
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
