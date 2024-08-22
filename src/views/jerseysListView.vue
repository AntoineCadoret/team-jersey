<template>
    <SecondHeader :img-address="imgAddress" back-color="bg-slate-800" page-title="Every NHL Jersey" size="120"/>
    <div class="grid grid-cols-3 gap-4 justify-items-center">
        <JerseyPic v-for="jersey in jerseys" :jersey-id="jersey._id" class="w-60"/>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import axios from 'axios';
    import JerseyPic from '@/components/JerseyPic.vue';
    import SecondHeader from '@/components/SecondHeader.vue';

    const jerseys = ref([]);
    const imgAddress = ref('https://assets.nhle.com/logos/nhl/svg/NHL_dark.svg');

    getJerseys();

    async function getJerseys() {
        try {
            const response = await axios.get('http://localhost:3000/jerseys');
            jerseys.value = response.data.jerseys;
        } catch (error) {
            console.error('Error fetching jerseys:',  error);
        }
    }
</script>