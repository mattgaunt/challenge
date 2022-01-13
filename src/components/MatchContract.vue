<template>
  <div
    :class="[
      isSelected
        ? 'bg-purple-400'
        : 'bg-carbon-400 hover:bg-carbon-300'
    ]"
    class="
      flex-col flex-grow
      text-center
      cursor-pointer
      rounded-lg
      ml-2
      py-2
      items-center
      w-2/4
    "
  >
    <div class="text-white text-xs">{{ name }}</div>
    <div
      :class="[
        isSelected
          ? 'text-white'
          : 'text-purple-500'
      ]"
      class="text-base font-bold"
    >
      {{ price }}
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import store from '@/store.js';

export default Vue.extend({
  name: "MatchContract",
  props: {
      id: Number,
      name: String,
      price: String,
  },
  computed: {
    isSelected () {
      return store.bets.find(bets => bets.contract.id === this.id)
    },
  }
});
</script>
