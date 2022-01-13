<template>
  <aside class="bg-carbon-800">
    <h1 class="p-4 text-base text-white font-medium">Bet Slip</h1>
    <betslip-bet v-for="(bet, index) in bets" :key="index" v-bind="bet" :index="index" />
  </aside>
</template>

<script>
import Vue from "vue";
import store from '@/store.js';
import BetslipBet from '@/components/BetslipBet.vue'

export default Vue.extend({
  name: "LayoutBetslip",
  components: {
    BetslipBet
  },
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
