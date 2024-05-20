<script lang="ts">
  import JerseyPic from "./JerseyPic.vue";

  export default {
    components: {
      JerseyPic
    },
    props: ['jerseyType', 'jerseysIds', 'teamName']
  }
</script>

<template>
  <div class="jersey flex-col flex items-center m-3">
    <h2 class="text-center font-bold text-2xl p-4">{{ jerseyType }}</h2>
    <div v-if="jerseyType === 'Alternates'" class="my-6 grid grid-cols-3 gap-12">
      <div v-for="jerseyId in jerseysIds">
        <JerseyPic :jerseyId="jerseyId" class="w-60"/>
      </div>
    </div>
    <JerseyPic v-else :jerseyId="jerseysIds" class="w-96"/>
  </div>
</template>
