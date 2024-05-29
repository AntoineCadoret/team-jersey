<template>
    <main>
       <h1 class="m-8 text-center font-bold text-3xl">My Favorites Jerseys</h1>
       <div class="grid grid-cols-3 gap-12">
            <JerseyPic v-for="jersey in jerseys" :jersey-id="jersey" class="w-96"/>
       </div>
    </main>
</template>
<script lang="ts">
    import axios from 'axios';
    import JerseyPic from '@/components/JerseyPic.vue';

    export default {
        components: {
            JerseyPic
        },
        data(){
            return {
                jerseys:[] as string[]
            };
        },
        methods: {
            async getFavorites() {
                try {
                    const response = await axios.get('http://localhost:3000/api/favorites');
                    console.log('Favorites:', response.data);
                    this.jerseys = response.data;
                } catch (error) {
                    console.error('Error fetching favorites:',  error);
                }
            }
        },
        created() {
            this.getFavorites();
        }
    }
</script>