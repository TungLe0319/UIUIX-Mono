<template>
  <div class="mb-4 flex flex-col items-center justify-center space-y-6">
    <h3 class="text-start font-serif uppercase text-orange-400">
      {{ header }}
    </h3>
    <h1 class="font-serif text-xl font-bold lg:text-5xl">{{ title }}</h1>
    <div class=" ">
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
