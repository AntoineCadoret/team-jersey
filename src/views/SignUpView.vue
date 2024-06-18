<template>
    <SecondHeader :img-address="imgAddress" back-color="bg-slate-800" page-title="Sign Up" size="120" />
    <div class="m-12">
        <div class="flex m-6">
            <label class="mx-4" for="username">Username : </label>
            <input class="border-2 border-emerald-700 h-8" type="text" name="username" id="username">
        </div>
        <div class="flex m-6">
            <label class="mx-4" for="email">Email : </label>
            <input class="border-2 border-emerald-700 h-8" type="text" name="email" id="email">
        </div>
        <div class="flex m-6">
            <label class="mx-4" for="password">Password : </label>
            <input class="border-2 border-emerald-700 h-8" type="text" name="password" id="password">
        </div>
        <div class="flex m-6">
            <label class="mx-4" for="confirmPassword">Confirm Password : </label>
            <input class="border-2 border-emerald-700 h-8" type="text" name="confirmPassword" id="confirmPassword">
        </div>
        <button class="rounded-lg p-2 bg-emerald-600  m-6" @click="signUp()">Subscribe</button>
    </div>

</template>
<script>
    import SecondHeader from '@/components/SecondHeader.vue';
    import axios from 'axios';

    export default{
        components: {
        SecondHeader
        },
        data(){
            return {
                imgAddress: "https://assets.nhle.com/logos/nhl/svg/NHL_dark.svg"
            }
        },
        methods: {
            async signUp(){
                if(password.value === confirmPassword.value){
                    try{
                        await axios.put('http://localhost:3000/auth/signup', { username: username.value, email: email.value, password: password.value });
                    } catch(err) {
                        console.error('Error signing up:',  err);
                    }
                     
                } else {
                    alert('the password doesnt match');
                }
                
            }
        }
    }
</script>