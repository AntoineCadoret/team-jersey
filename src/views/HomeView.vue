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
        teamsData: teams.teams
      }
    }
  }
</script>

<template>
  <main>
    <h1 class="flex justify-center font-bold text-lg">NHL Teams</h1>
    <div class="grid grid-cols-4 gap-3 mx-auto max-w-4xl">
      <RouterLink v-for="team in teamsData" :key="team.shortName" :to="{ name: 'team', params: { team_name: team.city }}" >
        <NHLTeam :team-color="team.color" :team-name="team.shortName" />
      </RouterLink>
    </div>
  </main>
</template>
