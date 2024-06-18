

<template>
  <header class="flex justify-between items-center p-6 bg-emerald-600">
    <RouterLink class="m-2" to="/"><img class="w-16 h-16" :src="logo" alt="logo"/></RouterLink>

      <nav class="flex">
        <RouterLink class="m-3 text-lg hover:underline focus:underline" to="/jerseyslist">Every Jersey</RouterLink>
        <RouterLink class="m-3 text-lg hover:underline focus:underline" to="/favorites">favorites</RouterLink>
        <RouterLink class="m-3 text-lg hover:underline focus:underline" to="/myjerseys">my Jerseys</RouterLink>
        <RouterLink class="m-3 text-lg hover:underline focus:underline" to="/signup">Sign Up</RouterLink>
        <RouterLink class="m-3 text-lg hover:underline focus:underline" to="/signin">Sign In</RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer class="mt-8 p-5 bg-emerald-600">
    <p class="text-center p-6 text-xl">@TeamJerseys</p>
  </footer>
</template>
<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import hockeyJersey from '@/assets/image/hockey-jersey.png';
  export default {
    data(){
      return {
        logo: hockeyJersey
      }
    }
  }
</script>