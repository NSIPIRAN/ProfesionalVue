<template>
  <div id="app">
    <section class="section"> 
      <nav class="nav">
        <div class="container">
          <input type="text" placeholder="Buscar canciones" v-model="searchQuery">
          <a href=""> <button v-on:click.prevent="search">Buscar</button></a>
        </div>
        <p>{{searchMessage}}</p>
      </nav>
      <div class="container">
        <div class="columns">
          <div class="column" 
            v-for="track in tracks" 
            :key="track.artists[0].name">
            {{track.name}} - {{track.artists[0].name}}
          </div>
        </div>  
      </div>
    </section>
  </div>
</template>
  
<script>
import trackService from  './Service/track.js'

export default {
  name: 'App',
  data() {
    return {
      searchQuery:'',
      tracks: []
    }
  },
  methods: {
   search(){
     if(this.searchQuery){return}
     trackService.search(this.searchQuery)
      .then(res=>{
        this.tracks = res.tracks.items
      })
   }
  },
  components: {
  },
  computed:{
    searchMessage(){
      return ` Encontrados: ${this.tracks.length}`
    }
  }
}
</script>
