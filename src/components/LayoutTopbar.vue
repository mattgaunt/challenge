<template>
  <header class="flex items-center px-4 bg-carbon-700 border-b border-off-black">
    <MidniteLogo />
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

<style lang="scss" scoped>
  header {
    height: 65px;
  }
</style>
