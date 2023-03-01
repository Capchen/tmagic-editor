<!-- Test.vue -->
<template>
  <div style="display: flex; align-items: center; height: 28px">
    <input class="radio-input" type="radio" :id="data.value" :name="idName" :value="data.value" />
    <label style="font-size: 16px; color: #222" :for="data.value">{{ data.radioName }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    idName: {
      type: String,
      default: '',
    },
  },

  setup() {},
};
</script>
<style>
.radio-input {
  border-radius: 50%;
  width: 18px;
  height: 18px;

  border: 2px solid #999;
  margin-right: 5px;
}
</style>
