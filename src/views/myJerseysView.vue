<template>
    <main>
        <header class="mb-8 bg-green-600 p-4 flex justify-around items-center rounded-b-lg" >
            <img :src="imgAddress" alt="logo" width="120" height="120">
            <h1 class="text-3xl text-white">My Favorites Jerseys</h1>
            <img :src="imgAddress" alt="logo" width="120" height="120">
        </header>
        <div class="grid grid-cols-3 gap-12">
            <JerseyPic v-for="jersey in jerseys" :jersey-id="jersey" class="w-96"/>
       </div>
    </main>
</template>

<script lang="ts">
    import axios from 'axios';
    import JerseyPic from '@/components/JerseyPic.vue';
    import hockeyJersey from '@/assets/image/hockey-jersey.png';

    export default {
        components: {
            JerseyPic
        },
        data(){
            return {
                jerseys:[] as string[],
                imgAddress: hockeyJersey
            };
        },
        methods: {
            async getMyJerseys() {
                try {
                    const response = await axios.get('http://localhost:3000/api/myjerseys');
                    this.jerseys = response.data;
                } catch (error) {
                    console.error('Error fetching favorites:',  error);
                }
            }
        },
        created() {
            this.getMyJerseys();
        }
    }
</script>