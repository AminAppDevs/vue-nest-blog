<template>
  <div class="text-left mr-3 ml-3 mb-6">
    <img :src="post.featured_image" alt="" class="rounded-2xl" />
    <a
      href=""
      class="pt-2 pb-2 pr-4 pl-4 text-xs rounded-md text-white font-medium inline-block mt-3 mb-1"
      :style="`background-color: ${category.color}`"
      >{{ category.name }}</a
    >
    <h3 class="text-lg font-bold text-slate-800 mt-2">{{ post.title }}</h3>
    <p class="text-sm font-light text-slate-600 leading-5 mt-1">
      {{ trimmedString }}...
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostItem",
  computed: {
    trimmedString() {
      return this.post.content.substr(0, 85);
    },
  },
  data() {
    return {
      category: {},
    };
  },
  props: {
    post: {},
  },
  mounted() {
    axios
      .get(
        `https://nest-blog-vue.herokuapp.com/category/${this.post.categoryId}`
      )
      .then((category) => {
        this.category = category.data;
      });
  },
};
</script>

<style scoped></style>
