<template>
  <iframe v-if="album.id === 1" class="spotify" src="https://open.spotify.com/embed/album/2pbqtmR4ZEICcDBfyIGMvO?utm_source=generator" width="100%" height="500" frameBorder="0" :allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe v-if="album.id === 2" class="spotify" src="https://open.spotify.com/embed/album/1afhFclZpOahPnUTAvBvyr?utm_source=generator" width="100%" height="500" frameBorder="0" :allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe v-if="album.id === 3" class="spotify" src="https://open.spotify.com/embed/album/2vYJTN6DlfIpvtgYVfIu17?utm_source=generator" width="100%" height="500" frameBorder="0" :allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe v-if="album.id === 3.5" class="spotify" src="https://open.spotify.com/embed/album/7wLecJVvG72fgOIMaqX30K?utm_source=generator" width="100%" height="160" frameBorder="0" :allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe v-if="album.id === 4" class="spotify" src="https://open.spotify.com/embed/album/6PosGbT5mp3Uv8fusJhQ6T?utm_source=generator" width="100%" height="500" frameBorder="0" :allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe v-if="album.id === 5" class="spotify" src="https://open.spotify.com/embed/album/3jRA64EKfZTkpBLPm6ItG5?utm_source=generator" width="100%" height="500" frameBorder="0" :allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe v-if="album.id === 6" class="spotify" src="https://open.spotify.com/embed/album/5zOh2XrBpMReFtxXM04H4P?utm_source=generator" width="100%" height="500" frameBorder="0" :allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe v-if="album.id === 7" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1246499977&color=%235d270c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
</template>

<script>
export default {
  name: 'AlbumsFrames',
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>
