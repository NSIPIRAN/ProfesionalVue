<template>
  <div id="app">
    <HelloWorld msg="Hola bebe"/>
    <input v-model = "msg">
    <p>{{msg}}</p>
    <a :href="url"> link</a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: '',
      url: 'www.google.com',
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

