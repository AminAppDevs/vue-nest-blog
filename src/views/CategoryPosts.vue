<template>
  <div class="pt-10 pb-10 bg-slate-100 mb-10"></div>
  <div class="container m-auto" v-if="!loading">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-2"
    >
      <div>
        <div v-for="(post, index) in posts" :key="post.id">
          <div>
            <router-link :to="`/post/${post.id}`">
              <post-item :post="posts[index]" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="loading"></div>
</template>

<script>
import PostItem from "../components/PostItem.vue";
import axios from "axios";
export default {
  name: "CategoryPost",
  inheritAttrs: false,
  components: { PostItem },
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  created() {
    this.loading = true;
    console.log(this.$route.params.id);
    axios
      .get(
        `https://nest-blog-vue.herokuapp.com/post/category/${this.$route.params.id}`
      )
      .then((posts) => {
        this.posts = posts.data;
        this.loading = false;
      });
  },
};
</script>

<style scoped></style>
