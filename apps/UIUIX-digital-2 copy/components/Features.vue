<template>
  <SectionHeaderCenter
    title="What we provide"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deserunt, porro quisquam rerum soluta laborum
impedit veniam voluptate culpa iste at quibusdam, facilis fugit expedita?"
    header="Our Services"
  />
  <div class="grid grid-cols-1 gap-3 px-4 lg:grid-cols-3 lg:px-20">
    <div
      class="flex flex-col items-center justify-center space-y-5 rounded-lg bg-slate-950 p-8 text-center text-white shadow-xl"
    >
      <Icon name="uil:medal" color="white" :size="'100'" />
      <p class="text-2xl font-bold">Web Development</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo
        corrupti esse, eveniet quos dignissimos, accusantium soluta, commodi
        quae nihil cum tempora omnis suscipit libero dolore dolorum aspernatur
        et enim.
      </p>
      <button>
        <span> Learn More</span>
        <Icon name="uil:arrow-right" color="white" :size="'30'" />
      </button>
    </div>
    <div
      class="flex flex-col items-center justify-center space-y-5 rounded-lg bg-slate-950 p-8 text-center text-white shadow-xl"
    >
      <Icon
        name="material-symbols:developer-mode-tv-outline-rounded"
        color="white"
        :size="'100'"
      />
      <p class="text-2xl font-bold">Web Development</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo
        corrupti esse, eveniet quos dignissimos, accusantium soluta, commodi
        quae nihil cum tempora omnis suscipit libero dolore dolorum aspernatur
        et enim.
      </p>
      <button>
        <span> Learn More</span>
        <Icon name="uil:arrow-right" color="white" :size="'30'" />
      </button>
    </div>
    <div
      class="flex flex-col items-center justify-center space-y-5 rounded-lg bg-slate-950 p-8 text-center text-white shadow-xl"
    >
      <Icon name="ep:service" color="white" :size="'100'" />
      <p class="text-2xl font-bold">Web Development</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo
        corrupti esse, eveniet quos dignissimos, accusantium soluta, commodi
        quae nihil cum tempora omnis suscipit libero dolore dolorum aspernatur
        et enim.
      </p>
      <button>
        <span> Learn More</span>
        <Icon name="uil:arrow-right" color="white" :size="'30'" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
