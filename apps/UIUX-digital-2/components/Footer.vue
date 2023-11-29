<template>
  <footer class="bg-blueGray-200 relative pb-6 pt-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full px-4 lg:w-6/12">
          <h4 class="font-serif text-3xl font-bold">Let's keep in touch!</h4>
          <h5 class="text-blueGray-600 mb-2 mt-0 text-lg">
            Find us on any of these platforms
          </h5>
          <div class="mb-6 mt-6 flex gap-5 lg:mb-0">
            <a href="#">
              <Icon name="pajamas:twitter" class="text-3xl" />
            </a>
            <a href="#">
              <Icon name="logos:facebook" class="text-3xl" />
            </a>
            <a href="#">
              <Icon name="skill-icons:instagram" class="text-3xl" />
            </a>
            <a href="https://github.com/TungLe0319">
              <Icon name="skill-icons:github-dark" class="text-3xl" />
            </a>
          </div>
        </div>
        <div class="w-full px-4 lg:w-6/12">
          <div class="items-top mb-6 flex flex-wrap">
            <div class="ml-auto w-full px-4 lg:w-4/12">
              <span class="text-md mb-2 block font-bold uppercase"
                >Useful Links</span
              >
              <ul class="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Free Products</a>
                </li>
              </ul>
            </div>
            <div class="w-full px-4 lg:w-4/12">
              <span class="text-md mb-2 block font-bold uppercase"
                >Other Resources</span
              >
              <ul class="list-unstyled">
                <li>
                  <a href="#">MIT License</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-blueGray-300 my-6" />
      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="mx-auto w-full px-4 text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold">
            Copyright © <span id="get-current-year">2023 </span>
            <a href="https://www.creative-tim.com?ref=njs-profile" class=""
              >Tung Le</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
a {
  @apply text-blue-400 transition-colors hover:text-blue-600;
}
</style>
