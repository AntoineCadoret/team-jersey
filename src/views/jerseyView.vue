<template>
    <main>
        <SecondHeader :img-address="imgAddress" :back-color="jerseyInfo.team.color" :page-title="jerseyInfo.team.fullName" size="120"/>
    </main>
</template>
<script lang="ts">
    import axios from 'axios';
    import SecondHeader from '@/components/SecondHeader.vue';
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
        };
    }
    export default {
        components: {
            SecondHeader
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