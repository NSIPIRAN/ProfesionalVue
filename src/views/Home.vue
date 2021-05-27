<template>
  <main>
      
    <section class="section"> 
        <div class="container">
          <div class="columns is-centered is-vcentered "> 
            <div class="column  is-half">
              <input 
                class="input is-primary" 
                type="text" 
                placeholder="Buscar canciones" 
                v-model="searchQuery"
                v-on:keyup.enter="search"
                >
              </div>
              <div class="column is-narrow ">
                <a href=""> <button class="button" v-on:click.prevent="search">Buscar</button></a>
              </div>
              
          </div>
          <p class="results notification is-success is-light">{{searchMessage}}</p>
          
        </div>
      <MLoader v-show="isLoading"> </MLoader>
      <div class="container " v-show="!isLoading">
        <div class="columns is-multiline">
          <div class="column is-one-quarter " 
            v-for="track in tracks" 
            :key="track.id">
            <MTrack 
              v-blur="track.preview_url"
              :track= "track"
               @select= "setSelectedTrack"
               :class="{ 'is-active' : track.id == selectedTrack }"
               >
                
            </MTrack>
            
          </div>
        </div>  
      </div>
      
    </section>

  </main>
</template>

<script>
import trackService from  '../Service/track'

import MTrack from '../components/Track.vue'
import MLoader from '../components/shared/Loader.vue'

export default {
  name: 'app',
  components: { MTrack, MLoader},
  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading:false,
      //llenamos con el id desde setSelectedTrack
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `${this.tracks.length} Devoluciones`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      //cuando se busque:
      this.isLoading =true
      //fin de cuando se busque
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          //console.log(res.tracks.items)
          //cuando la busqueda termina:
          this.isLoading =false
        })
    },
    //enviamos el id a selectedTrack
    setSelectedTrack(id) {
      this.selectedTrack= id
    }
  }
}
</script>
<style lang="scss">
  .results{
    margin: 2em 0;
  }
  .is-active {
    border: 2px #00d1b2 solid
  }
</style>
