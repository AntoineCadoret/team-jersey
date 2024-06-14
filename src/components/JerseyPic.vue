<template>
    <div class="relative">
        <!-- <RouterLink :to="{ name: 'jersey', params: { jerseyId: jersey._id }}"> -->
        <img class="block" :src="jersey.imageUrl" alt="Jersey pic">
        <!-- </RouterLink> -->
        <!-- <img 
            :src="jersey.liked ? like : notLike" 
            @click="toggle('liked')" 
            alt="like" 
            class="absolute top-0 left-0" 
            width="32"
        />
        <img 
            :src="jersey.bought ? bought : notBought" 
            @click="toggle('bought')" 
            alt="bought" 
            class="absolute top-0 right-0" 
            width="32"
        /> -->
    </div>
</template>

<script lang="ts">
    import { RouterLink } from 'vue-router';
    import axios from 'axios';
    import heartNotLike from "@/assets/image/heart.png";
    import heartLike from "@/assets/image/heart-like.png";
    import emptyBox from "@/assets/image/check-box-empty.png";
    import checkBox from "@/assets/image/check.png";

    interface Jersey {
        _id: string;
        team: string;
        imageUrl: string;
        activity: string;
        type: string;
        primary: string;
        secondary: string;
    }

    export default {
        props:['jerseyId'],
        data(){
            return {
                notLike: heartNotLike,
                like: heartLike,
                notBought: emptyBox,
                bought: checkBox,
                jersey:{} as Jersey
            };
        },
        // computed: {
        //     async jersey(){
        //         let value = jerseys.jerseys.filter(jersey => jersey.id === this.jerseyId)[0];
        //         return value;
        //     }
        // },
        methods: {
            async getJersey(){
                try {
                    console.log(this.jerseyId);
                    const response = await axios.get(`http://localhost:3000/jerseys/${this.jerseyId}`);
                    this.jersey = response.data.jersey;
                } catch(error) {
                    console.error(error);
                }
            }
            // async toggle(iconCliked:string) {
            //     if(iconCliked === 'liked'){
            //         this.jersey.liked = !this.jersey.liked;
            //     } else {
            //         this.jersey.bought = !this.jersey.bought;
            //     }

            //     try {
            //         await axios.post('http://localhost:3000/api/jersey', this.jersey);
            //     } catch (error) {
            //         console.error('Error updating jersey:', error);
            //     }
            // }
        },
        created() {
            this.getJersey();
        }
        // watch: {
        //     jerseyId() {
        //         this.jersey;
        //     }
        // }
    }
</script>