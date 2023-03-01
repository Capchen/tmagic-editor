<!-- Test.vue -->
<template>
  <div>
    <span @click="demoHandle">陈健:</span>
    <span :style="{ color: config.color }">{{ config.text }}</span>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const config = defineProps(['config']);

const request = inject('request');
const demoHandle = () => {
  alert('请求发送中');
  request
    .get('https://app-dev.gyenno.com/service_app_im/applets/comm/ok')
    .then((rs) => {
      console.log('发送成功', rs);
    })
    .catch();
};

// export default {
//   props: {
//     config: {
//       type: Object,
//       default: () => ({}),
//     },
//   },

//   setup() {},
// };
</script>
