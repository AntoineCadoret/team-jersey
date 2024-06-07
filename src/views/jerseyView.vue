<template>
    <main>
        <SecondHeader :img-address="imgAddress" :back-color="jerseyInfo.team.color" :page-title="jerseyInfo.team.fullName" size="100"/>
        <div class="flex justify-center items-center">
            <JerseyPic :jerseyId="jerseyInfo.jersey.id" class="w-1/2"/>
            <div class="mx-14 border-2 rounded-xl border-slate-800 w-1/3 h-max">
                <div class="flex justify-around">
                    <p class="text-center border-2  border-slate-800 w-1/3 py-4">Year of activity</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.jersey.activity}}</p>
                </div>
                <div class="flex justify-around">
                    <p class="text-center border-2  border-slate-800 w-1/3 py-4">Type</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.jersey.type}}</p>
                </div>
                <div class="flex justify-around">
                    <p class="text-center border-2 border-slate-800 w-1/3 py-4">Primary color</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.jersey.primary}}</p>
                </div>
                <div class="flex justify-around">
                    <p class="text-center border-2 border-slate-800 w-1/3 py-4">Secondary Color</p>
                    <p class="py-4 text-center border-2 border-slate-800 w-2/3">{{jerseyInfo.jersey.secondary}}</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
    import axios from 'axios';
    import SecondHeader from '@/components/SecondHeader.vue';
    import JerseyPic from '@/components/JerseyPic.vue';
    interface Jersey {
        team: {
            id: string;
            city: string;
            color: string;
            fullName: string;
            jerseys?: {
                homeId: string;
                awayId: string;
                alternatesIds?: string[];
            };
            shortName: string;
        };
        jersey: {
            id: string;
            teamId: string;
            address: string;
            liked: boolean;
            bought: boolean;
            activity?: string;
            type?: string;
            primary?: string;
            secondary?: string;
        };
    }
    export default {
        components: {
            SecondHeader,
            JerseyPic
        },
        props: ['jerseyId'],
        data(){
            return {
                jerseyInfo: {} as Jersey,
                imgAddress: ""
            };
        },
        methods: {
            async getMyJerseys() {
                try {
                    const response = await axios.get('http://localhost:3000/api/jersey', {
                        params: { id: this.$route.params.jersey_id }
                    });
                    console.log(response.data);
                    this.jerseyInfo = response.data;
                    this.imgAddress = "https://assets.nhle.com/logos/nhl/svg/"+this.jerseyInfo.team.shortName+"_dark.svg"
                    console.log(this.jerseyInfo);
                } catch (error) {
                    console.error('Error fetching jersey:',  error);
                }
            }
        },
        created() {
            this.getMyJerseys();
        }
    }
</script>