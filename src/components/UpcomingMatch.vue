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
    <div class="w-2/4"></div>
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
