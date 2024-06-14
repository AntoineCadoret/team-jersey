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
<script lang="ts">

  interface Team {
    city: string;
    color: string;
    imageUrl: string;
    fullName: string;
    homeJersey: string;
    awayJersey:string
    alternatesJerseys?: string[];
    shortName: string;
  }

  import JerseyBlock from '@/components/JerseyBlock.vue';
  import SecondHeader from '@/components/SecondHeader.vue';
  import axios from 'axios';
  
  export default{
    props: ['teamId'],
    components:{
      JerseyBlock,
      SecondHeader
    },
    data(){
      return {
        imgAddress: "",
        team: {} as Team
      }
    },
    methods: {
        async getTeam() {
        // let value: Team = teams.teams.filter(team => team.city === this.$route.params.team_name)[0];
        // this.imgAddress = "https://assets.nhle.com/logos/nhl/svg/"+value.shortName+"_dark.svg";
        // return value;
        try{
          const response = await axios.get(`http://localhost:3000/teams/${this.teamId}`);
          this.team = response.data.team;
          console.log(this.team);
          this.imgAddress = "https://assets.nhle.com/logos/nhl/svg/"+this.team.shortName+"_dark.svg";
        } catch(err) {
          console.error('error fetching team');
        }
      }
    },
    created() {
      console.log('Received teamId:', this.teamId);
      this.getTeam();
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
