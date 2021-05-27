<template>
  <section class="hero is-primary is-medium">
   <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      
        <div class="navbar-brand">
          <a class="navbar-item">
            GM
          </a>
          <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div :class="{ 'is-active': showNav }" class="navbar-menu">
          <div class="navbar-end">
            
            
            <router-link to="/"><a class="navbar-item" :class="{ 'is-active' : $route.path == '/'}">Home</a></router-link>
            
            <router-link to="/about"><a class="navbar-item" :class="{ 'is-active' : $route.path == '/about'}">About</a></router-link>
            
         
          </div>
        </div>
     
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Gugul Music
      </p>
      <p class="subtitle">
        Canciones que te trae Vue
      </p>
      <MPlayer></MPlayer>
    </div>
  </div>

    
  </section>
</template>
<script>
import MPlayer from '../Player'

export default {
  components: {MPlayer},
  data () {
    return {
      showNav: false
    }
  },
}
</script>

