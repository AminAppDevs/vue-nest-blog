<template>
  <hero-area />
  <lastes-posts />
</template>

<script>
import HeroArea from "../components/HeroArea.vue";
import LastesPosts from "../components/LastesPosts.vue";
export default {
  name: "HomeView",
  components: {
    HeroArea,
    LastesPosts,
  },
};
</script>
