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
          <div class="column" v-for="track in tracks" :key="track.name">
            {{track.name}} - {{track.artist}}
          </div>
        </div>  
      </div>
    </section>
  </div>
</template>
  
<script>
const tracks =[
    {name: 'muchacha', artist: 'luis juan'},
    {name: 'hasa', artist: 'Kany'},
    {name: 'vanilaa', artist: 'Vanessa Martin'}
  ]
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
     this.tracks = tracks
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
