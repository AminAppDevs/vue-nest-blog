<template>
  <div class="m-auto mt-2 mb-5 shadow-lg p-5 bg-white lg:w-2/3">
    <img :src="post.featured_image" alt="" />
    <h2 class="font-bold text-slate-800 text-2xl mt-3 text-left">
      {{ post.title }}
    </h2>
    <p class="mt-1 text-left text-rose-500 text-sm">{{ createdDate }}</p>
    <p class="mt-2 text-left text-slate-600 leading-7">{{ post.content }}</p>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      post: {},
    };
  },
  computed: {
    createdDate: function () {
      if (this.post.created_at) {
        return moment(String(this.post.created_at)).format("MM-DD-YYYY");
      }
      return null;
    },
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
