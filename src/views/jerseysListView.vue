<template>
    <img :src="jerseys[1].imageUrl" alt="test">
</template>
<script>
    import axios from 'axios';

    export default{
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
                    console.log(this.jerseys[1]);
                } catch (error) {
                    console.error('Error fetching favorites:',  error);
                }
            }
        },
        created() {
            this.getJerseys();
        }
    }
</script>