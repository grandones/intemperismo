<template>
  <div id="multimidia">
    <div v-if="enganou" class="enganou">
      <h1>Here you will find the best multimedia content</h1>
      <h2>But you will not find it here</h2>
      <h3>Because it is not here</h3>
      <h4>It is in the other side of the screen</h4>
      <h5>Click on the link below</h5>
      <h6>And you will find it</h6>
      <p>But you will not find it here</p>
      <p>Because it is not here</p>
      <p>It is in the other side of the screen</p>
      <p>Click on the link below</p>
      <p>And you will find it</p>
      <p>But you will not find it here</p>
      <p>Because it is not here</p>
      <p>It is in the other side of the screen</p>
      <p>Click on the link below</p>
      <p>And you will find it</p>
      <p>But you will not find it here</p>
      <p>Because it is not here</p>
      <p>It is in the other side of the screen</p>
      <p>Click on the link below</p>
      <p>And you will find it</p>
      <p>But you will not find it here</p>
      <p>Because it is not here</p>
      <p>It is in the other side of the screen</p>
      <p>Click on the link below</p>
      <p>And you will find it</p>
      <p>But you will not find it here</p>
      <p>Because it is not here</p>
      <p>It is in the other side of the screen</p>
      <p>Click on the link below</p>
      <p>And you will find it</p>
      <p>But you will not find it here</p>
    </div>
    <div v-else>
      Achoooou!
    </div>
  </div>
</template>

<script>
export default {
  name: 'Multimidia',
  data() {
    return {
      enganou: true,
    };
  },
};
</script>

<style scoped>
  p {
    margin-bottom: 0.5rem;
  }
</style>
