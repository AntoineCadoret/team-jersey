

<template>
  <header class="flex justify-between items-center p-4 bg-blue-400">
    <RouterLink class="m-2" to="/"><img class="w-14 h-14" :src="logo" alt="logo"/></RouterLink>

      <nav class="flex">
        <RouterLink class="m-3" to="/favorites">favorites</RouterLink>
        <RouterLink class="m-3" to="/myjerseys">myJerseys</RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer class="bg-blue-400">
    <p class="text-center p-6 text-xl">@TeamJerseys</p>
  </footer>
</template>
<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import hockeyJersey from '@/assets/image/hockey-jersey.png';
  export default {
    data(){
      return {
        logo: hockeyJersey
      }
    }
  }
</script>