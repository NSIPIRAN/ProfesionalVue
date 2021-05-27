<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="track.album.images[0].url" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
             <img :src="track.album.images[0].url" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{track.name}}</p>
          <p class="subtitle is-6">{{track.artists[0].name}}</p>
        </div>
      </div>

      <div class="content">
        <div class="small">Duración: {{track.duration_ms | ms-to-mm}}</div>
        
        <br>
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <button class="level-item button">
              <!-- selectedTrack va a comunicar al padre un evento en este componente-->
              <span 
                class="icon has-text-success "
                @click ="selectedTrack" > ▶
              </span>
            </button>
            <button class="level-item button">
              <span 
                class="icon"
                @click ="goToTrack(track.id)" > 💥
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: { type: Object, required:true}
  },
  methods: {
    selectedTrack () {
      if (!this.track.preview_url) {return}
      // emit logrará comunicar el evento al comp padre con v-bind select e info de id
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    
    },
    goToTrack (id){
      if (!this.track.preview_url) {return}
      this.$router.push({ name: 'track', params: { id }})
    }
  }
}
</script>

<style lang="scss" scoped>
  
   .level {
    justify-content: center;

  }
  
</style>