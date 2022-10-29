<template>
  <div class="about">
    <h1>This is the crew of the Intempirates, YARRR</h1>
    <Splide
      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      :options="thumbsOptions"
      ref="thumbs"
      class="thumbnail"
    >
    <SplideSlide>
      <img src="@/assets/crew/vitor1.jpg" alt="CITOR">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/marco2.jpg" alt="BARCO">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/marcelo3.jpg" alt="MÆNGÜST">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/fern4.jpg" alt="FRENIS">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/fafis5.jpg" alt="BATERRIST">
      </SplideSlide>
    </Splide>
    <Splide
      :options="mainOptions"
      aria-label="My Favorite Biznatchos"
      ref="main"
      :has-track="false"
      class="splide"
    >
      <SplideTrack>
        <SplideSlide key="CITOR">
        <img src="@/assets/crew/vitor1.jpg" alt="CITOR">
        </SplideSlide>
        <SplideSlide key="BARCO">
          <img src="@/assets/crew/marco2.jpg" alt="BARCO">
        </SplideSlide>
        <SplideSlide key="MÆNGÜST">
          <img src="@/assets/crew/marcelo3.jpg" alt="MÆNGÜST">
        </SplideSlide>
        <SplideSlide key="FRENIS">
          <img src="@/assets/crew/fern4.jpg" alt="FRENIS">
        </SplideSlide>
        <SplideSlide key="BATERRIST">
          <img src="@/assets/crew/fafis5.jpg" alt="BATERRIST">
        </SplideSlide>
      </SplideTrack>
      <div class="button-wrapper">
        <button class="play-pause splide__toggle">
          <span class="splide__toggle__play">HOUVE</span>
          <span class="splide__toggle__pause">HOUVE</span>
        </button>
      </div>
    </Splide>
  </div>
</template>

<script>
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
        arrows: false,
        autoplay: true,
        interval: 4000,
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
    };
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
  margin-top: 5px;
}
.play-pause {

}
</style>
