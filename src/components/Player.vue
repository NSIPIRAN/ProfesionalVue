<template>
  <div class="content">
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
    <div class="content" v-else > 
      <p class="is-128x128">
        <img src='../assets/gm.png' > 
      </p>
      <div class="mb-3">
        <span class="strong">Te amo</span>
        <span class="has-text-grey is-size-7 ">  [03:53 min] </span>
      </div>
      <div>
        <audio src="https://p.scdn.co/mp3-preview/7ca1dd37ec89fc95eb4a68b57d98d2548ec65044?cid=555776939cf64ea6b39915cf4d5d875d" controls></audio>
      </div>
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