<template>
    <header :class="backColor" class="mb-12 p-4 flex justify-around items-center rounded-b-lg" >
        <img :src="imgAddress" alt="logo" :width="size" :height="size">
        <h1 class="text-3xl text-white">{{pageTitle}}</h1>
        <img :src="imgAddress" alt="logo" :width="size" :height="size">
    </header>
</template>
<script lang="ts">
    export default {
        name: 'SecondHeader',
        props: ['imgAddress', 'backColor', 'pageTitle', 'size']
    }
</script>