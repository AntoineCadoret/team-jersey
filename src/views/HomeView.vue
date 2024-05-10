<script lang="ts">
  import NHLTeam from '../components/NHLTeam.vue';
  import teams from '../assets/teams.json';
  export default{
    components: {
      NHLTeam
    },
    data(){
      return {
        teamsData: teams.teams
      }
    }
  }
</script>

<template>
  <main>
    <h1 class="flex justify-center">NHL Teams</h1>
    <div class="flex flex-wrap justify-center gap-3 mx-auto">
      <NHLTeam class="w-1/5" v-for="(team, index) in teamsData" :key="index" :team-name="team.name" :team-color="team.color"/>
    </div>
  </main>
</template>
