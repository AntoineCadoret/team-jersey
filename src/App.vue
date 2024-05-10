

<template>
  <header class="flex justify-between items-center p-4 bg-blue-400">
      <img class="w-12 h-12" :src="logo" alt="logo"/>

      <nav>
        <RouterLink class="m-2" to="/">Home</RouterLink>
        <RouterLink class="m-2" to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />

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