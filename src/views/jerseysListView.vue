<template>
    <SecondHeader :img-address="imgAddress" back-color="bg-slate-800" page-title="Every NHL Jersey" size="120"/>
    <div class="grid grid-cols-3 gap-4 justify-items-center">
        <JerseyPic v-for="jersey in jerseys" :jersey-id="jersey._id" class="w-60"/>
    </div>
</template>
<script>
    import axios from 'axios';
    import JerseyPic from '@/components/JerseyPic.vue';
    import SecondHeader from '@/components/SecondHeader.vue';

    export default{
        components:{
            JerseyPic,
            SecondHeader
        },
        data(){
            return {
                jerseys:[],
                imgAddress: "https://assets.nhle.com/logos/nhl/svg/NHL_dark.svg"
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