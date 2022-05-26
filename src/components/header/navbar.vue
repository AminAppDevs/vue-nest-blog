<template>
  <div class="bg-white pt-5 pb-5 drop-shadow-3xl pr-2 pl-2 lg:pr-0 lg:pl-0">
    <div class="flex flex-row justify-between items-center container m-auto">
      <img src="@/assets/logo.svg" alt="" class="w-36 mr-5" />
      <ul class="lg:flex xs:flex sm:hidden ml-5 hidden">
        <li class="mr-6 text-sm font-medium text-slate-8 hover:text-rose-600">
          <router-link to="/">Home</router-link>
        </li>
        <template v-for="category in categories" :key="category.id">
          <div>
            <li
              class="ml-8 text-sm font-medium text-slate-8 hover:text-rose-600"
            >
              <router-link :to="`/category/${category.id}`">{{
                category.name
              }}</router-link>
            </li>
          </div>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MainNavbar",
  inheritAttrs: false,
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios
      .get(`https://nest-blog-vue.herokuapp.com/category`)
      .then((categories) => {
        this.categories = categories.data;
      });
  },
};
</script>

<style scoped>
#nav .active-link {
  color: aqua;
}
</style>
