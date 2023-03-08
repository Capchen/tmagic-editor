<template>
  <!-- <magic-ui-container v-if="visible" class="magic-ui-radio-group"> -->
  <div class="magic-ui-radio-group">
    <div class="title" style="display: flex; align-items: center; height: 28px; margin-bottom: 12px">
      <i style="font-size: 16px; color: red; margin-right: 5px">*</i>
      <span style="font-size: 16px; color: #222; font-weight: 500">{{ config.text }}</span>
      <span @click="handleClick">点击我，和测试组件联动{{ visible }}</span>
    </div>

    <div class="radio-item">
      <magic-ui-radio
        v-for="item in config.group"
        :key="item"
        :data="item"
        :idName="config.groupValue"
      ></magic-ui-radio>
    </div>
  </div>
  <!-- <magic-ui-radio
        v-for="(item, index) in new Array(config.radioNum).map((e, index) => index)"
        :key="item"
        :idName="config.radioId"
        :idIndex="index"
      ></magic-ui-radio> -->
  <!-- </magic-ui-container> -->
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import Core from '@tmagic/core';

// import type { MNode } from '@tmagic/schema';
import useApp from '../../useApp';

export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const visible = ref(false);
    const app: Core | undefined = useApp(props);
    const node = app?.page?.getNode(props.config.id);

    const handleClick = () => {
      app?.emit('radioGroup:btnClick', node);
    };
    const litteChange = (data: any, params: any) => {
      console.log(data);
      console.log(params);
      visible.value = !visible.value;
    };

    // const openOverlay = () => {
    //   visible.value = true;
    //   if (app) {
    //     app.emit('overlay:open', node);
    //   }
    // };

    // const closeOverlay = () => {
    //   visible.value = false;
    //   if (app) {
    //     app.emit('overlay:close', node);
    //   }
    // };
    // info, path
    app?.on('editor:select', () => {
      // if (path.find((node: MNode) => node.id === props.config.id)) {
      //   openOverlay();
      // } else {
      //   closeOverlay();
      // }
    });

    return {
      visible,
      handleClick,
      litteChange,
      // openOverlay,
      // closeOverlay,
    };
  },
});
</script>
<style>
.magic-ui-radio-group {
  box-sizing: border-box;
  padding: 16px;
  overflow: hidden;
}
.magic-ui-radio-group .radio-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
