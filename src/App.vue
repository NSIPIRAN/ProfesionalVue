<template>
  <div id="app">

    <MHeader></MHeader>
    <section class="section"> 
      
        <div class="container">
          <input type="text" placeholder="Buscar canciones" v-model="searchQuery">
          <a href=""> <button v-on:click.prevent="search">Buscar</button></a>
        </div>
        <p>{{searchMessage}}</p>
      
      <div class="container">
        <div class="columns">
          <div class="column" 
            v-for="track in tracks" 
            :key="track.id">
            {{track.name}} - {{track.artists[0].name}}
          </div>
        </div>  
      </div>
      
    </section>
    <MFooter></MFooter>
  </div>
</template>

<script>
import trackService from  './Service/track'

import MFooter from './components/layout/footer.vue'
import MHeader from './components/layout/header.vue'

export default {
  name: 'app',
  components: { MFooter, MHeader },
  data () {
    return {
      searchQuery: '',
      tracks: []
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
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          console.log(res.tracks.items)
        })
    }
  }
}
</script>
<style lang="scss">
  @import "./scss/main.scss";
</style>
