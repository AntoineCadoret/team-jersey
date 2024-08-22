<template>
    <main>
        <SecondHeader :img-address="imgAddress" back-color="bg-green-600" page-title="My Jerseys" size="100"/>
        <div class="grid grid-cols-3 m-8">
            <JerseyPic v-for="jersey in jerseys" :jersey-id="jersey" class="m-8 w-96"/>
       </div>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import JerseyPic from '@/components/JerseyPic.vue';
    import SecondHeader from '@/components/SecondHeader.vue';
    import hockeyJersey from '@/assets/image/hockey-jersey.png';

    const jerseys = ref([]);
    const imgAddress = hockeyJersey;

    getMyJerseys();

    async function getMyJerseys() {
        try {
            const response = await axios.get('http://localhost:3000/myjerseys');
            jerseys.value = response.data;
        } catch (error) {
            console.error('Error fetching favorites:',  error);
        }
    }
</script>