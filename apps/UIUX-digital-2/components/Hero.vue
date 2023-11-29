<template>
  <div class="hero-image">
    <div class="flex flex-col items-center justify-center space-y-5">
      <h1 class="font-serif text-4xl font-bold text-white lg:text-9xl">
        Digital Services
      </h1>
      <h2 class="font-serif text-3xl font-bold text-white lg:text-4xl">
        With Excellent Quality
      </h2>
      <p class="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
      <button
        class="rounded bg-amber-500 px-4 py-2 font-bold text-white transition-all duration-150 hover:bg-amber-700"
      >
        Learn More
      </button>
      <nx-btn>erer</nx-btn>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.hero-image {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
