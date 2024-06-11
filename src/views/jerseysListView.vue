<template>
    <div class="grid grid-cols-3 gap-4 justify-items-center">
        <JerseyPic v-for="jersey in jerseys" :jersey="jersey" class="w-60"/>
    </div>
</template>
<script>
    import axios from 'axios';
    import JerseyPic from '@/components/JerseyPic.vue';

    export default{
        components:{
            JerseyPic
        },
        data(){
            return {
                jerseys:[]
            }
        },
        methods: {
            async getJerseys() {
                try {
                    const response = await axios.get('http://localhost:3000/jerseys');
                    this.jerseys = response.data.jerseys;
                } catch (error) {
                    console.error('Error fetching jerseys:',  error);
                }
            }
        },
        created() {
            this.getJerseys();
        }
    }
</script>