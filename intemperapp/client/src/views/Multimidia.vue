<template>
  <div id="multimidia">
    <Transition :duration="{ enter: 1000, leave: 2500 }" name="shrink" mode="out-in">
      <div v-if="enganou" class="enganou">
        <h1 class="text">Here you will find the best multimedia content</h1>
        <h2 class="text">But you will not find it here</h2>
        <h3 class="text">Because it is not here</h3>
        <h4 class="text">It is in the other side of the screen</h4>
        <h5 class="text">Click on the link below</h5>
        <h6 class="text">And you will find it</h6>
        <div v-for="i in 30" :key="i">
          <p class="text" :style="{'font-size': `${calculateSize(0.9, i)}rem`}">
            But you will not find it here
          </p>
          <p class="text" :style="{'font-size': `${calculateSize(0.8, i)}rem`}">
            Because it is not here
          </p>
          <p class="text" :style="{'font-size': `${calculateSize(0.7, i)}rem`}">
            It is in the other side of the screen
          </p>
          <p class="text" :style="{'font-size': `${calculateSize(0.6, i)}rem`}">
            Click on the link below
          </p>
          <p class="text" :style="{'font-size': `${calculateSize(0.5, i)}rem`}">
            And you will find it
          </p>
        </div>
      </div>
      <div v-else>
        <h2 class="achou">Achoooou!</h2>
        <button class="btn btn-info mb-2" @click="reenganar()">
          Quer ser enganado outra vez?
        </button>
        <div class="albums mt-3">
          <h1 class="mb-5">A Cabala Sagrada </h1>
          <div class="row">
            <div class="album col" v-for="album in albums.slice(0, 4)" :key="album.id">
              <div class="album-cover">
                <img @click="selectAlbum(album)" :src="album.cover" alt="album cover" />
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="album col" v-for="album in albums.slice(4)" :key="album.id">
              <div class="album-cover">
                <img @click="selectAlbum(album)" :src="album.cover" alt="album cover" />
              </div>
            </div>
          </div>
        </div>
        <Teleport to="body">
          <Transition name="modal">
            <div v-if="selectedAlbum">
              <div class="modal-overlay" @click="selectedAlbum = null"></div>
              <div class="album-modal">
                <p class="header">
                  <span class="album-name">{{ selectedAlbum.name }}</span>
                  <i @click="selectedAlbum = null" class="bi bi-x-lg"></i>
                </p>
                <div class="row mt-3" :id="selectedAlbum.name">
                  <div class="album-description col-6">
                    {{ selectedAlbum.description }}
                  </div>
                  <div class="col-6">
                    <AlbumsFrames :album="selectedAlbum" />
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </Teleport>
      </div>
    </Transition>
  </div>
</template>

<script>
import albums from '@/data/album-info.json';
import AlbumsFrames from '@/components/albums/AlbumsFrames.vue';

export default {
  name: 'Multimidia',
  data() {
    return {
      enganou: true,
      albums,
      selectedAlbum: null,
    };
  },
  components: {
    AlbumsFrames,
  },
  methods: {
    calculateSize(base, i) {
      return base / i;
    },
    reenganar() {
      this.enganou = true;
      setTimeout(() => {
        this.enganou = false;
      }, 12000);
    },
    selectAlbum(album) {
      this.selectedAlbum = album;
    },
  },
  watch: {
    selectedAlbum() {
      if (this.selectedAlbum) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.enganou = false;
    }, 10000);
  },
};
</script>

<style scoped>
  p {
    margin-bottom: 0.5rem;
  }
  .shrink-enter-active .text{
    transition: all 1s ease-in-out;
  }

  .shrink-leave-active .text {
    transition: all 2.5s ease-in;
  }

  .shrink-enter-from .text{
    font-size: 0px !important;
  }

  .shrink-leave-to .text{
    font-size: 0px !important;
  }
  .shrink-enter-active .achou{
    transition: all 1s ease-in-out;
  }

  .shrink-leave-active .achou {
    transition: all 2.5s ease-in;
  }

  .shrink-enter-from .achou{
    opacity: 0;
  }

  .shrink-leave-to .achou{
    transform: translateX(100%);
    rotate: 1080deg;
  }
  .spotify{
    border-radius: 12px;
  }
  .albums {
    background-color: var(--background-black-60);
    margin: 0 -30px;
    padding: 3rem 25px;
  }
  .album-cover{
    perspective: 1000px;
  }
  .album-cover img {
    width: 80%;
    height: 80%;
    box-shadow: rgba(255, 255, 255, 0.3) 30px 20px 5px -10px;
    transition: all 0.5s ease-in-out;
    transform: rotateX(30deg) rotateY(-30deg) rotateZ(15deg);
    transform-origin: center;
    cursor: pointer;
  }
  .album-cover img:hover {
    box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 12px 6px;
    transform: rotate(0) scale(1.2);
  }
  .album-modal {
    position: fixed;
    float: left;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    border-radius: 20px;
    padding: 0 20px 20px;
    z-index: 999;
    width: 80vw;
    min-width: fit-content;
    min-height: fit-content;
    color: #eed5b5;
    border: #eed5b5 2px solid;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
  }
  .album-modal p.header {
    margin: 15px 0 0;
    border-bottom: #eed5b5 1px solid;
  }
  .album-modal p.header i {
    float: right;
    cursor: pointer;
    margin-top: -10px;
    font-size: 1.2rem;
  }
  .album-modal p.header i:hover {
    color: #f79161;
  }
  .album-modal .album-name {
    font-size: 1.8rem;
  }
  .album-modal .album-description {
    white-space: pre-wrap;
  }
  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.3s linear;
  }

  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }
</style>
