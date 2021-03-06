import Vue from 'vue'
import Vuex from 'vuex'
import trackService from './Service/track'

import tracService from './Service/track'

Vue.use(Vuex)

const store =new Vuex.Store({
  state: {
    track: {

    }
  },
  mutations:{
    setTrack(state, track) {
      state.track = track
    }
  },
  actions: {
    getTrackById (context, payload){
      return trackService.getById(payload.id)
        .then(res => {
            context.commit('setTrack', res)
            return res
        })
    }
  },
  getters: {
    trackTitle (state){
      if(!state.track.name) { return''}
      return `${state.track.name} by ${state.track.artists[0].name}`
    }
  }
})

export default store