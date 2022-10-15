<template>
  <div class="about">
    <h1>This is the crew of the Intempirates, YARRR</h1>
    <Splide  :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="@/assets/crew/vitor1.jpg" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/marco2.jpg" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/marcelo3.jpg" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/fern4.jpg" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/crew/fafis5.jpg" alt="Sample 1">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
