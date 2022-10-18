<template>
  <div class="about">
    <h1>This is the crew of the Intempirates, YARRR</h1>
    <Splide :options="mainOptions" aria-label="My Favorite Biznatchos" ref="main">
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
      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      :options="thumbsOptions"
      ref="thumbs"
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
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, onMounted } from 'vue';

export default {
  name: 'AboutPage',
  components: {
    Splide,
    SplideSlide,
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
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        speed: 800,
        arrows: false,
        autoplay: true,
        fixedWidth: '100%',
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
