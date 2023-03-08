<!-- Test.vue -->
<template>
  <div>
    <span @click="showStatus">component:</span>
    <span :style="{ color: props.config.color }">{{ props.config.text }}{{ name }}</span>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';
const app = inject('app');
const props = defineProps(['config']);
const name = ref('陈健');
console.log(props.config.id);
const node = app?.page?.getNode(props.config.id);
const showName = () => {
  name.value = '123';
};

const showStatus = () => {
  app?.emit('test:show', node, { name: 'chenjian' });
};

defineExpose({
  showName,
});
</script>
