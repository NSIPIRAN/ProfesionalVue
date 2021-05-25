<template>
  <div id="app">
    <HelloWorld msg="Hola bebe"/>
    <input v-model = "name">
    <input v-model = "lastName">
    <p>{{fullName}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      name: 'valor por',
      lastName: 'defecto'
      
    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.lastName
    }
  },
  components: {
    HelloWorld
  }
}
</script>

