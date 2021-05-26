<template>
  <div id="app">

    <MHeader></MHeader>
    
    <section class="section"> 
        <div class="container">
          <input type="text" placeholder="Buscar canciones" v-model="searchQuery">
          <a href=""> <button v-on:click.prevent="search">Buscar</button></a>
          <p class="results">{{searchMessage}}</p>
        </div>
      <MLoader v-show="isLoading"> </MLoader>
      <div class="container " v-show="!isLoading">
        <div class="columns is-multiline">
          <div class="column is-one-quarter " 
            v-for="track in tracks" 
            :key="track.id">
            <MTrack 
              :track= "track"
               @select= "setSelectedTrack"
               :class="{ 'is-active' : track.id == selectedTrack }"
               >
                
            </MTrack>
            
          </div>
        </div>  
      </div>
      
    </section>
    <MFooter ></MFooter>
  </div>
</template>

<script>
import trackService from  './Service/track'

import MFooter from './components/layout/footer.vue'
import MHeader from './components/layout/header.vue'

import MTrack from './components/Track.vue'
import MLoader from './components/shared/Loader.vue'

export default {
  name: 'app',
  components: { MFooter, MHeader, MTrack, MLoader},
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
      return `Encontrados: ${this.tracks.length}`
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
          console.log(res.tracks.items)
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
  @import "./scss/main.scss";
  .results{
    margin: 1em 0;
  }
  .is-active {
    border: 2px #00d1b2 solid
  }

</style>
