<template>
  <div id="app">
    <HelloWorld msg="Hola bebe"/>
    <h1>{{msg}}</h1>
    <p>{{person.name}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hola mundo',
      person: {
        name: 'juan'
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>

