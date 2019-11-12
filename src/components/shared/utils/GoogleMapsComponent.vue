<template>
  <gmap-map :center="center" :zoom="4" id="mapa">
    <gmap-cluster :grid-size="25">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position"></gmap-marker>
    </gmap-cluster>
  </gmap-map>
</template>

<script>
  export default {
    data () {
      return {
        center: { lat: -16.32952704, lng: -47.64135502 },
        markers: [
          { position: { lat: -16.32952704, lng: -47.64135502} },
          { position: { lat: -21.32952704, lng: -50.64135502} },
          { position: { lat: -20.32952704, lng: -68.64135502} },
          { position: { lat: -18.32952704, lng: -49.64135502} },
          { position: { lat: -25.32952704, lng: -50.64135502} },
          { position: { lat: 48.174270, lng: 16.329620 } }
        ]
      }
    },
    methods: {
      addMarker() {
        this.markers = []
      }
    },
    mounted(){
      // this.addMarker()
    }
  }
</script>

<style lang="css">
  #mapa{
    width: auto;
    height: 80vh;
    margin-top: 2vh;
  }
</style>
