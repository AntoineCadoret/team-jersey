<template>
  <main class="teamPage">
    <header :class="team.color" class="p-6 flex justify-around items-center rounded-b-lg" >
      <img :src="imgAddress" :alt="team.fullName" width="120" height="120">
      <h1 class="text-3xl text-white">{{ team.fullName }}</h1>
      <img :src="imgAddress" :alt="team.fullName" width="120" height="120">
    </header>
    <div>
      <div class="flex">
        <JerseyPic class="w-1/2" v-if="team.jerseys" jersey-type="Home" :jersey-address="team.jerseys.home"/>
        <JerseyPic class="w-1/2" v-if="team.jerseys" jersey-type="Away" :jersey-address="team.jerseys.away"/>
      </div>
      <JerseyPic v-if="team.jerseys" jersey-type="Alternates" :jersey-address="team.jerseys.alternates"/>
    </div>
  </main>
</template>
<script lang="ts">
  interface Jersey {
    home: string;
    away: string;
    alternates: string[];
  }

  interface Team {
    city: string;
    color: string;
    fullName: string;
    jerseys?: Jersey | undefined;
    shortName: string;
  }
  import teams from '../assets/teams.json';
  import JerseyPic from '@/components/JerseyPic.vue';
  
  export default{
    props: ['team'],
    components:{
      JerseyPic
    },
    data(){
      return {
        imgAddress: ""
      }
    },
    computed: {
      team(): Team {
        console.log(teams, 'TEAMS', this.$route.params.teamName, this.$route.params.team_name);
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
