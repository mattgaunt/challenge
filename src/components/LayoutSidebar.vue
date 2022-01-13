<template>
  <nav class="flex w-60 bg-carbon-800">
    <ol>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="item.type"
      >
        {{ item.label }}
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
        },
        {
          type: 'link',
          label: 'In-Play',
          count: 2,
        },
        {
          type: 'promoted',
          label: 'Odds Boost',
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
