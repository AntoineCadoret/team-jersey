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
    import heartNotLike from "@/assets/image/heart.png";
    import heartLike from "@/assets/image/heart-like.png";

    import jerseys from "@/assets/jerseys.json";
   

    export default {
        props:['jerseyId', 'teamName'],
        data(){
            return {
                notLike: heartNotLike,
                like: heartLike,
                activeImg: ""
            };
        },
        computed: {
            jersey(){
                let value = jerseys.jerseys.filter(jersey => jersey.id === this.jerseyId)[0];
                this.activeImg = value.liked ? this.like : this.notLike; 
                return value;
            }
        },
        methods: {
            toggleLiked(){
                this.jersey.liked = !this.jersey.liked;
                this.activeImg = this.jersey.liked ? this.like : this.notLike; 
            }
        }
    }
</script>