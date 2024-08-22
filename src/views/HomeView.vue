<template>
  <main>
    <SecondHeader :img-address="imgAddress" back-color="bg-slate-800" page-title="NHL Teams" size="120"/>
    <div class="grid grid-cols-3 gap-3 mx-auto max-w-4xl">
      <RouterLink v-for="team in teamsData" :key="team._id" :to="{ name: 'team', params: { team_name: team.city }, state: {team_id: team._id}}" >
        <NHLTeam :team-color="team.color" :team-name="team.shortName" />
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { RouterLink } from 'vue-router'
  import NHLTeam from '../components/NHLTeam.vue';
  import SecondHeader from '@/components/SecondHeader.vue';

  const teamsData = ref([]);
  const imgAddress = ref('https://assets.nhle.com/logos/nhl/svg/NHL_dark.svg');

  getTeams()

  async function getTeams () {
    try {
      const response = await axios.get('http://localhost:3000/teams');
      teamsData.value = response.data.teams;
    } catch(err){
      console.error('Error fetching jerseys:',  err);
    }
  }
</script>