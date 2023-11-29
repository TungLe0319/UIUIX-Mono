<template>
  <button class="">
    <div v-if="iconPosition === 'start'" class="icon-wrapper">
      <i :class="`${iconName} icon`" :style="{ fontSize: iconSize }"></i>
    </div>
    <slot></slot>
    <div v-if="iconPosition === 'end'" class="icon-wrapper">
      <i :class="`${iconName} icon`" :style="{ fontSize: iconSize }"></i>
    </div>
  </button>
</template>

<script setup lang="ts">

interface ButtonWithIconProps {
  class: string;
  iconName: string;
  iconSize: string;
  iconPosition: 'start' | 'end';
}

const props = defineProps<ButtonWithIconProps>();

// const buttonClasses = computed(() => {
//   return `button-with-icon ${props.class}`;
// });
</script>

<style scoped>
.button-with-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  outline: none;
}

.icon-wrapper {
  margin-right: 10px;
}
</style>