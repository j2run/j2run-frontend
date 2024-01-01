<template>
  <span class="logo" :style="{ fontSize: (props.size || 25) + 'px' }">
    <template v-if="props.short">
      J2
    </template>
    <template v-else>
      J2Run.com
    </template>
    <img :src="hoamaiImage" class="hoamai" />
  </span>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  font-family: ADLaM_Display;
  font-weight: 400;
  text-wrap: nowrap;
}
.hoamai {
  position: absolute;
  width: 40px;
  margin-left: 5px;
}
</style>

<script setup lang="ts">
import hoamaiImage from '../assets/hoamai.png';

const props = defineProps({
  size: {
    type: Number,
    required: false,
  },
  short: {
    type: Boolean,
    required: false,
  }
});

</script>