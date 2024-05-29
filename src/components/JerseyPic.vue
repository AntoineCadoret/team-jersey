<template>
    <div class="relative">
        <img class="block" :src="jersey.address" alt="Jersey pic">
        <img 
            :src="activeImg" 
            @click="toggleLiked" 
            alt="like" 
            class="absolute top-0 left-0" 
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
        props:['jerseyId', 'teamName'],
        data(){
            return {
                notLike: heartNotLike,
                like: heartLike,
                activeImg: "",
                jsonIndex: 0
            };
        },
        computed: {
            jersey(){
                let value = jerseys.jerseys.filter(jersey => jersey.id === this.jerseyId)[0];
                this.jsonIndex = jerseys.jerseys.findIndex(jersey => jersey.id === this.jerseyId);
                this.activeImg = value.liked ? this.like : this.notLike; 
                return value;
            }
        },
        methods: {
            async toggleLiked() {
                this.jersey.liked = !this.jersey.liked;
                jerseys.jerseys[this.jsonIndex].liked = this.jersey.liked;
                this.activeImg = this.jersey.liked ? this.like : this.notLike;

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