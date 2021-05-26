<template>
  <div id="app">

    <MHeader></MHeader>
    
    <section class="section"> 
        <div class="container">
          <input type="text" placeholder="Buscar canciones" v-model="searchQuery">
          <a href=""> <button v-on:click.prevent="search">Buscar</button></a>
          <p>{{searchMessage}}</p>
        </div>
      <MLoader v-show="isLoading"> </MLoader>
      <div class="container " v-show="!isLoading">
        <div class="columns is-multiline">
          <div class="column is-one-quarter " 
            v-for="track in tracks" 
            :key="track.id">
            <MTrack :track= "track" >

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

      isLoading:false
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
    }
  }
}
</script>
<style lang="scss">
  @import "./scss/main.scss";
</style>
