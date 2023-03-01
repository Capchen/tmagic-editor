<template>
  <div class="magic-ui-label-btn">
    <span>{{ config.text }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {},
};
</script>
