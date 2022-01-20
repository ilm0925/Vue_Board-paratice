<template>
  <div>
    <div class="container">
      <div class="Box">
        <h2 class="title">{{ title }}</h2>
        <div class="article">{{ text }}</div>
      </div>

      <button class="mt-3 btn btn-dark">Edit</button>
    </div>
  </div>
</template>

<script>
import data from "../data";

export default {
  name: "read",
  data() {
    return {
      hansom: "안녕..",
      index: null,
      title: null,
      text: null
    };
  },

  mounted() {
    this.index = this.$route.params.id;
    this.title = data[this.index].title;
    this.text = data[this.index].text;
    console.log(this.index);
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
.Box {
  width: 300px;
  text-align: center;
  border: 1px solid rgb(163, 159, 159);
  border-radius: 15px;
  overflow: hidden;
}

.title {
  background: #009879;
  color: white;
  display: block;
  font-weight: bold;
  border-bottom: 2px solid;
}

.article {
  word-break: break-all;
  overflow: hidden;
  padding: 12px;
}

.btn-dark {
  width: 100px;
  font-size: 25px;
  border-radius: 5px;
}
</style>
