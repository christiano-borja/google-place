<template>
  <section class="google-places-container">
    <b-loading :is-full-page="isFullPage" v-model="isLocalLoading" :can-cancel="true" />
    <div class="container">
      <div class="form-container">
        <form @submit.prevent="getGooglePlaces()" class="form-search">
          <h2>Search nearby places</h2>
          <div class="input-container">
            <b-field label="">
              <b-input v-model="name"></b-input>
            </b-field>
            <b-button type="is-primary" @click="getGooglePlaces()">Search</b-button>
          </div>
        </form>
      </div>
      <div class="map-container" v-if="placesLocation.length > 0">
        <ul class="places-list list">
          <li class="list-item" v-for="(place, index) in placesLocation" :key="index">
            <ul>
              <li><strong>{{ place.name }}</strong></li>
              <li>{{ place.vicinity }}</li>
              <li>
                <b-rate 
                  :value="place.rating"
                  :max="maxs"
                  :icon="icons"
                  :show-score="score" 
                  :disabled="isDisabled"
                />
              </li>
            </ul>
          </li>
        </ul>
        <div ref="map" id="map"></div>
      </div>
      <p v-if="noResults">No results</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import gmapsInit from '@/utils/places'

export default {
  name: 'Places',
  data() {
    return{
      lat: 0,
      lng: 0,
      icons: 'star',
      maxs: 5,
      score: true,
      name: '',
      noResults: false,
      isFullPage: false,
      isDisabled: true,
    }
  },
  computed: {
    ...mapGetters('places', ['getPlaces', 'isLocalLoading']),
    placesLocation() {
      let places = []
      if (this.getPlaces.results) places = this.getPlaces.results
      return places
    }
  },
  mounted() {
    this.getLocalization()
  },
  methods: {
    ...mapActions('places', ['searchPlaces']),

    async getGooglePlaces() {
      const payload = {
        name: this.name,
        lat: this.lat,
        lng: this.lng
      }
      this.noResults = false
      await this.searchPlaces(payload)
        .then(() => {
          this.placesLocation.length > 0 ? this.addMap() : this.noResults = true
        })
    },
    getLocalization () {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude
          this.lng = position.coords.longitude
        }
      )
    },
    async addMap() {
      const google = await gmapsInit();
      const map = new google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new google.maps.LatLng(this.lat, this.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      })
      
      const infoWindow = new google.maps.InfoWindow()

      this.placesLocation.forEach(place => {
        const lat = place.geometry.location.lat
        const lng = place.geometry.location.lng

        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map
        })

        google.maps.event.addListener(marker, "click", () => {
          infoWindow.setContent(
            `<div class="ui header">${place.name}</div><p>${place.vicinity}</p>`
          )
          infoWindow.open(map, marker)
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/_variables.scss";
  .google-places-container{
    padding: 20px;
  }
  .form-container{
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    border-bottom: 1px solid #eaeaea;
    margin: 50px 0 10px 0;
    padding-bottom: 20px;
    h2{
      font-size: 3rem;
      max-width: 300px;
      text-align: left;
      line-height: 1;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .form-search{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    .button{
      margin: 0 0 12px 15px;
    }
    .input-container{
      min-width: 300px;
      text-align: left;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
  }
  .list{
    text-align: left;
    color: #747474;
    max-height: 400px;
    overflow-y: scroll;
    max-width: 40vw;
    padding-left: 0;
    margin-left: 0;
    min-width: 300px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: #D8D8D8;
      opacity: 0.4;
    }
    &::-webkit-scrollbar-thumb {
      width: 4px;
      opacity: 0.4;
      border-radius: 3.5px;
      background-color: #D8D8D8;
      border: 3px solid $is-primary
    }
    li{
      list-style: none;
    }
    > li{
      padding: 15px 0;
      border-bottom: 1px solid #c4c4c4;
      margin-bottom: 10px;
      margin-right: 20px;
    }
  }
  #map{
    max-width: 40vw;
    width: 100%;
    height: 400px;
    min-width: 300px
  }
  .map-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  ::v-deep .rate-text > span{
    font-weight: 700;
  }
  
</style>
