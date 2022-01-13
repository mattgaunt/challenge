<template>
  <nav class="bg-carbon-800">
    <ol class="w-60 px-2 py-3">
      <component
        :is="item.to ? 'router-link' : 'li'"
        v-for="(item, index) in items"
        tag="li"
        :key="index"
        :to="item.to || ''"
        class="flex items-center h-12 p-3 text-white cursor-pointer"
        :class="item.type"
      >
        <div class="flex-grow">{{ item.label }}</div>
        <div
          v-if="item.count"
          v-text="item.count"
          class="rounded-lg py-1 px-3 font-medium text-xs text-green-400 bg-carbon-600 "
        />
      </component>
    </ol>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'LayoutSidebar',
  data () {
    return {
      items: [
        {
          type: 'link',
          label: 'Upcoming',
          to: '/matches',
        },
        {
          type: 'link',
          label: 'In-Play',
          to: '/in-play',
          count: 2,
        },
        {
          type: 'link',
          label: 'Odds Boost',
          class: 'promoted',
          to: '/odds-boost',
        },
        {
          type: 'heading',
          label: 'Favourites',
        },
        {
          type: 'link',
          label: 'Counter-Strike',
          to: '/esports/counter-strike',
        },
        {
          type: 'link',
          label: 'Football',
          to: '/sports/football',
        }
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
.heading {
  margin-top: 12px;
  color: var(--color-carbon-200);
}

.router-link-active {
  background-color: var(--color-carbon-500);
  border-radius: 12px;
}

.promoted {
  background-image: linear-gradient(0, #FECA59, #FF7D63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
