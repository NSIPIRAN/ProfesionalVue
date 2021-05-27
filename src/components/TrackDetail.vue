<template>
 <div class="container" v-if="track && track.album">
    <MLoader v-show="isLoading"> </MLoader>
    <div class="columns" v-show="!isLoading">
      <div class="column is-3">
        <figure class="image is-256x256">
          <img :src="track.album.images[0].url" alt="Placeholder image">
        </figure>
        <button class="button  is-primary-invert is-large is-fullwidth mt-2">
          <!-- selectedTrack va a comunicar al padre un evento en este componente-->
          <span class="icon" @click ="selectedTrack" > ▶ </span>
        </button>
      </div>
        <div class="column is-9">
          <article class="panel is-primary-invert">
            <p class="panel-heading">
              {{ track.name }}
            </p>
          
            <div class="panel-block">
              
            </div>
            
            <div class="panel-block ">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <ul v-for="(v,k) in track">
                      <li>
                        <strong>{{ k }}</strong>&nbsp;
                        <span>{{ v }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              
            </div>
            
          </article>

        </div>
    </div>
 </div>
  
</template>

<script>
import trackService from '../Service/track'
import MLoader from '../components/shared/Loader.vue'
import trackMixin from '../mixins/tracks'
export default {
  mixins: [trackMixin],
  components: {MLoader},
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