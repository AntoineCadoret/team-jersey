<template>
    <main>
        <h1 class="text-center font-bold text-lg">My Jerseys</h1>
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