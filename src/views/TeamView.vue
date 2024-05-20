<template>
  <main class="teamPage">
    <header :class="team.color" class="p-6 flex justify-around items-center rounded-b-lg" >
      <img :src="imgAddress" :alt="team.fullName" width="120" height="120">
      <h1 class="text-3xl text-white">{{ team.fullName }}</h1>
      <img :src="imgAddress" :alt="team.fullName" width="120" height="120">
    </header>
    <div>
      <div class="flex">
        <JerseyBlock class="w-1/2" v-if="team.jerseys" jersey-type="Home" :jerseys-ids="team.jerseys.homeId" :team-name="team.shortName"/>
        <JerseyBlock class="w-1/2" v-if="team.jerseys" jersey-type="Away" :jerseys-ids="team.jerseys.awayId" :team-name="team.shortName"/>
      </div>
      <JerseyBlock v-if="team.jerseys && team.jerseys.alternatesIds" jersey-type="Alternates" :jerseys-ids="team.jerseys.alternatesIds" :team-name="team.shortName"/>
    </div>
  </main>
</template>
<script lang="ts">
  interface Jersey {
    home: string;
    away: string;
    alternates?: string[];
  }

  interface Team {
    city: string;
    color: string;
    fullName: string;
    jerseys?: Jersey | undefined;
    shortName: string;
  }
  import teams from '../assets/teams.json';
  import JerseyBlock from '@/components/JerseyBlock.vue';
  
  export default{
    props: ['team'],
    components:{
      JerseyBlock
    },
    data(){
      return {
        imgAddress: ""
      }
    },
    computed: {
      team(): Team {
        let value: Team = teams.teams.filter(team => team.city === this.$route.params.team_name)[0];
        this.imgAddress = "https://assets.nhle.com/logos/nhl/svg/"+value.shortName+"_dark.svg";
        return value;
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
