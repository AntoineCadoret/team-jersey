<script lang="ts">
  export default {
    props: ['jerseyType', 'jerseyAddress']
  }
</script>

<template>
  <div class="jersey m-3">
    <h2 class="text-center font-bold text-2xl">{{ jerseyType }}</h2>
    <div v-if="jerseyType === 'Alternates'" class="flex">
      <img  v-for="address in jerseyAddress" class="w-1/3 m-6" :src="address" alt="jersey pic">
    </div>
    <img v-else :src="jerseyAddress" alt="jersey pic"/>
  </div>
</template>
