<template>
  <main class="teamPage">
    <SecondHeader :img-address="imgAddress" :back-color="team.color" :page-title="team.fullName" size="120"/>
    <div class="m-8">
      <div class="flex">
        <JerseyBlock class="w-1/2" v-if="team.homeJersey" jersey-type="Home" :jerseys-ids="team.homeJersey" :team-name="team.shortName"/>
        <JerseyBlock class="w-1/2" v-if="team.awayJersey" jersey-type="Away" :jerseys-ids="team.awayJersey" :team-name="team.shortName"/>
      </div>
      <JerseyBlock v-if="team.alternatesJerseys?.length !== 0" jersey-type="Alternates" :jerseys-ids="team.alternatesJerseys" :team-name="team.shortName"/>
    </div>
  </main>
</template>
<script setup>
  import { ref, reactive, defineProps } from 'vue';
  import JerseyBlock from '@/components/JerseyBlock.vue';
  import SecondHeader from '@/components/SecondHeader.vue';
  import axios from 'axios';
  
  const props = defineProps(['teamId']);
  const imgAddress = ref('');
  let team = reactive({});

  getTeam();

  async function getTeam() {
    console.log(props.teamId);
    try{
      const response = await axios.get(`http://localhost:3000/teams/${props.teamId}`);
      team = response.data.team;
      console.log(team);
      imgAddress.value = "https://assets.nhle.com/logos/nhl/svg/"+team.shortName+"_dark.svg";
    } catch(err) {
      console.error('error fetching team');
      console.log(err);
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
