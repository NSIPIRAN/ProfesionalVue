<template>
  <div class="content" v-if="track && track.album" >
    <p class="is-128x128">
      <img :src="track.album.images[0].url">
    </p>
    <div class="mb-3">
      <span class="strong">{{ track.name }}  </span>
      <span class="has-text-grey is-size-7 ">  [{{ track.duration_ms | ms-to-mm}}]</span>
    </div>
    <div>
      <audio :src="track.preview_url" controls autoplay></audio>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['track'])
  }
 
}
</script>
<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>