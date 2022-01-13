<template>
  <div class="flex p-4 text-sm border-b border-off-black last:border-0">
    <div class="w-2/4 flex flex-wrap">
      <div class="w-full pb-4">
        {{ competition_name }} &nbsp;&bull;&nbsp; {{ displayed_format }}
      </div>
      <div class="w-4/5">
        <div class="flex items-center mb-2">
          <img :src="home_image_url" class="w-5 h-5 mr-2" />
          <div class="text-base text-white">
            {{ home_team }}
          </div>
        </div>
        <div class="flex items-center">
          <img :src="away_image_url" class="w-5 h-5 mr-2" />
          <div class="text-base text-white">
            {{ away_team }}
          </div>
        </div>
      </div>
      <div class="w-1/5 text-right">
        {{ match_start_time  }}
        <div class="text-xs">
          {{ match_day }}
        </div>
      </div>
    </div>
    <div class="w-2/4 flex flex-wrap pl-2">
      <div class="w-full text-center pb-4">
        {{ market.name }}
      </div>
      <div v-for="(contract, index) in market.contracts" :key="index" class="flex-col flex-grow text-center bg-carbon-400 hover:bg-carbon-300 cursor-pointer rounded-lg ml-2 py-3 items-center">
        <div class="text-white text-xs">{{ contract.name }}</div>
        <div class="text-purple-500 text-base font-bold">
          {{ contract.price }}
        </div>
      </div>
      <div v-if="num_markets" class="flex flex-shrink text-purple-500 text-sm items-center font-bold pl-2">
        +{{ num_markets - 1 }}
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-labelledby="star" role="presentation" aria-label="Favourite" class="text-carbon-200 hover:text-yellow-400 cursor-pointer relative top right"><g fill="currentColor"><path d="M10.9271 3.09466L8.48599 8.04418L3.02432 8.84044C2.04488 8.9825 1.65235 10.19 2.36263 10.8816L6.31403 14.732L5.37945 20.1712C5.21123 21.1544 6.24674 21.8909 7.11403 21.4311L12 18.8628L16.886 21.4311C17.7533 21.8871 18.7888 21.1544 18.6206 20.1712L17.686 14.732L21.6374 10.8816C22.3476 10.19 21.9551 8.9825 20.9757 8.84044L15.514 8.04418L13.0729 3.09466C12.6355 2.21242 11.3682 2.20121 10.9271 3.09466Z"></path></g></svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UpcomingMatch",
  props: {
    competition_name: {
      type: String,
      required: true,
    },
    displayed_format: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    market: {
      type: Object,
      required: true
    },
    home_team: {
      type: String,
      required: true,
    },
    home_image_url: {
      type: String,
      required: true,
    },
    away_team: {
      type: String,
      required: true,
    },
    away_image_url: {
      type: String,
      required: true,
    },
    num_markets: {
      type: Number,
      required: true,
    },
  },
  computed: {
    match_start_time () {
      return new Date(this.start_time).toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'})
    },
    match_day () {
      return new Date(this.start_time).toLocaleString('en-GB', {weekday:'short'});
    }
  }
});
</script>
