<template>
  <div>
    <div class="container">
      <h1 class="mb-4">Home</h1>
      <articleList class="article" />

      <button @click="create()" class="btn-primary btn mt-3">글 생성</button>
    </div>
  </div>
</template>

<script>
import articleList from "../components/articleList.vue";

export default {
  name: "main",
  methods: {
    create() {
      this.$router.push({ path: "/create" });
    }
  },
  components: {
    articleList
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
