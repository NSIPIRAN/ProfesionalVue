<template>
  <div class="card">
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
        <div class="small">Duración: {{track.duration_ms}}</div>
        
        <br>
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <a class="level-item">
              <!-- selectedTrack va a comunicar al padre un evento en este componente-->
              <span 
                class="icon has-text-success "
                @click ="selectedTrack" > ▶
              </span>
            </a>
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
      // emit logrará comunicar el evento al comp padre con v-bind select e info de id
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    
    }
  }
}
</script>

<style lang="scss" scoped>
  
   .level {
    justify-content: center;

  }
  
</style>