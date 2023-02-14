<!-- Test.vue -->
<template>
  <div class="magic-ui-test">
    <span>this is a Test component:</span>
    <span :style="{ color: config.color }">{{ config.text }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'magic-ui-test',

  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {},
};
</script>
