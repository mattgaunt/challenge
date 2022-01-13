<template>
  <nav class="bg-carbon-800">
    <ol class="w-60 px-2 py-3">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center h-12 p-3 text-white"
        :class="[item.class, item.type]"
      >
        <div class="flex-grow">{{ item.label }}</div>
        <div
          v-if="item.count"
          v-text="item.count"
          class="rounded-lg py-1 px-3 font-medium text-xs text-green-400 bg-carbon-600 "
        />
      </li>
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
          class: 'active'
        },
        {
          type: 'link',
          label: 'In-Play',
          count: 2,
        },
        {
          type: 'link',
          label: 'Odds Boost',
          class: 'promoted',
        },
        {
          type: 'heading',
          label: 'Favourites',
        },
        {
          type: 'link',
          label: 'Counter-Strike',
        },
        {
          type: 'link',
          label: 'Football',
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

.active {
  background-color: var(--color-carbon-500);
  border-radius: 12px;
}

.promoted {
  background-image: linear-gradient(0, #FECA59, #FF7D63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
