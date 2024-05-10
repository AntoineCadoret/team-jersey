<template>
  <div class="about">
    <h1>{{ team.city }}</h1>
  </div>
</template>
<script lang="ts">

interface Team {
  color: string;
  shortName: string;
  city: string;
}
  import teams from '../assets/teams.json';
  
  export default{
    props: ['team'],
    computed: {
      team(): Team {
        console.log(teams, 'TEAMS', this.$route.params.teamName, this.$route.params.team_name);
        return teams.teams.filter(team => team.city === this.$route.params.team_name)[0];
      }
    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
