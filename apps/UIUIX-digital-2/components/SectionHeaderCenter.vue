<template>
  <div class="mb-4 flex flex-col items-center justify-center space-y-6">
    <h3 class="font-serif uppercase text-orange-400">{{ header }}</h3>
    <h1 class="font-serif text-2xl font-bold lg:text-5xl">{{ title }}</h1>
    <div class="w-full px-10 text-start lg:w-1/2 lg:px-0 lg:text-center">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["header", "title", "content"]);
</script>

<style>
/* Add your styles here */
</style>
