<script setup lang="ts">
const sections = [
  {
    title: "About Us",
    subtitle: "Who we are",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `At [Your Company Name], we are passionate about technology and dedicated to delivering innovative solutions. As a team of software developers and IT specialists, we strive to push the boundaries of what's possible in the digital world.Our commitment to excellence and our love for all things tech drive us to provide cutting- edge services and products to our clients.
Lorem ipsum dolor sit amet, consectetur adipisicing elit.Alias, ipsam!`,
  },
  {
    title: "The Mission",
    subtitle: "What we want to accomplish",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Our Mission Our mission is to harness the power of technology to solve complex problems and make the world a better place. We are driven by the belief that the right software can transform businesses and improve lives. We aim to create solutions that are not only efficient but also user-friendly, ensuring a seamless experience for our clients and their customers.",
  },
  {
    title: "What Sets us apart",
    subtitle: "What we want to accomplish",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `Technical Expertise: Our team comprises highly skilled software developers and IT specialists who excel in their respective fields. We keep up with the latest trends and technologies to provide the best solutions.
Innovation: We love staying on the cutting edge of technology.We're not afraid to think outside the box and find creative solutions to your challenges.
Customer - Centric Approach: We believe that our success is closely tied to the success of our clients.We work closely with you to understand your unique needs and tailor our services accordingly.
      Passion: Our love for technology is at the core of what we do.It's not just a job; it's our passion, and that passion shines through in our work.`,
  },
  {
    title: "Our Services",
    subtitle: "What we want to extend to you",
    image:
      "https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `Software Development: We design and build custom software solutions that meet your business's specific needs.
IT Consultation: Our IT specialists provide expert guidance to help you make the right technology decisions for your business.
      Podcasts: We also enjoy sharing our knowledge and insights through our tech- focused podcasts, where we discuss the latest trends and developments in the industry.`,
  },
];
</script>

<template>
  <main class="pt-16">
    <div
      class="hero relative flex flex-col items-center justify-center"
      style="
        background-image: url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      "
    >
      <div class="hero-overlay bg-opacity-20"></div>
      <div class="hero-inner-border"></div>
      <div class="hero-inner-border-2"></div>
      <div class="absolute">
        <div class="max-w-sm drop-shadow-md lg:max-w-xl">
          <h1 class="mb-5 font-serif text-5xl font-bold text-white lg:text-8xl">
            Hello there
          </h1>
          <p class="mb-5 text-xl text-white drop-shadow-md">
            We appreciate you taking the time to check out this project. i hope
            you like it and if so check it out on github and clone it!
          </p>
          <a
            href="https://github.com/daniel-le97/drizzle-nuxt"
            class="link text-2xl"
          >
            Github
          </a>
        </div>
      </div>
    </div>
    <section
      v-motion-fade-visible
      v-for="(section, index) in sections"
      :key="section.title"
      class="bg-base-100 my-12 flex flex-col space-y-4 p-8"
    >
      <div class="flex">
        <div
          :class="index % 2 === 0 ? ' order-1' : ' order-0'"
          class="flex w-1/2 items-center justify-center"
        >
          <img :src="section.image" alt="about image" />
        </div>
        <article
          :class="index % 2 === 1 ? ' order-1' : ' order-0'"
          class="prose flex w-1/2 flex-col space-y-6 p-10"
        >
          <h1 class="mb-0 font-serif text-3xl font-bold">
            {{ section.title }}
          </h1>
          <h2 class="font-sans text-xl font-semibold">
            {{ section.subtitle }}
          </h2>
          <p>
            Our Mission Our mission is to harness the power of technology to
            solve complex problems and make the world a better place. We are
            driven by the belief that the right software can transform
            businesses and improve lives. We aim to create solutions that are
            not only efficient but also user-friendly, ensuring a seamless
            experience for our clients and their customers.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  height: 92vh;
}

.hero-inner-border {
  @apply border-8 bg-black bg-opacity-25 opacity-80;
  height: 89%;
  width: 94%;
}

.hero-inner-border-2 {
  @apply absolute  border-2 bg-transparent;
  height: 85%;
  width: 92%;
}
</style>
