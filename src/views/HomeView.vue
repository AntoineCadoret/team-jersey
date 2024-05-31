<script lang="ts">
  import { RouterLink } from 'vue-router'
  import NHLTeam from '../components/NHLTeam.vue';
  import SecondHeader from '@/components/SecondHeader.vue';
  import teams from '../assets/teams.json';

  export default{
    components: {
      NHLTeam,
      SecondHeader
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
    <SecondHeader :img-address="imgAddress" back-color="bg-slate-800" page-title="NHL Teams" size="120"/>
    <div class="grid grid-cols-3 gap-3 mx-auto max-w-4xl">
      <RouterLink v-for="team in teamsData" :key="team.shortName" :to="{ name: 'team', params: { team_name: team.city }}" >
        <NHLTeam :team-color="team.color" :team-name="team.shortName" />
      </RouterLink>
    </div>
  </main>
</template>
