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
    <button @click="Edit()" class="mt-5 btn btn-success">Edit!</button>
  </div>
</template>

<script>
import data from "../data";

export default {
  name: "edit",
  data() {
    return {
      index: null,
      title: null,
      name: null,
      article: null
    };
  },
  methods: {
    getInfo() {
      this.index = this.$route.params.id;
      let infoArr = data[this.index];
      this.title = infoArr.title;
      this.name = infoArr.name;
      this.article = infoArr.text;
    },
    Edit() {
      data[this.index].push({
        title: this.title,
        name: this.name,
        text: this.article
      });
    }
  },
  mounted() {
    this.getInfo();
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
