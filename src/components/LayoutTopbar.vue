<template>
  <header class="flex items-center h-16 px-4 bg-carbon-700 border-b border-off-black">
    <router-link to="/">
      <MidniteLogo />
    </router-link>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import MidniteLogo from '@/components/MidniteLogo.vue'

export default Vue.extend({
  name: 'LayoutTopbar',
  components: {
    MidniteLogo
  }
})
</script>
