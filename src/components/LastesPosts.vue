<template>
  <div class="container m-auto">
    <h2 class="font-black text-slate-800 text-left text-3xl mb-4 ml-3">
      Latest Post
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-2"
    >
      <div v-for="(post, index) in posts" :key="post.id">
        <div v-if="index < 8">
          <router-link :to="`/post/${post.id}`">
            <post-item :post="posts[index]" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  name: "LatestPosts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios.get("https://nest-blog-vue.herokuapp.com/post").then((posts) => {
      this.posts = posts.data;
    });
  },
};
</script>

<style scoped></style>
