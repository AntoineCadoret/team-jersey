<template>
    <main>
        <SecondHeader :img-address="imgAddress" :back-color="team.color" :page-title="team.fullName" size="100"/>
        <div class="flex justify-center items-center">
            <img class="block w-1/2" :src="jerseyInfo.imageUrl" alt="Jersey pic">
            <div class="mx-14 border-2 rounded-xl border-slate-800 w-1/3 h-max">
                <div class="flex justify-around">
                    <p class="text-center border-2  border-slate-800 w-1/3 py-4">Year of activity</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.activity}}</p>
                </div>
                <div class="flex justify-around">
                    <p class="text-center border-2  border-slate-800 w-1/3 py-4">Type</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.type}}</p>
                </div>
                <div class="flex justify-around">
                    <p class="text-center border-2 border-slate-800 w-1/3 py-4">Primary color</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.primary}}</p>
                </div>
                <div class="flex justify-around">
                    <p class="text-center border-2 border-slate-800 w-1/3 py-4">Secondary Color</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.secondary}}</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    import { ref, reactive, defineProps } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    import SecondHeader from '@/components/SecondHeader.vue';
    import JerseyPic from '@/components/JerseyPic.vue';
    
    const props = defineProps(['jerseyId']);
    const imgAddress = ref('');
    let jerseyInfo = reactive({});
    let team = reactive({});
    const route = useRoute();
    console.log(props.jerseyId);

    getMyJerseys();

    async function getMyJerseys() {
        try {
            console.log(props.jerseyId);
            const jerseyResponse = await axios.get('http://localhost:3000/jerseys/' + props.jerseyId);
            jerseyInfo = jerseyResponse.data.jersey;
            getTeam();
            console.log(jerseyInfo);
        } catch (error) {
            console.error('Error fetching jersey:',  error);
        }
    }

    async function getTeam() {
        try{
            const teamResponse = await axios.get('http://localhost:3000/teams/' + jerseyInfo.team);
            team = teamResponse.data.team;
            console.log(team);
            imgAddress.value = "https://assets.nhle.com/logos/nhl/svg/"+team.shortName+"_dark.svg";
        } catch (error) {
            console.error('Error fetching team:',  error);
        }
    }

    // export default {
        
    //     props: ['jerseyId'],
    //     data(){
    //         return {
    //             jerseyInfo: {} as Jersey,
    //             imgAddress: ""
    //         };
    //     },
    //     methods: {
    //         async getMyJerseys() {
    //             try {
    //                 const response = await axios.get('http://localhost:3000/api/jersey', {
    //                     params: { id: this.$route.params.jersey_id }
    //                 });
    //                 console.log(response.data);
    //                 this.jerseyInfo = response.data;
    //                 this.imgAddress = "https://assets.nhle.com/logos/nhl/svg/"+this.jerseyInfo.team.shortName+"_dark.svg"
    //                 console.log(this.jerseyInfo);
    //             } catch (error) {
    //                 console.error('Error fetching jersey:',  error);
    //             }
    //         }
    //     },
    //     created() {
    //         this.getMyJerseys();
    //     }
    // }
</script>