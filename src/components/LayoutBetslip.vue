<template>
  <aside class="flex p-4 bg-carbon-800">
    <h1 class="text-base text-white font-medium">Bet Slip</h1>
    <pre>{{ bets }}</pre>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
import store from '@/store.js';

export default Vue.extend({
  name: "LayoutBetslip",
  data () {
    return {
      bets: store.bets
    }
  }
});
</script>

<style lang="scss" scoped>
  aside {
    width: 22.5rem;
  }
</style>
