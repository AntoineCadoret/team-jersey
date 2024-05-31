<template>
  <main class="teamPage">
    <SecondHeader :img-address="imgAddress" :back-color="team.color" :page-title="team.fullName" size="120"/>
    <div class="m-8">
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
    homeId: string;
    awayId: string;
    alternatesIds?: string[];
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
  import SecondHeader from '@/components/SecondHeader.vue';
  
  export default{
    props: ['team'],
    components:{
      JerseyBlock,
      SecondHeader
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
