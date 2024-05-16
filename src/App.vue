

<template>
  <header class="flex justify-between items-center p-4 bg-blue-400">
    <RouterLink class="m-2" to="/"><img class="w-14 h-14" :src="logo" alt="logo"/></RouterLink>

      <nav class="flex my-2 mx-6">
        <RouterLink to="/nhl">
          <img src="https://assets.nhle.com/logos/nhl/svg/NHL_dark.svg" alt="nhl logo" class="h-12">
        </RouterLink>
        <RouterLink class="mr-6" to="/nfl">
          <img src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg" alt="nfl logo" class="h-12">
        </RouterLink>
        <RouterLink class="mr-6" to="/nba">
          <img src="https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/fac0de22-dcef-427c-a3f8-1a834f38f66c/NBA_Logo.png?ver=06-02-2024" alt="nba logo" class="h-12">
        </RouterLink>
        <RouterLink class="flex items-center" to="/mlb">
          <img src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg" alt="mlb logo" class="w-12">
        </RouterLink>
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