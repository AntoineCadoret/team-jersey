<template>
    <div class="relative">
        <img class="block" :src="jersey.address" alt="Jersey pic">
        <img 
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
        />
    </div>
</template>

<script lang="ts">
    import axios from 'axios';
    import heartNotLike from "@/assets/image/heart.png";
    import heartLike from "@/assets/image/heart-like.png";
    import emptyBox from "@/assets/image/check-box-empty.png";
    import checkBox from "@/assets/image/check.png";

    import jerseys from "@/assets/jerseys.json";
   

    export default {
        props:['jerseyId'],
        data(){
            return {
                notLike: heartNotLike,
                like: heartLike,
                notBought: emptyBox,
                bought: checkBox
            };
        },
        computed: {
            jersey(){
                let value = jerseys.jerseys.filter(jersey => jersey.id === this.jerseyId)[0];
                return value;
            }
        },
        methods: {
            async toggle(iconCliked:string) {
                if(iconCliked === 'liked'){
                    this.jersey.liked = !this.jersey.liked;
                } else {
                    this.jersey.bought = !this.jersey.bought;
                }

                try {
                    await axios.post('http://localhost:3000/api/jerseys', this.jersey);
                } catch (error) {
                    console.error('Error updating jersey:', error);
                }
            }
        },
        watch: {
            jerseyId() {
                this.jersey;
            }
        },
        created() {
            this.jersey;
        }
    }
</script>