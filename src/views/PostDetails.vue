<template>
  <div>{{ post.title }}</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    axios
      .get(`https://nest-blog-vue.herokuapp.com/post/${this.$route.params.id}`)
      .then((post) => {
        this.post = post.data;
      });
  },
};
</script>

<style scoped></style>
