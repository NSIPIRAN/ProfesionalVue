<template>
  <div id="app">
    <HelloWorld msg="Hola bebe"/>
    <input v-model = "name">
    <button v-on:click="format">soy un boton</button>

    <p>{{formatName}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//@click reemplaza a v-on:click
export default {
  name: 'App',
  data() {
    return {
      name: '',
      formatName: ''
    }
  },
  methods: {
    format () {
      this.formatName = this.name.split(' ').join('-').toUpperCase()
    }
  },
  components: {
    HelloWorld
  }
}
</script>

