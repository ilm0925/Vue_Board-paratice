<template>
  <div class="container">
    <div class="Title">
      <h2>Title</h2>
      <input v-model="title" class="form-control mt-3 mb-3" type="text" />
      <h2>Name</h2>
      <input v-model="name" class="form-control mt-3 mb-3" type="text" />
    </div>
    <div class="article">
      <h2>Article</h2>
      <textarea
        v-model="article"
        class="form-control "
        name=""
        id=""
        cols="30"
        rows="5"
      ></textarea>
    </div>
    <button @click="submit()" class="mt-5 btn btn-success">Submit!</button>
  </div>
</template>

<script>
import data from "../data";

export default {
  name: "create",
  data() {
    return {
      title: "",
      article: "",
      name: ""
    };
  },
  methods: {
    submit() {
      data.push({
        name: this.name,
        title: this.title,
        text: this.article,
        id: data.length
      });
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

textarea,
input {
  width: 500px;
  text-align: center;
}

input {
  width: 300px;
}
</style>
