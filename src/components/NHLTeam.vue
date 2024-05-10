<script lang="ts">
  export default {
    props: ['teamName', 'teamColor'],
    data(){
      return{
        imgAddress: "https://assets.nhle.com/logos/nhl/svg/"+this.teamName+"_dark.svg"
      }
    }
  }

</script>

<template>
  <div :class="this.teamColor" class="p-4 rounded-lg justify-center flex">
    <img :src="imgAddress" alt="teamPic" width="120" height="120">
  </div>
</template>
