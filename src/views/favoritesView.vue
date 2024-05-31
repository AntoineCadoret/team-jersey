<template>
    <main>
        <SecondHeader :img-address="imgAddress" back-color="bg-red-700" page-title="My Favorites Jerseys" size="100"/>
       <div class="grid grid-cols-3 gap-12">
            <JerseyPic v-for="jersey in jerseys" :jersey-id="jersey" class="w-96"/>
       </div>
    </main>
</template>
<script lang="ts">
    import axios from 'axios';
    import JerseyPic from '@/components/JerseyPic.vue';
    import SecondHeader from '@/components/SecondHeader.vue';
    import hockeyJersey from '@/assets/image/hockey-jersey.png';

    export default {
        components: {
            JerseyPic,
            SecondHeader
        },
        data(){
            return {
                jerseys:[] as string[],
                imgAddress: hockeyJersey
            };
        },
        methods: {
            async getFavorites() {
                try {
                    const response = await axios.get('http://localhost:3000/api/favorites');
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