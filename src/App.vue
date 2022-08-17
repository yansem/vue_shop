<template>
  <div>
    <router-link to="/">Some</router-link>
    <router-link to="/else">Else</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>

</style>
