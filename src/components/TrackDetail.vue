<template>
 <div class="container">
    <MLoader v-show="isLoading"> </MLoader>
    <div class="columns" v-show="!isLoading">
      <div class="column is-4 is-offset-4">
        <MTrack :track="track"></MTrack>
      </div>
    </div>
 </div>
  
</template>

<script>
import trackService from '../Service/track'
import MTrack from './Track.vue'
import MLoader from '../components/shared/Loader.vue'
export default {
  components: {MTrack,MLoader},
  data (){
    return {
      track: {},
       isLoading:false
    }
  },
  created(){
    //leer el id de la url:
    const id = this.$route.params.id
    this.isLoading =true
    trackService.getById(id)
    .then(res=>{
      this.track=res
      this.isLoading =false
    })
  }
}
</script>
<style lang="scss" scoped>
  .columns{
    margin:2em;
  }
</style>