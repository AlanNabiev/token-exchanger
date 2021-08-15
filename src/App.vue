<template>
    <span class="text-green-500 font-bold text-3xl"
        >Token Exchanger started!</span
    >
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
