<template>
    <main>
        <SecondHeader :img-address="imgAddress" back-color="bg-red-700" page-title="My Favorites Jerseys" size="100"/>
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

    getFavorites();

    async function getFavorites() {
        try {
            const response = await axios.get('http://localhost:3000/favorites');
            jerseys.value = response.data;
        } catch (error) {
            console.error('Error fetching favorites:',  error);
        }
    }
</script>