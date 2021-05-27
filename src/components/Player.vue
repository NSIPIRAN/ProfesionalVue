<template>
  <div class="content" v-if="track && track.album" >
    <p class="is-128x128">
      <img :src="track.album.images[0].url">
    </p>
    <div>
      <div class="strong">{{ track.name }}</div>
    </div>
    <div>
      <audio :src="track.preview_url" controls autoplay></audio>
    </div>
  </div>
</template>
<script>
export default {

  data () {
    return {
      track: {}
    }
  },

  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>
<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>