<script lang="ts">
  export default {
    props: ['jerseyType', 'jerseyAddress']
  }
</script>

<template>
  <div class="jersey flex-col flex items-center m-3">
    <h2 class="text-center font-bold text-2xl">{{ jerseyType }}</h2>
    <div v-if="jerseyType === 'Alternates'" class="my-6 grid grid-cols-3 gap-12">
      <img  v-for="address in jerseyAddress" class="w-60" :src="address" alt="jersey pic">
    </div>
    <img v-else :src="jerseyAddress" class="w-96" alt="jersey pic"/>
  </div>
</template>
