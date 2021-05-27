const trackMixin = {
  methods: {
    selectedTrack () {
      if (!this.track.preview_url) {return}
      // emit logrará comunicar el evento al comp padre con v-bind select e info de id
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin