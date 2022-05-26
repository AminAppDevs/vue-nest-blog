<template>
  <main-navbar />

  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import MainNavbar from "./components/header/navbar.vue";
export default {
  components: { MainNavbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Poppins", sans-serif;
}
body {
  background: #f8fafc;
}
</style>
