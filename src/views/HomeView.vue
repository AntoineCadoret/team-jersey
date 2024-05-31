<script lang="ts">
  import { RouterLink } from 'vue-router'
  import NHLTeam from '../components/NHLTeam.vue';
  import teams from '../assets/teams.json';

  export default{
    components: {
      NHLTeam
    },
    data(){
      return {
        league: "",
        teamsData: teams.teams,
        imgAddress: "https://assets.nhle.com/logos/nhl/svg/NHL_dark.svg"
      }
    }
  }
</script>

<template>
  <main>
    <header class="mb-8 bg-slate-800 p-6 flex justify-around items-center rounded-b-lg" >
      <img :src="imgAddress" alt="NHL logo" width="120" height="120">
      <h1 class="text-3xl text-white">NHL Teams</h1>
      <img :src="imgAddress" alt="NHL logo" width="120" height="120">
    </header>
    <div class="grid grid-cols-3 gap-3 mx-auto max-w-4xl">
      <RouterLink v-for="team in teamsData" :key="team.shortName" :to="{ name: 'team', params: { team_name: team.city }}" >
        <NHLTeam :team-color="team.color" :team-name="team.shortName" />
      </RouterLink>
    </div>
  </main>
</template>
