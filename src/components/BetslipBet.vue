<template>
  <div class="flex-col p-4 border-b border-off-black relative">
    <div class="flex items-center">
      <div class="text-white text-base">
        {{ contract.name }}
      </div>
      <div class="bg-purple-500 text-white rounded ml-1 px-1 text-xs">
        {{ contract.price }}
      </div>
    </div>
    <div class="text-sm">{{ market_name }}</div>
    <div class="text-white text-sm">{{ home_team }} v {{ away_team }}</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-labelledby="remove" role="presentation" class="absolute top-4 right-4 text-lg text-carbon-200 cursor-pointer" @click="removeBet(index)"><g fill="currentColor"><path d="M13.4146 12.0002L17.688 7.72674L18.5693 6.84546C18.6993 6.71545 18.6993 6.5042 18.5693 6.37419L17.6264 5.43125C17.4964 5.30124 17.2851 5.30124 17.1551 5.43125L12.0004 10.586L6.84563 5.43083C6.71562 5.30083 6.50437 5.30083 6.37436 5.43083L5.431 6.37378C5.301 6.50378 5.301 6.71504 5.431 6.84504L10.5862 12.0002L5.431 17.1549C5.301 17.285 5.301 17.4962 5.431 17.6262L6.37395 18.5692C6.50395 18.6992 6.71521 18.6992 6.84521 18.5692L12.0004 13.4144L16.2738 17.6879L17.1551 18.5692C17.2851 18.6992 17.4964 18.6992 17.6264 18.5692L18.5693 17.6262C18.6993 17.4962 18.6993 17.285 18.5693 17.1549L13.4146 12.0002Z"></path></g></svg>
  </div>
</template>

<script>
import Vue from "vue";
import store from '@/store.js';

export default Vue.extend({
  name: "BetslipBet",
  props: {
    index: Number,
    contract: Object,
    away_team: String,
    home_team: String,
    market_name: String,
  },
  methods: {
    removeBet (index) {
      this.$delete(store.bets, index)
    }
  }
});
</script>
